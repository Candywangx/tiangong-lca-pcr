---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻、熏制、干制、盐渍或盐水浸制章鱼

## 1. 范围与适用性

本 PCR 适用于采用一种且仅一种已声明主要路线保藏的可销售章鱼产品：冷冻、熏制、干制、盐渍或盐水浸制。属于某条已声明路线的组合工序，例如熏制前盐渍或烟熏干制中的干燥，仍视为该路线的组成部分，不表示所有路线同时适用。前景数据包应声明物种或商品名称、原料状态、产品形态、保藏路线、包装形式和储存条件。

本 PCR 不包括活、鲜或仅冷藏章鱼；罐藏或以其他方式灭菌的常温稳定产品；预制餐食；章鱼不是参考产品的混合水产品；前景边界也不包括捕捞、养殖、分销、零售、使用和生命末期过程。构建生命周期模型时，仍须为接收章鱼、能源、水、盐、过程助剂和包装连接上游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.octopus-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21267 |
| covered_products | 冷冻、熏制、干制、盐渍或盐水浸制销售的章鱼，包括以章鱼为主要产品的整只、清洁、切分或其他可销售形态。 |
| excluded_products | 活、鲜或冷藏章鱼；罐藏或灭菌章鱼；预制餐食；混合水产品；非章鱼类头足动物。 |
| representative_product | 加工设施出厂口的包装、合格、可销售章鱼产品。 |
| production_route | 下列互斥路线中选择一种：`frozen`、`smoked`、`dried`、`salted` 或 `in_brine`；记录该路线内实际采用的固有子工序。 |
| market_state | 加工设施出厂口的路线特定可销售状态，并声明所需储存条件和保质期。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有已声明产品形态和保藏路线的合格可销售保藏章鱼。 |
| How much | 1 kg 章鱼产品净重，不含包装，并在适用时不含保护性冰衣或游离盐水。 |
| How well | 符合已声明商品规范和适用食品安全控制，并披露产品形态、路线、含水或含盐条件及储存条件。 |
| How long or cycle | 加工设施出厂口的一次供应；声明标签保质期，以及数据集所代表的储存时长和温度。 |
| reference_flow_link | 按下述路线特定计量规则，恰好用 1 kg 参考产品流实现功能单位。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Octopus, frozen, smoked, dried, salted or in brine `5c8cdbc1-2f53-47ac-aa4a-e44125c18761` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 保藏路线；物种或商品名称；产品形态及可食/可销售部分定义；熟制或生制状态；干制或烟熏干制产品含水率；盐渍或盐水浸制产品含盐量或盐水浓度；有冰衣冷冻产品冰衣比例；盐水浸制产品沥干质量基准；包装形式；储存温度；所代表储存时长；保质期 |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。该 Tiangong 流是 CPC 21267 的精确通用产品流；路线和产品形态差异是限定信息，不是替代性的规范产品流身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 合格可销售章鱼产品净重；产品质量不含初级、次级和运输包装。 |
| `frozen_deglazed_mass` | 有冰衣冷冻路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流采用去冰衣产品质量，另行记录施加和去除的冰衣水；披露去冰衣方法和实测冰衣比例。 |
| `brined_drained_mass` | 盐水浸制路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流采用沥干章鱼质量；包装盐水单独记录，并披露沥干程序、时间、温度和盐水浓度。 |
| `preservation_condition` | 熏制、干制、盐渍或盐水浸制路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按销售状态计量产品；干制或烟熏干制产品披露含水率，依赖盐的路线披露含盐量或盐水浓度；未协调这些条件时不得跨路线比较结果。 |
| `saleable_portion` | 所有路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明可销售产品是整只、清洁、切分、熟制还是生制及所含部位；仅将合格可销售章鱼部分归一化为 1 kg。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 章鱼在加工设施接收，并记录供应商、物种或商品名称、来源、鲜/冷藏/冷冻状态、温度、产品形态和验收质量。 |
| starting_condition_role | 作为从门到门前景保藏与包装的外购章鱼输入。 |
| product_classification_scope | 成品参考流属于 CPC 3.0 21267；输入的活、鲜或冷藏章鱼是上游输入，不是成品类别。 |
| recursive_input_rule | 若对 CPC 21267 保藏章鱼进行再加工，将其记录为具有自身上游数据集的外购中间品，不在当前前景数据包中递归重建其保藏负荷。 |
| upstream_dataset_requirement | 接收章鱼、外购保藏章鱼中间品、能源载体、水、食用盐及过程助剂、使用时的发烟材料和包装材料均须连接上游数据集。 |
| disclosure | 披露设施地域、报告期、路线、物种或商品名称、输入状态、产品形态、产率、储存条件、包装、排除过程以及任何重复使用的保藏中间品。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 前景加工 | 纳入接收与制备、恰好一条已声明保藏路线、包装以及路线所需储存，直至加工设施出厂口。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_route_exclusivity` | 保藏路线 | 将 `frozen`、`smoked`、`dried`、`salted` 或 `in_brine` 建模为互斥的主要路线；仅纳入已声明路线实际使用的固有子工序。 | `codex-cxc-52-2003` |
| `sb_upstream_and_packaging` | 外购输入 | 捕捞或养殖位于前景过程之外，但所有外购输入须连接上游数据集；生命周期模型纳入包装生产，并按材料记录包装。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `octopus_receiving_preparation` | 章鱼接收与制备 | `required` | 始终纳入；仅记录实际执行的解冻、清洗、清理、切分或熟制等操作。 | 确定验收原料质量和制备中间品。 | kg 制备章鱼输出 |
| `route_preservation` | 路线特定保藏 | `required` | 恰好选择一条主要路线：冷冻、熏制、干制、盐渍或盐水浸制。 | 将制备章鱼转化为已声明保藏状态。 | kg 保藏章鱼输出 |
| `packaging_storage` | 包装和路线所需储存 | `required` | 始终纳入；储存技术和时长遵循已声明路线与销售条件。 | 形成设施出厂口合格可销售产品。 | 1 kg 参考产品 |

### 过程：章鱼接收与制备（`octopus_receiving_preparation`）

#### 输入

##### 产品流

###### 接收章鱼（`received_octopus`）

记录跨越设施边界的章鱼验收质量及其输入状态。

- 选定流：Received octopus
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按生产批次计量验收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 来源：`codex-cxc-52-2003`
- 数量范围：跨路线原料投入暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：8
  - 单位：kg/kg 合格可销售产品
  - 基准：跨越清洁产品至强烈干制产品的宽泛临时估算；仅在尚无路线特定年度质量平衡证据时适用，并在取得经审查的批次产率数据后替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用水（`preparation_water`）

仅在发生解冻、清洗、清理或脱盐操作时，记录计量或核算得到的用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：供水量减去单独计量的循环水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`
- 数量范围：制备用水暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 制备章鱼输出
  - 基准：仅适用于实际清洗、解冻或清理配置的临时宽泛估算；当路线与设施特定计量记录覆盖报告期后替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 去除物和不合格品（`preparation_rejects`）

记录离开过程的内脏、表皮、受损物料和其他被去除章鱼部分；内部返工单独跟踪，不作为废物。

- 选定流：Octopus preparation residues
- 流属性/单位：Mass / kg
- 数量规则：作为废物或副产品离开过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 接收章鱼
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 数量范围：去除物暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.9
  - 单位：kg/kg 接收章鱼
  - 基准：针对已声明产品形态的临时物理筛选区间；取得经审查的批次处置记录后替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

##### 产品流

###### 制备章鱼中间品（`prepared_octopus`）

根据实测输出或闭合批次质量平衡计算制备中间品质量。

- 选定流：Prepared octopus intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测制备输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mass_balance`

##### 废物流

##### 基本流

### 过程：路线特定保藏（`route_preservation`）

#### 输入

##### 产品流

###### 制备章鱼输入（`prepared_octopus_input`）

记录进入所选保藏路线的制备章鱼。

- 选定流：Prepared octopus intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入已声明路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`
- 数量范围：跨路线制备投入暂定筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：6
  - 单位：kg/kg 保藏章鱼输出
  - 基准：反映路线相关水分和操作损失的宽泛临时区间；取得经审查的路线特定生产产率后替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 食品级盐（`food_grade_salt`）

记录盐渍、盐水浸制或含盐熏制/干制配方领用的氯化钠；经审查配方不添加盐时本行不适用。

- 选定流：Salt, food-grade, for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测领盐量减去实测未开封退库量；不得扣除随废盐水排出的盐
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 配盐水补充水（`brine_makeup_water`）

记录新投入配制包装盐水或工艺盐水的用水；仅适用于使用盐水的路线，回用盐水不得计为新水。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入盐水配制的计量新水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 发烟木片（`smoking_wood_chips`）

记录进入现场发烟器的木片质量；仅适用于熏制或烟熏干制路线，并声明树种、含水基准及禁止处理/污染控制。

- 选定流：Untreated food-smoking wood chips, declared species and moisture
- 流属性/单位：Mass / kg
- 数量规则：按声明含水基准计量的干基或收到时木片领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 保藏用电（`preservation_electricity`）

记录冷冻机、风机、泵、控制系统、干燥机、发烟器等保藏设备的交流电；应采用电压和地域匹配的供电流，以下 UUID 为已核验低压消费组合。

- 选定流：Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表计量，或按设备功率和运行时间作工程分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 外购工艺蒸汽（`preservation_steam`）

仅在蒸汽跨越本过程边界时记录外购或单独发生的蒸汽；按实际压力和温度解析，以下 UUID 仅适用于 11.0 MPaG，不得代替其他等级。

- 选定流：Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：蒸汽表读数或经凝结水校正的工程平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 外购热水（`preservation_hot_water`）

记录作为热产品跨越保藏边界的热水；仅适用于以热水购入或转移热量的情况，声明进水/回水温度并在发布前解析温度匹配 UUID。

- 选定流：Hot water, supplied at declared inlet and return temperatures
- 流属性/单位：Mass / kg
- 数量规则：计量供应质量，不重复计算封闭循环回水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 现场供热天然气（`preservation_natural_gas`）

记录现场为熏制、干制、盐水加热等燃烧的管道天然气；全部以蒸汽或热水供热时不使用本行。

- 选定流：Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：燃气表质量，或按实测密度和声明低位热值由体积换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 现场供热柴油（`preservation_diesel`）

仅在柴油确为干燥机、锅炉、发烟器或备用燃料时记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：适用设备的实测油罐领用量并与库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### 现场供热液化石油气（`preservation_lpg`）

仅在 LPG 为实际热能燃料时记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测钢瓶或储罐领用量并与库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`
- 来源：`codex-cxc-52-2003`

###### R717 制冷剂补充量（`preservation_r717_makeup`）

记录保藏制冷设备充注或泄漏后补充的无水氨；仅适用于已核实使用 R717 的设备。

- 选定流：Ammonia, anhydrous, liquid (R717) `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`

###### R404A 制冷剂补充量（`preservation_r404a_makeup`）

记录保藏制冷设备充注或泄漏后补充的 R404A；仅适用于已核实使用 R404A 的设备，其他制冷剂须另建原子行。

- 选定流：Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`

#### 输出

##### 废物流

###### 非盐性工艺废水（`preservation_wastewater`）

记录送往处理的解冻、清洗、冷凝等非盐性废水；高盐盐水排放必须使用下一行。

- 选定流：Untreated municipal wastewater influent `41eb8873-6852-40fe-8b5d-b792fe4d4754`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在处理入口计量或质量平衡得到的排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`

###### 废高盐盐水（`spent_brine`）

记录离开回用闭环并送往处理或处置的废工艺/包装盐水；仅适用于盐渍或盐水浸制路线，不得与普通废水合并。

- 选定流：High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开封闭回用系统的实测废盐水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`

###### 保藏不合格章鱼（`preservation_rejects`）

记录保藏过程中剔除并送往声明废物去向的不合格章鱼；可销售共产品或返工仍作为产品流。

- 选定流：Rejected preserved octopus
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和去向计量的不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`

###### 发烟木灰（`smoking_wood_ash`）

记录现场木片发烟器清出的灰，仅在实际使用该设备时适用；如实测捕集烟尘，须另建一行。

- 选定流：Wood ash from food-smoking smoke generation
- 流属性/单位：Mass / kg
- 数量规则：从发烟器清出的实测灰质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs`

##### 基本流

###### 化石二氧化碳排放到空气（`onsite_fossil_co2`）

按各现场化石燃料分别计算直接化石二氧化碳，不在此计入燃料上游生产排放。

- 选定流：Carbon dioxide (fossil), to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：燃料特定消耗质量乘以有文件记录的含碳量和氧化因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_inputs`

###### 氮氧化物排放到空气（`onsite_nox`）

按设备和燃料特定监测或因子记录/计算现场燃烧氮氧化物。

- 选定流：Nitrogen oxides, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或燃料特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_inputs`

###### 二氧化硫排放到空气（`onsite_so2`）

记录/计算含硫现场燃料的二氧化硫；仅有燃料规格或监测证据时可记零。

- 选定流：Sulfur dioxide, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或含保留量说明的燃料硫平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_inputs`

###### 细颗粒物排放到空气（`onsite_pm25`）

记录/计算现场燃烧或发烟产生的原生 2.5 微米及以下颗粒物。

- 选定流：Particles (PM0.2 - PM2.5), to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放或控制后设备特定排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_inputs`

###### R717 制冷剂排放到空气（`preservation_r717_emission`）

记录 R717 保藏制冷设备释放的氨，仅适用于 R717 系统。

- 选定流：Ammonia (R717), to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：设备制冷剂平衡或分配到保藏操作的实测泄漏量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_inputs`

###### R404A 制冷剂排放到空气（`preservation_r404a_emission`）

记录 R404A 保藏制冷设备的释放量，仅适用于 R404A 系统。

- 选定流：Refrigerant R404A, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：设备制冷剂平衡或分配到保藏操作的实测泄漏量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏章鱼输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_inputs`

##### 产品流

###### 保藏章鱼中间品（`preserved_octopus`）

记录最终包装和储存前的实测保藏输出。

- 选定流：Preserved octopus intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次计量保藏输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_balance`

##### 废物流

##### 基本流

### 过程：包装和路线所需储存（`packaging_storage`）

#### 输入

##### 产品流

###### 塑料薄膜包装（`plastic_film_packaging`）

记录袋、内衬、裹膜或封口用塑料薄膜；声明聚合物、再生含量、厚度及包装层级，其他聚合物或刚性包装须另建原子行。

- 选定流：Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：薄膜领用质量与包装单元及库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`eu-pef-2021-2279`

###### 瓦楞纸板包装（`corrugated_cardboard_packaging`）

记录销售或运输包装中的瓦楞箱、托盘或隔板；仅在存在瓦楞纸板时适用，并声明再生含量和箱体规格。

- 选定流：Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：纸板领用质量与包装单元及库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`
- 来源：`eu-pef-2021-2279`

###### 储存用电（`storage_electricity`）

记录到声明设施出厂时点前储存间或冷库的用电；采用实际电压和地域，以下 UUID 为已核验低压消费组合。

- 选定流：Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：按温区占用质量-时间分配的计量储存用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：所代表储存时长下每 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage`

###### 储存 R717 制冷剂补充量（`storage_r717_makeup`）

记录储存制冷系统补充的无水氨，仅适用于已核实使用 R717 的系统。

- 选定流：Ammonia, anhydrous, liquid (R717) `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按运行期从设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：所代表储存时长下每 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`

###### 储存 R404A 制冷剂补充量（`storage_r404a_makeup`）

记录储存制冷系统补充的 R404A，仅适用于已核实使用 R404A 的系统；其他制冷剂须另建产品行和排放行。

- 选定流：Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按运行期从设备制冷剂台账分配的采购或领用补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：所代表储存时长下每 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`

#### 输出

##### 废物流

###### 塑料薄膜包装废料（`plastic_film_scrap`）

记录离开包装过程的薄膜边角、废包和破损薄膜，并保留声明处理去向。

- 选定流：Plastic film packaging scrap
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和去向计量的包装废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`

###### 瓦楞纸板包装废料（`corrugated_cardboard_scrap`）

记录离开包装过程的纸板边角、废箱和破损运输包装。

- 选定流：Corrugated cardboard packaging scrap
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和去向计量的包装废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage`

##### 基本流

###### 储存 R717 制冷剂排放到空气（`storage_r717_emission`）

记录储存制冷设备释放的氨，仅适用于 R717 系统。

- 选定流：Ammonia (R717), to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：设备制冷剂平衡或按储存运行期分配的实测泄漏量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：所代表储存时长下每 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage`

###### 储存 R404A 制冷剂排放到空气（`storage_r404a_emission`）

记录储存制冷设备释放的 R404A，仅适用于 R404A 系统。

- 选定流：Refrigerant R404A, to air, unspecified
- 流属性/单位：Mass / kg
- 数量规则：设备制冷剂平衡或按储存运行期分配的实测泄漏量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：所代表储存时长下每 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage`

##### 产品流

###### 合格可销售章鱼产品（`reference_product`）

按适用的净重、去冰衣或沥干质量基准，输出恰好一个路线合格参考产品。

- 选定流：Octopus, frozen, smoked, dried, salted or in brine `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归一化后恰好为 1 kg 参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unstats-cpc-v3-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | 多输出前景过程 | 首先通过过程细分以及对路线特定输入、公用工程、残余物和产品的直接计量避免分配。 | `eu-pef-2021-2279` |
| `alloc_physical` | 无法避免的联合操作 | 若无法细分，采用有文件记录的物理因果关系；只有质量分配能合理反映联合操作因果关系时才可采用。 | `eu-pef-2021-2279` |
| `alloc_economic_last_resort` | 缺少可辩护物理关系的共产品 | 仅将经济分配作为最后手段，说明市场、价格期间和敏感性，并将废物保留在产生该废物的过程中。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | `octopus_receiving_preparation`; `route_preservation`; `packaging_storage` | 接收、制备、保藏、可销售、不合格、返工、冰衣和沥干质量 | 秤重记录、批次单、产率和处置记录 | lot_id; species_or_commercial_designation; route; incoming_state; gross_mass; tare_mass; accepted_mass; intermediate_mass; final_net_mass; glaze_mass; drained_mass; reject_mass; rework_mass | 按批次使用经校准秤具称量；适用时保留毛重、皮重、去冰衣和沥干观测值。 | kg | 每生产批次 | 至少连续 12 个有代表性月份，或经说明的完整季节性生产期。 | 数据集所代表的全部设施。 | 汇总验收质量并将各流归一化到合格可销售质量；不得跨边界抵消返工。 | 秤具校准、批次追溯、核算签字和产品规范。 |
| `cp_route_inputs` | `octopus_receiving_preparation`; `route_preservation` | 水、盐、木片、电力、蒸汽、热水、天然气、柴油、LPG、R717、R404A、废水、废盐水、不合格品、木灰、燃烧排放和制冷剂排放等每条原子流 | 仪表、发票、领用记录、配方、燃料和制冷剂台账、设备日志、烟气记录和排放记录 | lot_id; route; atomic_flow_id; flow_uuid; quantity; unit; meter_start; meter_end; stock_start; stock_end; returned_quantity; operating_time; discharge_quantity; destination; emission_factor; factor_source | 优先直接计量；否则按各具名材料或载体分别通过采购、库存、配方和设备日志作有文件记录的核算。 | kg; m3; kWh; carrier-specific SI unit | 每批次或按月并可追溯分配至批次 | 与产品质量记录相同期间。 | 每条纳入生产线和共用公用工程系统。 | 不得把载体、材料、废物或污染物聚合为一个交换；仅扣除实测闭环回收；每条原子流归一化到保藏输出。 | 仪表校准、发票或库存核算、配方批准、制冷剂台账、流 UUID 读回和分配理由。 |
| `cp_packaging_storage` | `packaging_storage` | 塑料薄膜、瓦楞纸板、每种其他包装材料、储存电力、每种制冷剂补充量、每种包装废料和每种制冷剂排放 | 包装材料清单、包装单元计数、仓库仪表、制冷剂台账、温度和库存日志 | packaging_material; flow_uuid; packaging_mass; packed_units; stored_mass; storage_start; storage_end; temperature; electricity; refrigerant_identity; refrigerant_makeup; refrigerant_recovery; refrigerant_release | 分别将各包装材料与包装单元核算；按质量-时间分配电力；对每种制冷剂分别闭合质量平衡。 | kg; kWh; degree Celsius; day | 每包装批次并按月核算储存 | 与产品质量记录相同期间。 | 所代表的全部包装线和储存间。 | 每种包装材料分别归一化到产品质量，电力归一化到占用质量-时间，每种制冷剂补充和释放分别记录；保留路线和温度分层。 | BOM 版本、库存核算、仪表校准、制冷剂台账、流 UUID 读回和温度日志完整性。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 期间或批次数量 / 合格可销售参考质量，再表示为每 1 kg。 | 采集的流数量；合格可销售质量 | 每 kg 参考产品数量 | `eu-pef-2021-2279` |
| `calc_route_reference_mass` | 有冰衣冷冻或盐水浸制产品 | 冷冻参考质量 = 实测去冰衣产品质量；盐水浸制参考质量 = 实测沥干章鱼质量；其他路线采用不含包装的可销售章鱼净重。 | 毛重、皮重、冰衣、去冰衣、沥干和净重 | 路线一致的参考质量 | `codex-cxc-52-2003` |
| `calc_storage_energy` | 共用储存 | 分配能源 = 计量储存能源 × 所代表产品质量-时间 / 同温区同期间总占用质量-时间。 | 仪表能源；产品质量；储存时长；总占用质量-时间 | 已声明时长下每 kg 参考产品的 kWh | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | 产品和路线 | 保留批次级物种或商品名称、输入状态、产品形态、恰好一条主要路线及所需路线限定信息。 | 产品规范、标签、批次单和路线日志。 |
| `dq_measurement` | 质量、公用工程和储存 | 可用时采用经校准计量，保留原始读数和换算因子，并核算产品、废物、返工、水、盐水、包装和能源记录。 | 校准记录、仪表日志、质量平衡审查以及发票或库存核算。 |
| `dq_representativeness` | 报告期和设施 | 覆盖所代表的全部设施以及至少 12 个有代表性月份，或经说明的完整季节性生产期；披露时间、技术和地域局限。 | 遵循 `eu-pef-2021-2279` 的覆盖表和数据质量评估。 |
| `dq_reasoned_estimates` | 暂定范围 | 不得用 `reasoned_estimate` 范围替代可获得的前景记录；当取得经审查的路线特定批次、计量、配方、包装、储存或排放证据时予以替换。 | 识别每个已替换或保留暂定范围的审查记录。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 要求产品流 UUID `5c8cdbc1-2f53-47ac-aa4a-e44125c18761`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 | `unstats-cpc-v3-2025` |
| `val_route_one_of` | 产品路线 | 要求恰好为 `frozen`、`smoked`、`dried`、`salted` 或 `in_brine` 之一；拒绝套用全部路线或遗漏实际固有子工序的数据包。 | `codex-cxc-52-2003` |
| `val_mass_condition` | 参考质量 | 要求排除包装并采用适用的净重、去冰衣或沥干质量基准；适用时要求含水率、盐或盐水、冰衣、可食/可销售部分、储存和保质期限定信息。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_process_completeness` | 前景清单 | 要求三个过程全部存在，并为每个适用交换单列原子行：电力；蒸汽或热水；每种燃料；每种制冷剂补充和排放；水；盐；发烟材料；每项废物流；每种污染物；以及每种包装材料和废料。拒绝集合标签、合并载体清单和选择指令；仅当记录证明未使用或未产生时才接受零值。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `val_mass_balance` | 每生产批次或核算期间 | 核算接收、中间、最终、废物、返工、冰衣、盐水及水分变化相关质量；披露未解释的不平衡，不得强制失水路线等同湿产品产率。 | `codex-cxc-52-2003` |
| `val_estimate_replacement` | 推理估算 | 标记每个保留的暂定范围，并在取得经审查的前景或有来源支持的路线特定证据时要求替换；暂定范围不是发布关键的允许范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从门到门前景保藏章鱼生产数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset`; process 和 lifecyclemodel 投影。 |
| allowed_use | 产品形态、净重条件、储存、地域、技术和报告期相容且已连接上游数据集的路线匹配建模。 |
| excluded_use | 未协调含水率、盐或盐水、冰衣、沥干质量、可食/可销售部分、包装、储存和保质期条件时，直接比较或替代不同保藏路线；对活/鲜/冷藏或罐藏产品建模。 |
| required_metadata | PCR id 和版本；产品流 UUID；CPC 引用；物种或商品名称；产品形态；熟制/生制状态；主要路线；固有子工序；净重/去冰衣/沥干质量基准；含水率、盐或盐水和冰衣限定信息；设施地域；技术；报告期；包装；储存温度和时长；保质期；分配；上游数据集引用。 |
| required_quality_disclosure | 数据覆盖、计量和校准、质量平衡闭合、路线分离、分配、缺失数据、保留的 `reasoned_estimate` 范围、来源版本以及时间、技术和地域代表性。 |
| update_trigger | 路线、物种组合、产品形态、熟制状态、保藏技术、配方或盐水、含水率或含盐规范、冰衣、包装、储存制度、分配、设施覆盖、参考 UUID、适用官方指南或会实质改变结果的替代证据发生变化。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unstats-cpc-v3-2025` | `dataset` | 联合国统计司，《产品总分类》第 3.0 版，2025 年 6 月 30 日结构文件，代码 21267，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-08-11）。 | 官方精确类别标题和产品范围锚点。 |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius，CXC 52-2003，《鱼和渔业产品操作规范》，第 2 版，FAO，https://www.fao.org/4/i2382e/i2382e.pdf（检索日期：2026-08-11）。 | 头足类处理；鲜/冷冻基础；冷冻、冰衣、盐渍、盐水浸制、熏制、烟熏干制、包装、储存、卫生和批次控制的定义及过程结构。 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，关于使用环境足迹方法的委员会建议（EU）2021/2279，包括附件 1 和附件 2，https://environment.ec.europa.eu/publications/recommendation-use-environmental-footprint-methods_en（检索日期：2026-08-11）。 | 功能单位和参考流、系统边界、包装纳入、多功能性层级、前景采集、完整性和数据质量代表性。 |
