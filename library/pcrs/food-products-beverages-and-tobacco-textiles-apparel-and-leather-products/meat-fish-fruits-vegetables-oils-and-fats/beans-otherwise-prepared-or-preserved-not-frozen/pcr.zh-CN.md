---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-otherwise-prepared-or-preserved-not-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他制作或保藏、非冷冻豆类

## 1. 范围与适用性

本 PCR 适用于经烹煮、调味、罐装、玻璃瓶装、蒸煮袋包装、无菌包装、酸化或其他方式制作或保藏，并以非冷冻状态供应的食用豆类或豆科籽实的工厂生产。前景范围从原料豆或预处理豆及其他外购投入到达制造场址开始，涵盖制备、配方、保藏、后处理、包装，直至成品在制造厂门放行。

鲜豆、未经制作的干豆、冷冻调制豆、豆粉或分离豆类配料，以及不以豆类为产品定义主体的复合餐食不在本 PCR 范围内。种植、外购配料与包装材料的制造、入厂运输、分销、零售、消费者制备和生命终期不属于前景边界；研究目标与范围纳入这些阶段时，应通过上游或下游数据集连接。代表性路线为在密封容器中热加工的常温货架稳定豆类；替代路线必须声明其保藏机制和适用的安全控制。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-otherwise-prepared-or-preserved-not-frozen |
| classification_refs | CPC 3.0: 21395，Beans, otherwise prepared or preserved, not frozen |
| covered_products | 经烹煮、配方、罐装、瓶装、袋装、无菌包装、酸化或其他制作或保藏方式处理的非冷冻食用豆类或豆科籽实 |
| excluded_products | 鲜豆；未经制作的干豆；冷冻调制豆；豆粉与分离配料；不以豆类定义的复合餐食 |
| representative_product | 采用液体装填介质并装入密封容器的常温货架稳定调制豆类 |
| production_route | 接收与制备；可选的水合、漂烫、烹煮或配方；装填与密封；路线特定保藏；冷却和后处理包装 |
| market_state | 制造厂门的非冷冻成品；必须声明常温货架稳定或冷藏状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明配方、保藏路线和包装形式供应的制作或保藏食用豆类 |
| How much | 1 kg 净成品，包括可食豆固形物和任何装填介质，但不包括包装质量 |
| How well | 符合声明豆类身份、配方、固形物或沥干比例、保藏控制及适用安全与质量规范的可销售非冷冻产品 |
| How long or cycle | 制造厂门的一个已放行生产批次；货架期或冷藏要求作为限定信息声明，不作为归一化乘数 |
| reference_flow_link | 功能单位由下表所定义的单一 Tiangong 产品流和 1 kg 参考数量实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净成品 |
| 参考产品流 | 豆类，其他制作或保存，非冷冻 `e1ec238e-9181-4fd3-912e-a88b4a45ad56` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 豆种或商品类型；入厂豆状态；配方与装填介质；保藏路线；净含量基准；相关时的沥干固形物或固形物比例；主要容器类型；常温货架稳定或冷藏市场状态；生产地域；生产时期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注或等效字段中声明。缺失限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景清单归一化为制造厂门 1 kg 豆类与装填介质的净成品；参考数量不含任何包装质量，但包装须保留为清单投入。 |
| `net_and_drained_mass` | 以液体装填介质销售的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录净成品质量；适用沥干质量声明或规范时，另行记录沥干豆质量或固形物比例，不得用其替代参考数量。 |
| `as_received_composition` | 豆类、配料、废弃物和产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 物料质量按接收状态报告；采用干物质或水分换算时，必须保留实测水分值和计算过程。 |
| `energy_carrier_units` | 电力与热能 | 数据集为载能体选择的能量属性 | 电力用 kWh；燃料、蒸汽或热用 MJ | 保留计量的载能体原单位，并在归一化至 1 kg 参考产品前记录换算因子。 |

## 5. 系统边界

适用下列前景边界规则：

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_operations` | 直接控制的制造活动 | 纳入接收与制备、场内水合或烹煮、配方、装填、密封、保藏、冷却、可归属于生产的清洗、后处理、包装、场内公用工程使用、废弃物、废水，以及存在时直接控制的废物处理。 | `codex-cxs-297-2009`; `codex-cxc-23-1979`; `eu-2019-2031-fdm-bat` |
| `sb_upstream_links` | 外购投入 | 将外购豆类、配料、供水、载能体、包装和范围内入厂运输作为产品投入并连接适当上游数据集；不得在本前景数据包中重建其上游生产。 | `iso-14044-2006` |
| `sb_same_category_input` | 入厂制作或保藏豆类 | 若投入已属于本产品类别，只记录一次外购产品投入，并声明制备状态和供应商数据集；不得在同一前景系统内对其递归应用本 PCR。 | `iso-14044-2006` |
| `sb_preservation_route` | 热加工、无菌、酸化或其他保藏 | 声明保藏路线并采集其关键控制记录。对于密封容器中的低酸或酸化低酸食品，应采用由主管机构或合格工艺专家制定的排程过程，并保留适用关键因子。 | `codex-cxc-23-1979`; `us-ecfr-21-cfr-113` |
| `sb_post_gate_exclusion` | 厂门后阶段 | 前景结果排除分销、零售、消费者储存或制备及包装或产品生命终期；声明的研究范围明确纳入时，应作为独立下游过程建模。 | `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原料、干燥、鲜品、预煮或其他预处理状态的豆类及全部其他外购投入到达制造场址门，并声明状态、质量、供应商、来源和上游数据集引用。 |
| starting_condition_role | 用于生产首个前景数据包的制造厂门起始条件。 |
| product_classification_scope | 以非冷冻状态供应的制作或保藏食用豆类；保藏路线和市场状态仍为必需限定信息。 |
| recursive_input_rule | 入厂制作或保藏豆类只作为上游产品投入记录一次并连接供应商数据集，不在同一前景数据包中递归进入本 PCR 的另一实例。 |
| upstream_dataset_requirement | 将外购豆类、配料、包装、能源、供水和范围内运输连接至地域与时间适当的上游数据集，并披露代理和数据缺口。 |
| disclosure | 披露入厂豆状态、配方、保藏路线、净质量和沥干质量基准、包装形式、共产品、分配、时间覆盖、场址覆盖和省略阶段。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | 豆类接收与制备 | required | 始终纳入场址执行的接收、检查、分选和制备活动。 | 前景物料制备 | kg 制备后豆中间产品 |
| `cooking_and_formulation` | 水合、烹煮与配方 | conditional | 纳入场址执行的每项水合、漂烫、烹煮、酱汁制备、调味或混合操作；完全接收预处理豆时须说明省略理由。 | 前景产品转化 | kg 烹煮或配方豆中间产品 |
| `filling_and_preservation` | 装填、密封与保藏 | required | 纳入实际装填和保藏路线，包括形成声明市场状态的热加工、无菌、酸化、冷藏或其他控制。 | 前景保藏与初级包装 | kg 稳定化已装填产品 |
| `post_process_packaging` | 后处理、包装与放行 | required | 纳入存在时的保藏后冷却或干燥、检查、贴标、二级或三级包装、成品暂存及制造厂门放行。 | 前景成品放行 | 1 kg 净参考产品 |

### 过程：豆类接收与制备（`receiving_and_preparation`）

#### 输入

##### 产品流

###### 接收的原料豆或预处理豆（`raw_beans_input`）

记录进入前景场址的豆类实测质量与状态，包括供应商、批次、水分或制备状态和所连接的上游数据集。

- 选定流：原料豆或预处理豆
- 流属性/单位：Mass / kg
- 数量规则：进入生产批次的合格豆实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：
- 数量范围：暂定豆类投入 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.4
  - 上限：1.4
  - 单位：kg/kg 净成品
  - 基准：覆盖干豆水合路线和鲜豆路线的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备与清洗用水（`preparation_water`）

记录用于清洗、分选、浸泡或制备并跨越前景边界的水，区分循环水与补充水。

- 选定流：供水
- 流属性/单位：Mass / kg
- 数量规则：归属于生产批次的计量或质量平衡补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定制备用水 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：kg/kg 净成品
  - 基准：覆盖直流水和循环制备系统的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后豆中间产品（`prepared_bean_intermediate`）

跟踪转移至烹煮、配方或装填的内部豆中间产品，使过程间质量平衡保持明确。

- 选定流：制备后豆中间产品
- 流属性/单位：Mass / kg
- 数量规则：合格豆投入加保留水和配料，减实测废弃物及废水转移
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次及每 1 kg 净成品参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 来源：

##### 废物流

###### 分选与制备废弃物（`preparation_rejects`）

按实测去向记录剔除的受损豆、石块、异物、豆皮、修整物及其他固体废弃物。

- 选定流：豆类制备废弃物
- 流属性/单位：Mass / kg
- 数量规则：按处理或回收去向实测的废弃物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：
- 数量范围：暂定固体废弃物 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg 净成品
  - 基准：覆盖不同入厂豆状态和分选强度的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

记录离开制备过程的废水，包括实测体积或质量及声明的场内或场外处理路线。

- 选定流：食品制备废水
- 流属性/单位：Mass / kg
- 数量规则：归属于制备的计量排放或水量平衡估算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定制备废水 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净成品
  - 基准：以计量用水和产品保留水约束的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：水合、烹煮与配方（`cooking_and_formulation`）

#### 输入

##### 产品流

###### 转入的制备后豆（`prepared_beans_to_cooking`）

记录制备过程的内部转移，不重复增加豆类上游负荷。

- 选定流：制备后豆中间产品
- 流属性/单位：Mass / kg
- 数量规则：等于 `receiving_and_preparation` 的实测或计算输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_records`
- 来源：

###### 配方水、装填介质与其他配料（`recipe_inputs`）

记录添加水、盐水、酱汁、油、糖、盐、酸、调味料及其他配方物料；对研究有实质影响时按供应商投入分列。

- 选定流：配方配料与装填介质
- 流属性/单位：Mass / kg
- 数量规则：批次配方领料记录，并与退回或未用物料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_records`
- 来源：`codex-cxs-297-2009`
- 数量范围：暂定配方投入 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kg/kg 净成品
  - 基准：覆盖干装、盐水、酱汁及调味配方的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烹煮电力（`cooking_electricity`）

记录分配至本过程的泵、输送、制备设备、混合器及电加热用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或依据设备功率与运行时间的文件化分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定烹煮电力 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1
  - 单位：kWh/kg 净成品
  - 基准：覆盖制备与烹煮技术的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烹煮热能（`cooking_thermal_energy`）

记录浸泡水加热、漂烫、烹煮和酱汁制备所用蒸汽、热或燃料能，并声明载能体与场内燃烧。

- 选定流：热能载体
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸汽或燃料，或由实测载能体消耗计算热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定烹煮热量 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：10
  - 单位：MJ/kg 净成品
  - 基准：覆盖直接烹煮、蒸汽及接收预煮豆路线的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烹煮或配方豆中间产品（`cooked_formulated_intermediate`）

记录配方添加、烹煮损失和过程取样后转移至装填的质量。

- 选定流：烹煮或配方豆中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量或批次质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_records`
- 来源：

##### 废物流

###### 烹煮与配方损失（`cooking_losses`）

记录送往回收、处理或处置的溢料、罐体残留、不合格物料及废水。

- 选定流：烹煮与配方废物
- 流属性/单位：Mass / kg
- 数量规则：实测废物记录，或披露不确定性的过程质量平衡差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cooking_records`
- 来源：
- 数量范围：暂定烹煮损失 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净成品
  - 基准：包括过程水和不合格产品的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：装填、密封与保藏（`filling_and_preservation`）

#### 输入

##### 产品流

###### 转入的烹煮或配方豆（`beans_to_filling`）

记录进入装填与保藏的内部产品转移。

- 选定流：烹煮或配方豆中间产品
- 流属性/单位：Mass / kg
- 数量规则：等于 `cooking_and_formulation` 的实测或计算输出；省略该过程时直接计量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_records`
- 来源：

###### 初级容器与封口件（`primary_packaging`）

按材料和质量记录作为初级容器的罐、瓶、盖、袋、托盘和纸盒以及封口件；包装质量不计入净参考产品质量。

- 选定流：食品初级包装材料
- 流属性/单位：Mass / kg
- 数量规则：领用包装质量减退回未用包装，再加文件化产线损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_records`
- 来源：
- 数量范围：暂定初级包装 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.8
  - 单位：kg/kg 净成品
  - 基准：覆盖软袋、金属容器和重质玻璃瓶的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏电力与热能（`preservation_energy`）

记录装填、密封、杀菌釜、巴氏杀菌、无菌加工或其他稳定化所用电力、蒸汽、热或燃料；产出数据集中须按载能体分列。

- 选定流：电力与热能载体
- 流属性/单位：Energy / 按载能体使用 kWh 和 MJ
- 数量规则：保藏批次的计量载能体使用量或文件化设备分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_records`
- 来源：`codex-cxc-23-1979`; `eu-2019-2031-fdm-bat`
- 数量范围：暂定保藏能耗 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：8
  - 单位：MJ-equivalent/kg 净成品
  - 基准：宽泛的首轮合并能耗先验；保留实际载能体且不得以此范围作为换算因子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却与过程用水（`preservation_water`）

记录用于杀菌釜、冷却、封口保护或其他保藏服务的补充水，并区分循环和排放。

- 选定流：供水
- 流属性/单位：Mass / kg
- 数量规则：归属于保藏批次的计量补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_records`
- 来源：`codex-cxc-23-1979`; `eu-2019-2031-fdm-bat`
- 数量范围：暂定保藏用水 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg/kg 净成品
  - 基准：覆盖闭路、直流和无水保藏系统的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化已装填产品（`stabilized_filled_product`）

记录已完成声明保藏控制并转至最终检查与包装的已装填产品。

- 选定流：稳定化已装填调制豆
- 流属性/单位：Mass / kg 净产品
- 数量规则：保藏后合格的已装填产品净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_records`
- 来源：`codex-cxs-297-2009`; `codex-cxc-23-1979`

##### 废物流

###### 保藏废水与不合格单元（`preservation_waste`）

产出数据集中按处理去向分别记录冷却排水、清洗废水、泄漏或加工不足容器、包装废料和产品损失。

- 选定流：保藏废水与不合格已装填单元
- 流属性/单位：Mass / kg
- 数量规则：计量排放加不合格单元数量乘以实测单元质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_records`
- 来源：`codex-cxc-23-1979`; `eu-2019-2031-fdm-bat`
- 数量范围：暂定保藏废物 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg/kg 净成品
  - 基准：主要由水系统设计和不合格率决定的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：后处理、包装与放行（`post_process_packaging`）

#### 输入

##### 产品流

###### 转入放行的稳定化产品（`stabilized_product_to_release`）

记录进入检查、贴标、装箱和成品暂存的合格内部产品转移。

- 选定流：稳定化已装填调制豆
- 流属性/单位：Mass / kg 净产品
- 数量规则：等于 `filling_and_preservation` 的合格输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_release_records`
- 来源：

###### 二级与三级包装（`secondary_packaging`）

按材料和质量记录标签、箱、托盘、缠绕膜、分摊托盘及其他运输包装。

- 选定流：二级与三级包装材料
- 流属性/单位：Mass / kg
- 数量规则：包装领用记录减退回未用物料，并纳入文件化产线损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：
- 数量范围：暂定二级包装 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.3
  - 单位：kg/kg 净成品
  - 基准：箱、膜和分摊托盘质量的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 放行阶段电力（`release_electricity`）

记录输送、干燥、检查、贴标、装箱及声明的冷藏成品暂存用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或文件化设备与储存分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：`eu-2019-2031-fdm-bat`
- 数量范围：暂定放行电力 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.8
  - 单位：kWh/kg 净成品
  - 基准：覆盖常温放行与冷藏暂存的宽泛先验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行参考产品（`released_reference_product`）

这是最终验收后离开前景系统的单一参考产品；包装质量仍不计入 1 kg 净产品数量。

- 选定流：豆类，其他制作或保存，非冷冻 `e1ec238e-9181-4fd3-912e-a88b4a45ad56`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：制造厂门 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 放行废弃物与包装废物（`release_waste`）

按材料和处理去向记录受损单元、标签或箱废料及其他放行阶段废物。

- 选定流：放行阶段产品与包装废物
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量加不合格单元数量乘以实测单元质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_release_records`
- 来源：
- 数量范围：暂定放行废物 QA 先验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 净成品
  - 基准：产品废弃物与包装废料的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

按以下顺序执行分配：

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 可独立计量的产品、配方、产线或批次 | 技术可行时，通过过程细分或直接采用批次、产线、设备、配方和计量记录避免分配。 | `iso-14044-2006` |
| `allocation_recovery` | 回收材料或外供能源 | 仅当目标与范围支持，且替代产品、质量、市场和方法均有记录时，采用系统扩展或替代；否则在前景系统中保留回收处理及无收入废物负荷。 | `iso-14044-2006` |
| `allocation_physical` | 具有多个有价值输出且无法避免的共享负荷 | 按反映因果关系的文件化物理关系分配，如产品质量、豆干固形物、能量含量或实测过程使用量；装填介质差异会扭曲关系时不得使用净装填质量。 | `iso-14044-2006` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的共享负荷 | 仅将经济分配作为披露的后备方法，并保留价格期间、币种、共产品状态和敏感性分析。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `receiving_and_preparation` | 豆类、制备用水、制备后中间产品、废弃物和废水 | 地磅、批次、水表、废物和排放记录 | lot_id; supplier; bean_state; incoming_mass_kg; accepted_mass_kg; water_makeup_kg; reject_mass_kg; wastewater_kg; destination | 将校准秤和仪表与批次及废物转移记录核对 | kg | 每批或生产班次 | 至少一个有代表性的年度或季节生产期，并识别停机和异常期 | 每个生产场址 | 按批次汇总合格投入和输出，再按放行净产品质量归一化 | 校准记录；批次可追溯性；水量平衡；废物转移文件；缺失数据日志 |
| `cp_cooking_records` | `cooking_and_formulation` | 配方投入、电力、热量、中间产品和损失 | 批次配方、物料领用、仪表、锅炉和生产记录 | batch_id; ingredient_mass_kg; water_mass_kg; electricity_kWh; steam_or_fuel_quantity; carrier_unit; intermediate_mass_kg; loss_mass_kg | 记录配方领用和直接计量；共享公用工程按文件化设备时间或产量分配 | kg; kWh; MJ 或载能体单位 | 每批或班次 | 覆盖产品和路线变异的代表性运行期 | 每条烹煮或配方产线 | 保留载能体差异进行换算，计算批次总量并按放行净产品质量归一化 | 配方授权；仪表校准；公用工程账单；分配工作表；质量平衡 |
| `cp_preservation_records` | `filling_and_preservation` | 初级包装、保藏能量与用水、装填产品、关键因子、废水和不合格单元 | 包装领用、装填机、封口机、杀菌釜或保藏系统、仪表和质量记录 | lot_id; container_type; packaging_mass_kg; net_fill_kg; drained_mass_kg_if_applicable; initial_temperature; process_time; process_temperature; pH_or_aw_if_applicable; energy; water_makeup_kg; wastewater_kg; rejected_units | 同期采集产线和排程过程记录；将包装和公用工程总量与合格装填单元核对 | kg; kWh; MJ; °C; min; 适用时 pH 或 aw | 每批；关键因子频率由经验证的保藏过程确定 | 报告期内全部保藏批次 | 每条保藏产线或系统 | 按批次汇总合格产品、包装、水、能量和废弃物，并按放行净产品质量归一化 | 排程过程主管；仪表校准；容器封口检查；偏差及处置记录 |
| `cp_release_records` | `post_process_packaging` | 合格产品、二级包装、放行电力、废弃物和最终参考输出 | 成品、包装领用、仪表、质量放行和废物记录 | lot_id; accepted_net_product_kg; package_format; secondary_packaging_kg; electricity_kWh; storage_time_h; storage_temperature_if_applicable; reject_mass_kg; release_status | 将放行成品质量与包装使用、储存、废弃和废物记录核对 | kg; kWh; h; °C | 每个放行批次或班次 | 与前景生产数据相同期间 | 每条包装与放行产线 | 仅汇总已放行产品，共享储存按占用质量-时间分配，并将全部清单归一化至 1 kg 净产品 | 放行授权；库存核对；仪表记录；包装规范；不合格批处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景流 | 归一化数量 = 批次可归属流数量 / 已放行净成品质量 | 批次流数量；已放行净产品 kg | 每 1 kg 参考产品数量 | |
| `calc_net_product_mass` | 已装填和放行产品 | 净产品质量 = 已装填单元毛质量 - 初级容器与封口件皮重；不得扣除装填介质 | 已装填毛质量；容器与封口件皮重 | 净成品 kg | `codex-cxs-297-2009` |
| `calc_mass_balance` | 各过程及完整前景系统 | 质量平衡差 = 质量投入总量 - 产品输出 - 废物输出 - 实测蒸发或其他声明损失；调查实质性未解释差额 | 物料投入；产品输出；废物输出；声明损失 | 质量平衡闭合度和未解释差额 | |
| `calc_energy_conversion` | 电力、燃料、蒸汽和外购热 | 使用文件化低位或高位热值、蒸汽焓或供应商因子将各载能体转换至声明报告单位，同时保留原数量和因子 | 计量载能体数量；换算因子；因子基准 | 每参考产品的载能体特定能量 | |
| `calc_water_balance` | 制备和保藏用水 | 废水估算 = 补充水 + 投入物含水 - 产品保留水 - 实测蒸发 - 输出残余物含水；有直接排放计量时不得无解释地用估算替代 | 补充水；配料含水；产品含水；蒸发；残余物含水 | 废水 kg 和水量平衡闭合度 | `eu-2019-2031-fdm-bat` |
| `calc_shared_burden_allocation` | 无法避免的共享操作 | 对全部共享投入、排放和废物一致应用所选分配基准，并为任何经济后备方法保留敏感性结果 | 共享负荷；输出数量；分配基准 | 按产品分配的前景清单 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品与入厂豆 | 声明全部必需限定信息并保留精确参考流 UUID；区分原料、浸泡、烹煮、酸化及其他预处理入厂状态。 | 产品规范；配方；供应商记录；Tiangong 身份引用 |
| `dq_temporal_representativeness` | 前景活动数据 | 使用覆盖正常产品和路线变异的代表性生产期；识别起止日期、停机、试验和异常批次。 | 生产日历；批次清单；排除日志 |
| `dq_measurement_traceability` | 质量、水、能量、温度、时间、pH、aw 和废物记录 | 保留仪器身份、校准或核验状态、原始读数、单位、时间戳、操作员或系统来源，以及任何转换。 | 校准证书；仪表导出；签署的批次或系统记录 |
| `dq_inventory_completeness` | 完整前景系统 | 跨全部纳入过程核对豆类、配料、产品、包装、水、能量、废水和废物记录，并记录每个代理、零值、估算和数据缺口。 | 质量与水量平衡；能量核对；完整性检查表 |
| `dq_preservation_controls` | 保藏产品放行 | 保留路线特定关键因子和偏差。对于适用的密封低酸或酸化低酸产品，保留排程过程、工艺主管、时间、温度、装填、顶隙、相关时的 pH 或 aw、容器完整性、冷却和放行复核。 | 排程过程文件；同期加工记录；偏差处置；`codex-cxc-23-1979`; `us-ecfr-21-cfr-113` |
| `dq_provisional_ranges` | 含推理估算的行 | 每个 `reasoned_estimate` 范围仅作为不符合筛选先验；不得以中点替代实测前景值，并在出版关键用途前用评审证据替换。 | 范围证据评审记录与替换计划 |

## 9. 校验规则

按下列规则校验前景数据包：

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 输出必须使用产品流 `e1ec238e-9181-4fd3-912e-a88b4a45ad56`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，并精确归一化为 1 kg 净成品。 | |
| `val_required_qualifiers` | 数据集元数据 | 必须声明豆类类型、入厂状态、配方或装填介质、保藏路线、净含量基准、相关时的固形物或沥干比例、容器类型、市场状态、地域和生产时期。 | `codex-cxs-297-2009`; `codex-cxc-23-1979` |
| `val_process_completeness` | 过程清单 | 必须表示全部必需过程及全部适用条件过程；省略的条件过程必须有文件化不适用理由。 | |
| `val_packaging_separation` | 参考数量与包装清单 | 初级、二级和三级包装质量不得计入 1 kg 净参考数量，使用时必须保留为明确清单投入。 | |
| `val_mass_water_energy_balance` | 前景计算 | 必须计算质量平衡、水量平衡、载能体特定能量核对和放行产品核对，并调查和披露实质性未解释差额。 | `eu-2019-2031-fdm-bat` |
| `val_preservation_record` | 保藏过程 | 声明路线必须有同期关键因子记录及偏差处置；适用的密封低酸或酸化低酸产品必须证明符合授权排程过程。 | `codex-cxc-23-1979`; `us-ecfr-21-cfr-113` |
| `val_canned_fill_check` | CXS 297-2009 范围内罐藏蔬菜变体 | 对声称符合 CXS 297-2009 的非真空罐藏变体，按标准最低装填要求核验容器装填，并在适用附件要求时记录沥干质量。 | `codex-cxs-297-2009` |
| `val_allocation_disclosure` | 多输出操作 | 分配层级、所选基准、数量、共产品状态、回收处理和任何敏感性分析必须存在且算术一致。 | `iso-14044-2006` |
| `val_estimate_status` | 暂定范围 | 推理估算范围只能用于筛选或初始化；校验必须标记以范围中点作为前景值，以及任何缺少评审证据的出版关键范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制造厂门制作或保藏非冷冻豆类的前景制造数据集 |
| downstream_use | 范围和限定信息匹配时，可作为食品、餐食、餐饮、零售及包装或分销模型的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 与声明分配和回收方法一致的归因型或结果型建模；采用相同净产品基准的 flow、process 和 lifecyclemodel 投影 |
| excluded_use | 未经调整直接比较豆类状态、固形物比例、保藏路线、包装形式、货架期要求或地域不同的产品；替代鲜豆、未经制作的干豆或冷冻豆 |
| required_metadata | PCR id；参考 UUID；豆类类型；入厂状态；配方；保藏路线；净质量与沥干质量基准；容器与包装材料；市场状态；地域；技术；报告期；场址覆盖；分配；上游数据集 |
| required_quality_disclosure | 数据覆盖；仪表与校准状态；质量、水量和能量闭合；排程过程适用性；偏差；代理；暂定范围；未解决流 UUID；不确定性与分配敏感性 |
| update_trigger | 豆类来源或状态、配方、固形物比例、保藏过程、包装形式、能源或水系统、场址或地域、分配、法规或排程过程发生实质变化，或超出所代表生产期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-297-2009` | `standard` | Codex Alimentarius，CXS 297-2009，Standard for Certain Canned Vegetables，https://workspace.fao.org/sites/codex/Standards/CXS%20297-2009/CXS_297e.pdf，检索于 2026-08-11 | 适用罐藏蔬菜的产品定义；清洗与制备；装填介质；热稳定；净质量、沥干质量和容器装填检查 |
| `codex-cxc-23-1979` | `official_guidance` | Codex Alimentarius，CXC 23-1979，Code of Hygienic Practice for Low-Acid and Acidified Low-Acid Canned Foods，https://workspace.fao.org/sites/codex/Standards/CXC%2023-1979/CXC_023e.pdf，检索于 2026-08-11 | 代表性路线过程分解；漂烫、装填、密封、热加工、关键因子、冷却水、容器处理、记录和偏差控制 |
| `us-ecfr-21-cfr-113` | `standard` | United States Electronic Code of Federal Regulations，21 CFR Part 113，Thermally Processed Low-Acid Foods Packaged in Hermetically Sealed Containers，https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-113，检索于 2026-08-11 | 美国市场低酸密封产品的条件要求；排程过程主管、关键因子、加工记录与复核 |
| `eu-2019-2031-fdm-bat` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj，检索于 2026-08-11 | 水、能源、原料、废水和废气清单；过程流程图；水量平衡；关键过程参数监测；资源效率记录 |
| `iso-14044-2006` | `standard` | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines（含现行修正），https://www.iso.org/standard/38498.html，检索于 2026-08-11 | LCI 目标与范围、系统边界连接、递归投入处理、分配层级、文件记录、报告和敏感性 |
