---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他冷冻蔬菜和豆类

## 1. 范围与适用性

本 PCR 适用于原味冷冻蔬菜和豆类的工厂门前景数据生产，路线包括接收、挑选、清洗、产品特定预处理、速冻、包装以及出厂前冷冻储存。漂烫、切分、冷却、挂冰以及单体速冻或块冻，仅在申报产品路线实际采用时纳入。

天工参考流 **Quick-frozen vegetables** 是本类别的代表流，并不表示所有蔬菜和豆类具有同一配方、得率、能耗或储存特征。每个数据包应代表一种明确产品或有文件证明的生产混合，并声明物种/品种或豆类类型、来料状态、切分形式、漂烫处理、冻结形式、添加剂或挂冰、包装形式、地域、生产期及冷冻储存时长。产品特定的一手记录应替换所有暂定筛选范围。

不包括马铃薯、果品、另行分类的食用菌、罐藏或干制品、泥/汁、调味或带酱产品、完整餐食、工厂发运后的零售配送以及消费者解冻或烹饪。种植和入厂运输作为上游链接数据集，不作为工厂前景作业。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-frozen` |
| classification_refs | CPC 3.0 `21319`（仅作映射语境） |
| covered_products | 经申报预处理后快速冻结的原味冷冻蔬菜和豆类，包括单一品种和有文件证明的混合产品 |
| excluded_products | 马铃薯；果品；另行分类产品；罐藏、干制、制泥、制汁、调味、带酱或餐食产品；下游零售与使用 |
| representative_product | Quick-frozen vegetables；仅为类别代表流，每个数据包必须声明实际蔬菜/豆类及路线 |
| production_route | 原料接收 -> 分选/清洗/预处理 -> 条件性漂烫/冷却/挂冰 -> 速冻 -> 包装 -> 冷冻储存 -> 工厂发运 |
| market_state | 工厂门净可售冷冻产品，通常维持在 -18 °C 或更低，并声明包装和生产混合状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门申报冷冻蔬菜或豆类产品的净可售质量 |
| How much | 1 kg 净产品，不含包装 |
| How well | 产品完成申报预处理与速冻路线，符合申报质量规格，发运时为 -18 °C 或更低 |
| How long or cycle | 工厂发运时所代表的一个生产活动期；冷冻储存时长另行声明 |
| reference_flow_link | `quick_freezing_packaging_storage` 的成品输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净冷冻产品 |
| 参考产品流 | Quick-frozen vegetables `f73b84ab-647d-43a3-b10a-86911fa6db57` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际蔬菜或豆类及品种/类型；单一产品或生产混合；来料状态；预处理和切分形式；漂烫时间/温度或未漂烫声明；冻结技术及 IQF/块冻形式；挂冰/添加剂状态；净质量和包装形式；场址与地域；生产期；冷藏时长和发运温度 |

构建前景数据包时，所有必需限定信息应在数据集元数据、过程说明、参考流备注或等效字段中声明。不得用代表性 UUID 掩盖混合或未说明的生产配方。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品与质量平衡输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有结果归一化到 1 kg 净合格冷冻产品；净产品质量不含包装。 |
| `wet_material_mass` | 原料、水、剔除物、废水和包装 | Mass | kg | 记录湿基或接收状态质量；当水分/沥干基准影响解释时必须声明。 |
| `energy_carrier_units` | 电力与热能 | Energy | 电力用 kWh；交付热能用 MJ | 保留实测载能体单位和换算系数；不得在不报告原始值时合并电与热。 |
| `temperature_basis` | 冻结、储存和发运温度 | Temperature | °C | 记录传感器位置、空气/产品基准、时间戳、校准状态及温度偏离。 |
| `refrigerant_mass` | 制冷剂补充、回收、库存变化和排放 | Mass | 按化学物质用 kg | 各制冷剂化学物质分别记录；不得报告成分不明的合计质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 工厂前景 | 对申报产品实际执行的接收、分选、清洗、修整/切分、条件性漂烫和冷却、速冻、包装及至发运的冷冻储存均应纳入。 | `codex-cxp-8-1976` |
| `boundary_upstream_links` | 外购投入 | 种植、入厂运输、供水、电力、燃料/蒸汽、包装、制冷剂生产和废物处理应链接地域和技术适宜的上游数据集。 | `codex-cxp-8-1976` |
| `boundary_downstream_exclusion` | 工厂门结果 | 不包括发运后配送、零售储存、消费者解冻/烹饪及包装报废；若研究扩展边界，应另行报告。 |  |
| `boundary_cold_chain` | 冷冻产品 | 纳入现场实际冻结/冷藏用能、制冷剂损失及温度控制记录；只有申报热中心达到要求冷冻状态时速冻步骤才结束。 | `codex-cxp-8-1976`; `eu-directive-89-108-eec` |
| `boundary_recursive_input` | 外购冷冻蔬菜或豆类 | 同类别外购冷冻配料作为可见产品投入并停止递归前景展开；要求具备限定信息匹配的上游数据集。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂门接收的蔬菜或豆类原料，并声明来源、收获/接收状态、温度和验收质量 |
| starting_condition_role | 工厂前景加工起点；种植和入厂运输保留为上游链接数据集 |
| product_classification_scope | 语义 PCR 范围内的原味冷冻蔬菜和豆类；CPC 3.0 `21319` 仅为映射语境，不是规范身份 |
| recursive_input_rule | 外购同类别冷冻原料保留为产品投入并链接自身上游数据集，不在本前景路线内重新展开 |
| upstream_dataset_requirement | 对种植、运输、公用工程、包装、制冷剂及处理服务使用产品、地域、技术和时间代表性匹配的数据集 |
| disclosure | 声明产品身份、混合份额、预处理路线、漂烫状态、冻结形式、得率、包装、储存时间、发运温度、排除项、分配及数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `preparation_and_pretreatment` | 接收、清洗、准备与预处理 | `required` | 漂烫、冷却、挂冰或其他预处理行仅在申报产品路线实际采用时适用。 | 验收原料的前景预处理 | 每 1,000 kg 发运净冷冻产品 |
| `quick_freezing_packaging_storage` | 速冻、包装、冷冻储存与发运 | `required` | 各阶段按实际运行纳入；只有存在记录证明直接发运时储存时长才可为零。 | 前景成品生产与冷链控制 | 1,000 kg 发运净冷冻产品 |

### 过程：接收、清洗、准备与预处理（`preparation_and_pretreatment`）

#### 输入

##### 产品流

###### 验收蔬菜或豆类原料（`raw_vegetable_pulse_input`）

按物种/类型和供应来源记录进入工厂预处理的实际验收鲜料、冷藏料、浸泡料或其他申报状态原料。

- 选定流：产品特定蔬菜或豆类原料流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：接收记录中的称量验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：暂定原料筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1000
  - 上限：2500
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品；应由产品特定接收与得率记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理及漂烫用水（`process_water_input`）

记录归属于产品的清洗、冷却、漂烫、挂冰、卫生及其他直接工艺用水，不重复计入循环水。

- 选定流：Process water；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量取水加外购水，扣除有记录的内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：暂定工艺用水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：15000
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品；宽范围覆盖干式清洁至高耗水路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用电（`preparation_electricity_input`）

记录输送、分选、清洗、切分、泵、空气处理和预处理设备的分表电量或合理分配电量。

- 选定流：与场址地域和电压匹配的电力供应；天工 UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：电表读数，或设备功率乘经核实运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：暂定预处理用电筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：5
  - 上限：250
  - 单位：kWh
  - 基准：每 1,000 kg 发运净冷冻产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 漂烫条件性热能（`blanching_thermal_energy_input`）

仅在采用漂烫或其他热预处理时记录蒸汽、燃料或热量，并保留载能体身份和上游供应。

- 选定流：申报蒸汽、燃料或热载能体；天工 UUID 未解析
- 流属性/单位：Energy / MJ
- 数量规则：计量交付能量，或载能体数量乘文件化低位热值和锅炉效率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 数量范围：暂定漂烫能耗筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：4000
  - 单位：MJ
  - 基准：每 1,000 kg 发运净冷冻产品；只有有文件证明的非热路线才允许为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入冻结的预处理产品（`prepared_product_output`）

计算分选、切分、条件性漂烫/冷却及沥干后的实测转移产品，并保留内部转移质量用于核对。

- 选定流：产品特定预处理蔬菜或豆类中间流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或验收投入减实测剔除物及可解释质量变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：暂定预处理产品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1800
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品；超出该宽泛暂定区间应调查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分选和预处理剔除物（`preparation_rejects_output`）

按去向记录含土剔除物、不可食部分、不合格产品和其他去除生物质，不得从原料中隐性净扣。

- 选定流：产品特定有机预处理废物；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按类型和处理去向称量剔除物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：暂定剔除物筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1200
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater_output`）

在考虑循环水、产品带水、蒸发及单独处理污泥/固体后，记录离开前景边界的废水。

- 选定流：至申报处理路线的废水；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或基于采集记录的水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge_records`
- 数量范围：暂定废水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：15000
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：速冻、包装、冷冻储存与发运（`quick_freezing_packaging_storage`）

#### 输入

##### 产品流

###### 预处理蔬菜或豆类（`prepared_product_input`）

承接 `prepared_product_output` 的核对后内部转移，不重复添加上游负荷。

- 选定流：产品特定预处理蔬菜或豆类中间流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：等于 `preparation_and_pretreatment` 的转移输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：内部转移核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1800
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品；代表批次应与前一过程输出相等
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冻结和冷藏用电（`freezing_storage_electricity_input`）

记录冻结隧道/平板、输送、包装、冷库、除霜、风机、泵及可归属辅助负荷在申报储存时长内的用电。

- 选定流：与场址地域和电压匹配的电力供应；天工 UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表用电；否则按有文件证明的吨小时、热负荷或经验证工程基准分配共享制冷用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品及申报储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_storage_records`
- 数量范围：暂定冻结与冷藏用电筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：50
  - 上限：1500
  - 单位：kWh
  - 基准：每 1,000 kg 发运净冷冻产品；宽范围应由技术和时长特定记录替换
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_material_input`）

按材料和实际供给质量记录一级、二级及可归属三级包装；包装不计入参考产品质量。

- 选定流：材料特定包装流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：采购或物料清单质量与包装件数核对，并包括实测损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：暂定包装质量筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：5
  - 上限：150
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 场址制冷剂补充（`refrigerant_makeup_input`）

按化学物质记录服务于所代表冻结和冷藏作业设备的制冷剂采购、补充、回收、转移及期初/期末库存。

- 选定流：化学物质特定制冷剂；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：仅在场址质量平衡后分配采集的制冷剂台账数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_ledger`
- 数量范围：暂定制冷剂补充筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品；不是排放因子，必须由化学物质特定台账替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运净包装冷冻产品（`reference_frozen_product_output`）

这是定量参考。记录不含包装的净产品质量，并确认申报产品和路线限定信息。

- 选定流：Quick-frozen vegetables `f73b84ab-647d-43a3-b10a-86911fa6db57`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定归一化输出 1,000 kg 净合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：参考输出恒等校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：不含包装的归一化净参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 冻结、包装及温度失控剔除物（`finished_product_rejects_output`）

记录不合格冷冻产品、包装废物、解冻或温度失控产品及其实际处理去向；不同材料应分别记录。

- 选定流：产品和材料特定废物流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：称量剔除物并按废物路线记录处置
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 数量范围：暂定成品剔除物筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的制冷剂（`refrigerant_emission_output`）

由场址制冷剂质量平衡计算化学物质特定排放，仅分配服务于所代表冻结和冷藏作业的份额。

- 选定流：化学物质特定制冷剂空气排放；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：对台账和设备库存记录应用 `calc_refrigerant_mass_balance`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 发运净冷冻产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_ledger`
- 来源：`ipcc-2006-v3-ch7`
- 数量范围：暂定制冷剂排放筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1,000 kg 发运净冷冻产品；不是排放因子，应由场址质量平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可分离产品、产线、批次或计量表 | 首先采用过程细分、独立批次记录和分表，使负荷归于引起该负荷的产品。 | `iso-14044-2006` |
| `allocation_internal_transfer` | 预处理产品内部流 | 两个前景过程间的内部转移不得分配或重复添加上游负荷；投入和输出质量必须相等。 | `mass-balance-identity` |
| `allocation_multiple_saleable_products` | 无法细分的联合生产 | 只有在物理关系反映因果时才采用该关系；否则采用经济分配，并报告价格、期间、份额和敏感性结果。 | `iso-14044-2006` |
| `allocation_rejects_and_recovery` | 剔除物、副产品、回收、能量回收或处置 | 保持数量和去向可见；披露任何抵扣、替代、截断或负荷归属，不得默认废物无负荷。 | `iso-14044-2006` |
| `allocation_shared_refrigeration` | 共享冻结和冷库公用工程 | 优先分表；否则按经验证热负荷或吨小时等文件化因果基准分配电力和化学物质特定制冷剂排放，并披露敏感性。 | `ipcc-2006-v3-ch7` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `preparation_and_pretreatment`; `quick_freezing_packaging_storage` | 来料、内部转移、净产品和剔除物 | 地磅、秤、批次和去向记录 | 产品/类型；供应商；批次；毛/皮/净质量；水分/沥干基准；剔除物类型；去向；时间戳 | 接收、转移、包装和剔除发运时校准称量 | kg | 每批或每班 | 所有代表活动期，通常连续 12 个月或有理由的完整产季 | 所有纳入产线和场址 | 按产品和批次汇总，核对投入、输出、库存变化、水分增减及抽样 | 秤校准、批次追溯、库存核对和异常日志 |
| `cp_utility_records` | `preparation_and_pretreatment` | 水、电、蒸汽、燃料和热 | 表计、账单、设备运行时间和载能体属性记录 | 表计起止；账单量；运行时间；功率；燃料质量/体积；热值；效率；批次关联 | 优先分表，否则采用文件化工程分配 | kg; kWh; MJ | 表计间隔及每个生产活动期 | 与生产数据相同 | 所有纳入设备和公用工程 | 扣除无关负荷并归一化到净发运产品 | 表计校准、账单、运行日志、换算来源和分配工作表 |
| `cp_water_discharge_records` | `preparation_and_pretreatment` | 废水及产品带水/蒸发水 | 排放表、处理日志和水量平衡 | 取水；排水；循环；产品带水；蒸发；污泥；去向 | 计量排水或计算有文件证明的水量平衡 | kg | 每日或每活动期 | 与生产数据相同 | 所有纳入排放点 | 核对取水、排水、循环、带水、蒸发和去除固体 | 表计检查、处理凭证、采样记录和平衡异常日志 |
| `cp_freezing_storage_records` | `quick_freezing_packaging_storage` | 冻结/储存能耗、时长及温度 | 分表、冻结机、冷库和校准传感器记录 | kWh；批次；冻结机型；产品入口/热中心/空气温度；入库/出库；除霜；开门事件 | 连续或间隔记录并链接批次和库存 | kWh; °C; hour or day | 温度连续；每个表计间隔 | 所有代表生产和储存期 | 所有纳入冻结和冷藏设备 | 尽量区分冻结与储存；按经验证因果基准分配共享负荷 | 表计和传感器校准、缺失数据、温度偏离及纠正措施 |
| `cp_packaging_records` | `quick_freezing_packaging_storage` | 包装材料和损耗 | 物料清单、采购、产线计数和剔除记录 | 材料；供应商；单位质量；使用件数；声明时再生含量；剔除；去向 | 实际发料与包装件数及余料核对 | kg | 每个包装活动期 | 与生产数据相同 | 所有纳入形式和产线 | 按材料汇总并归一化到净产品 | 供应商规格、单位质量检查和库存核对 |
| `cp_refrigerant_ledger` | `quick_freezing_packaging_storage` | 制冷剂补充、回收、库存、设备充注和排放 | 化学物质特定采购、维护、回收和设备登记 | 化学物质；期初/期末库存；采购；补充；回收/转移；设备充注和变化；日期；服务设备 | 核对化学物质特定场址质量平衡并记录纳入设备分配 | 按化学物质用 kg | 每次维护及年度核对 | 与生产数据相同并有期初/期末库存 | 服务于代表输出的所有冻结和冷藏设备 | 先计算场址排放再分配产品；记录未纠正时禁止负排放 | 维护发票、钢瓶称量、技师日志、设备登记和平衡复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单数量 | 归一化数量 = 纳入期间数量 / 净合格发运产品质量 × 1,000 kg | 纳入数量；净发运产品质量 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_material_reconciliation` | 预处理和成品质量 | 验收投入 + 并入产品的水/添加物 + 期初在制品 = 净产品 + 剔除物 + 废水固体 + 期末在制品 + 实测/估算水分变化；披露未核对差额 | 称量投入、输出、库存、产品带水和水分变化 | 得率、剔除率和平衡差额 | `mass-balance-identity` |
| `calc_thermal_energy` | 燃料或蒸汽预处理 | 用文件化热值/焓和实测效率换算采集的载能体数量，并保留原始载能体记录 | 燃料/蒸汽数量；热值或焓；效率 | MJ 交付热能 | `mass-balance-identity` |
| `calc_refrigerant_mass_balance` | 制冷剂空气排放 | 按化学物质由采购/补充、期初/期末物料和设备库存计算排放，扣除有记录回收和转移；在因果分配纳入设备前先计算场址值 | 期初/期末库存；采购；补充；回收；转移；设备充注变化；分配驱动量 | 每参考产品各制冷剂化学物质 kg 排放 | `ipcc-2006-v3-ch7` |
| `calc_shared_cold_load` | 共享冻结或储存系统 | 优先分表；否则按包括产品质量、降温和储存时长的经验证热负荷或吨小时分配实测电力及计算制冷剂排放 | 公用工程计量；产品质量；进出口温度；储存吨小时；设备范围 | 产品归属冻结/储存清单 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明实际蔬菜/豆类、品种/类型、混合份额、来料状态、预处理、漂烫、冻结形式、挂冰/添加剂、包装和地域。 | 批次规格、配方、标签、供应商记录和过程路线 |
| `dq_temporal_representativeness` | 前景清单 | 覆盖连续 12 个月或有理由的完整产季；纳入可归属的启动、除霜、清洁、储存和不合格事件。 | 带日期的表计、批次、生产、储存和异常记录 |
| `dq_mass_completeness` | 物料和水量平衡 | 核对全部物料输出、库存变化、水分效应、剔除物和排放；调查并披露剩余差额，不得强行闭合。 | 签署核对工作表和异常调查 |
| `dq_cold_chain` | 冻结和储存 | 保留校准温度记录以证明热中心终点及储存/发运状态，并记录所有偏离与纠正措施。 | 传感器校准、连续日志、批次放行和偏离日志 |
| `dq_energy_completeness` | 公用工程 | 纳入直接过程、可归属待机、除霜、风机、泵、冷库和辅助负荷；记录排除的无关负荷及分配。 | 表计图、账单、运行日志和分配工作表 |
| `dq_refrigerant_completeness` | 制冷 | 报告化学物质特定质量平衡和设备范围；不得仅因缺少维护记录推断零泄漏。 | 维护台账、钢瓶称量、设备登记、回收记录和质量平衡复核 |
| `dq_provisional_ranges` | 所有推理估算 | 每个 `reasoned_estimate` 范围均为可替换筛选值，不得作为产品配方或发布关键允许值。 | 发布前由产品特定来源、经评审前景数据集或文件化评审接受替换 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 确认产品流、Mass 属性、质量单位组、kg 单位及恰好 1 kg 净参考量；包装质量必须分开。 | `mass-balance-identity` |
| `validation_scope_qualifiers` | 产品身份 | 拒绝未说明的通用配方：全部必需限定信息及生产混合份额必须存在并内部一致。 | `codex-cxs-320-2015` |
| `validation_process_coverage` | 前景边界 | 确认两个必需过程以及所有路线适用的条件性作业、公用工程、剔除物、废水、包装、储存期和处理去向均已表示。 | `codex-cxp-8-1976` |
| `validation_mass_balance` | 物料清单 | 确认内部转移匹配、净输出等于定量参考，物料/水量平衡差额已披露并调查。 | `mass-balance-identity` |
| `validation_temperature` | 冷冻状态 | 确认批次关联的冻结终点、储存和发运记录证明申报的 -18 °C 或更低状态，并识别温度偏离。 | `codex-cxp-8-1976`; `eu-directive-89-108-eec`; `eu-regulation-37-2005` |
| `validation_no_double_counting` | 内部与上游流 | 确认预处理产品内部转移不重复承担上游负荷，同类别外购投入仅采用一个匹配上游数据集。 | `mass-balance-identity` |
| `validation_refrigerant` | 直接排放 | 确认化学物质特定场址核对、设备范围、回收、库存变化、产品分配及不存在无依据零排放假设。 | `ipcc-2006-v3-ch7` |
| `validation_provisional_evidence` | 候选范围 | 确认推理估算范围标为暂定，未替代前景记录或被表述为通用类别参数。 |  |
| `validation_allocation` | 多输出和共享系统 | 确认先尝试细分，并披露剩余分配方法、驱动量、期间、份额和敏感性。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品和路线特定的冷冻蔬菜或豆类工厂前景数据包 |
| downstream_use | 经评审发布后作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 当产品、地域、技术、生产期、包装和储存限定信息与研究匹配时，用于构建 LCA process 或 lifecyclemodel |
| excluded_use | 作为所有冷冻蔬菜/豆类的通用配方；种植；未补充数据集的下游配送/零售/使用；范围外产品；把暂定范围用作经评审默认值 |
| required_metadata | 所用 PCR id 和版本；实际产品/类型；混合份额；供应商/来源；场址/地域；生产期；来料状态；预处理/漂烫/冻结路线；挂冰/添加剂；包装；储存时长；发运温度；分配；上游数据集引用 |
| required_quality_disclosure | 时间/场址覆盖；物料和水量平衡；表计和传感器覆盖；缺失数据；分配及敏感性；制冷剂方法；温度偏离；暂定估算；排除项和不确定性 |
| update_trigger | 产品混合、供应商/来源、得率、预处理、冻结技术、包装、制冷剂、能源、冷库时长、场址、法规或证据发生足以实质改变归一化清单的变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-320-2015` | 标准（`standard`） | Codex Alimentarius, CXS 320-2015, *Standard for Quick Frozen Vegetables*，官方标准目录及文件链接，https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/（访问于 2026-08-11） | 产品类别标准身份和产品特定范围交叉核对；无法访问的代理正文未用于任何定量范围 |
| `codex-cxp-8-1976` | 官方指南（`official_guidance`） | Codex Alimentarius, CAC/RCP 8-1976（2008 修订）, *Code of Practice for the Processing and Handling of Quick Frozen Foods*, https://www.fao.org/input/download/standards/285/CXP_008e.pdf（访问于 2026-08-11） | 过程分解、速冻终点、冷链边界、储存、温度监测和记录保存 |
| `eu-directive-89-108-eec` | 标准（`standard`） | Council Directive 89/108/EEC，CELEX `31989L0108`, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31989L0108（访问于 2026-08-11） | -18 °C 冷冻状态及冷链设备要求 |
| `eu-regulation-37-2005` | 标准（`standard`） | Commission Regulation (EC) No 37/2005，CELEX `32005R0037`, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32005R0037（访问于 2026-08-11） | 运输/仓储/储存温度的频繁定期记录、仪器符合性和记录保存 |
| `ipcc-2006-v3-ch7` | 方法因子（`method_factor`） | IPCC, *2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 3, Chapter 7, https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_7_Ch7_ODS_Substitutes.pdf（访问于 2026-08-11） | 化学物质特定制冷排放与质量平衡法 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, Clause 4.3.4 | 分配层级、文件化和敏感性 |
| `mass-balance-identity` | 方法因子（`method_factor`） | 应用于申报前景边界的质量守恒与计量清单恒等关系 | 参考归一化、内部转移、得率、水/物料核对和共享负荷计算 |
