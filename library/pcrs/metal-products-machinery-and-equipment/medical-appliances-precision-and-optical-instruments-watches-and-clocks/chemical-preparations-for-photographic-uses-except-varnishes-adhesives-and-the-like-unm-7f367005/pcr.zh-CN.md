---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.chemical-preparations-for-photographic-uses-except-varnishes-adhesives-and-the-like-unm-7f367005
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 摄影用化学制剂（清漆、胶水、粘合剂及类似制剂除外）；摄影用未混合产品（定量包装，或以可直接使用的形式作零售包装）

## 1. 范围与适用性

本 PCR 适用于制造可销售摄影用化学制剂，以及定量包装或以可直接使用形式作零售包装的合格摄影用未混合化学品的从摇篮到工厂大门前景数据包。产品包括液体浓缩液、即用型溶液、定量包装干制品、显影剂、停显液、定影剂、漂白剂、漂白定影剂、调色剂、稳定剂、润湿剂和感光乳剂。摄影实验室中的产品使用、胶片或相纸处理、使用后的银回收，以及销售后的报废处理均不属于前景边界。

本记录不包括摄影感光版、胶片、相纸和设备；未按计量份额包装、也并非摄影用途即用零售品的散装未混合化学品；归入本产品边界以外的印版显影剂；以及清漆、胶水、粘合剂和类似制剂。权威 CPC 标题确定分类边界，产品族和组成规则由 `un-cpc-3-0-structure-2025`、`us-epa-photographic-processing-1981` 和 `ilford-rapid-fixer-sds-2024` 支持。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.chemical-preparations-for-photographic-uses-except-varnishes-adhesives-and-the-like-unm-7f367005 |
| classification_refs | CPC 3.0：48342（精确分类语境） |
| covered_products | 摄影用显影剂、停显液、定影剂、漂白剂、漂白定影剂、调色剂、稳定剂、润湿剂和感光乳剂制剂；定量包装或以即用零售形式包装的合格摄影用未混合化学品 |
| excluded_products | 清漆、胶水、粘合剂和类似制剂；摄影胶片、感光版和相纸；摄影设备；CPC 48342 以外的印版显影剂；未按计量份额包装或并非摄影用途即用零售品的散装未混合化学品 |
| representative_product | 摄影显影液 |
| production_route | 采购原料接收和计量投料；水相溶解、液体混合，或适用时的干混/研磨；可选的现场感光乳剂制备；按需过滤或后处理；灌装、包装和放行 |
| market_state | 声明为液体浓缩液、即用型液体、定量包装干制品、零售即用型未混合产品或感光乳剂；产品净质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂大门提供符合所声明配方和放行规格的可销售摄影用化学制剂 |
| How much | 1 kg 摄影用化学制剂净重，不含一级和二级包装 |
| How well | 声明产品族、配方版本、物理状态、浓度或稀释状态、相关活性成分、放行规格及包装配置，且符合批次质量记录 |
| How long or cycle | 一个在工厂大门交付的已放行生产批次；不包含使用期限服务 |
| reference_flow_link | `pk_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 可销售制剂净重 |
| 参考产品流 | 摄影显影液 `1ad173c7-fe76-44fa-9f02-9942dbe1bcbc` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族；配方或工艺单版本；液态或干态；浓缩、即用、定量包装或零售即用状态；活性成分标识及原料供应浓度；放行规格；一级和二级包装；生产地域；批次及报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。已确认的参考 UUID 代表摄影显影液；其他涵盖产品族的数据集必须明确声明产品族，且不得把已确认的显影液流改名为其他制剂。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已放行制剂净质量归一化；分母不包括包装质量及未放行不合格物料。 |
| `ingredient_as_supplied_mass` | 配方原料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按采购供应状态记录每种原料；披露解释活性成分质量所需的纯度、溶液浓度和水分。 |
| `water_mass_basis` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用计量质量，或以批次特定密度和温度从体积换算，并披露换算方法。 |
| `electricity_energy_basis` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电能，以 1 kWh = 3.6 MJ 换算，不得把电力作为物料质量处理。 |
| `wastewater_volume_basis` | 设备清洗废水 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录转移废水体积，并披露是否包括回用水、滞留产品和夹带冲洗水。 |

## 5. 系统边界

前景边界始于采购原料、工艺用水和包装材料进入制造场址。边界包括场内接收和投料、溶解或混合、适用的干料研磨、适用的感光乳剂制备、过滤和后处理、灌装和包装、质量控制、设备清洗、转移前的场内废物处置，以及直接计量排放。采购投入的上游生产和交付应连接地域、技术、品级、浓度和交付边界均具代表性的数据集。下游摄影处理和产品报废不在边界内。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购原料和包装按供应商声明的品级和浓度进入制造场址；任何内部生产原料均单独标识 |
| starting_condition_role | 采购投入从摇篮到工厂大门的进入点，也是前景配制系统的起点 |
| product_classification_scope | 声明类别边界内的摄影用化学制剂，以及定量包装或零售即用型摄影用未混合产品 |
| recursive_input_rule | 采购同类别摄影用制剂作为投入时，以一个具体制剂及其上游数据集记录一次；除非有经核实的供应商组成和不重叠的上游数据，否则不得递归拆分 |
| upstream_dataset_requirement | 为每种采购原料、水、电力和包装连接与地域、技术、品级、浓度和交付边界匹配的数据集 |
| disclosure | 披露原料为采购或现场生产、产品族、配方版本、批量、物理状态、浓度、包装配置、控制技术、回用水或返工回路，以及全部排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_formulation_operations` | 前景制造 | 纳入实际采用的混合、掺混、研磨或其他化学制剂作业，以及灌装、清洗、废物转移和直接计量排放；只有批次证据证明未发生时才可省略相应路线。 | us-epa-chemical-preparations-neshap-2009 |
| `boundary_product_family` | 类别范围 | 客户端摄影处理不纳入前景系统，但应以声明的摄影产品族和销售状态确定适用的制造原料与单元作业。 | un-cpc-3-0-structure-2025; us-epa-photographic-processing-1981; ilford-rapid-fixer-sds-2024 |
| `boundary_same_category_input` | 同类别递归投入 | 采购同类别制剂是一个具有上游数据集的原子产品投入，不得同时通过供应商制剂及其未经核实的组分配方重复计算。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `formulation` | 原料投料与摄影化学品配制 | required |  | 前景接收、投料、溶解、混合、过滤及适用的干料研磨 | 转入灌装的批次净质量 |
| `sensitizing_emulsion_preparation` | 感光乳剂制备 | conditional | 仅在现场制造感光乳剂而非采购成品制剂时纳入 | 前景沉淀、熟化、洗涤和增感作业 | 转入灌装的已放行感光乳剂质量 |
| `finishing_packaging` | 灌装、包装和产品放行 | required |  | 前景灌装、封口、二级包装和质量放行 | 1 kg 已放行参考产品净重 |
| `equipment_cleaning` | 设备清洗与废水转移 | required |  | 前景生产周期清洗、滞留产品核算和废水转移 | 分配至已放行产品的清洗记录 |

### 过程：原料投料与摄影化学品配制（`formulation`）

#### 输入

##### 产品流

###### 配方工艺用水（`fm_process_water`）

记录加入液体或湿法制剂的水；不包括 `cl_process_water` 下记录的设备清洗水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：批次计量或按工艺单领用并加入配方的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：

###### 配制用电（`fm_electricity`）

记录可归属于配制批次的投料、搅拌、泵送、温控、过滤和适用研磨用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量并分配至配制批次的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：

###### 对苯二酚显影剂（`fm_hydroquinone`）

仅在经核实配方含对苯二酚时纳入；在获得精确公开状态码 100 标识前，流 UUID 保持未解决。

- 选定流：对苯二酚
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的对苯二酚质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`

###### 碳酸钠活化剂（`fm_sodium_carbonate`）

仅在声明配方以碳酸钠为原料时纳入。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的碳酸钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`

###### 氢氧化钠活化剂（`fm_sodium_hydroxide`）

仅在声明配方以氢氧化钠为原料时纳入，并披露浓度和产品状态。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的氢氧化钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`

###### 亚硫酸钠防腐剂（`fm_sodium_sulfite`）

仅在声明配方以亚硫酸钠为原料时纳入；本行不得以焦亚硫酸钠或连二亚硫酸钠替代。

- 选定流：亚硫酸钠 `b52e5a0a-75f6-4f96-8972-73811e95fede`
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的亚硫酸钠质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`

###### 硫代硫酸铵定影剂（`fm_ammonium_thiosulfate`）

仅用于含硫代硫酸铵的定影剂或漂白定影剂配方；UUID 保持未解决，不得以硫代硫酸钠替代。

- 选定流：硫代硫酸铵
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的硫代硫酸铵质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`; `ilford-rapid-fixer-sds-2024`

###### 乙酸酸化剂（`fm_acetic_acid`）

仅在停显液、定影剂或其他声明配方含乙酸时纳入，并披露供应状态浓度。

- 选定流：乙酸（醋酸） `c7564d76-47c4-440c-9eb8-3242c38eeb1b`
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的乙酸质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`

###### 乙二胺四乙酸铁铵漂白剂（`fm_ferric_ammonium_edta`）

仅用于经核实含乙二胺四乙酸铁铵的漂白或漂白定影配方；不得以其他铁盐替代。

- 选定流：乙二胺四乙酸铁铵
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的乙二胺四乙酸铁铵质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`

###### 溴化钾抑制剂（`fm_potassium_bromide`）

仅在声明显影剂或相关配方中含溴化钾时纳入。

- 选定流：溴化钾
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入批次的溴化钾质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：`us-epa-photographic-processing-1981`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不合格摄影用化学制剂（`fm_offspec_preparation`）

记录未返工且转移至内部或外部废物管理的拒收产品；同批次放行前返料不计入本行。

- 选定流：不合格摄影用化学制剂
- 流属性/单位：Mass / kg
- 数量规则：称量离开前景生产系统且未返工的不合格制剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_records`
- 来源：

##### 基本流

###### 干料操作排放至空气的细颗粒物（`fm_pm25_air`）

仅在干料投料、混合或研磨经场内控制后产生已计量 PM0.2-PM2.5 排放时纳入；本行不得用于较大颗粒物或其他空气区室。

- 选定流：颗粒物 (PM0.2 - PM2.5) `4d9a8790-3ddd-11dd-936e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排放至未指定空气区室的实测或按控制装置计算的 PM0.2-PM2.5
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-chemical-preparations-neshap-2009`

### 过程：感光乳剂制备（`sensitizing_emulsion_preparation`）

#### 输入

##### 产品流

###### 感光乳剂工艺用水（`se_process_water`）

记录加入现场感光乳剂批次或用于该过程的水；清洗水仍记录在 `cl_process_water` 下。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：可归属于现场感光乳剂制备的批次计量工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行感光乳剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_records`
- 来源：

###### 感光乳剂制备用电（`se_electricity`）

现场发生沉淀、搅拌、温控、洗涤、熟化和增感作业时，记录相应用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量并分配至现场感光乳剂批次的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行感光乳剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_records`
- 来源：

###### 硝酸银前体（`se_silver_nitrate`）

仅在现场制备卤化银感光乳剂时纳入，并记录供应状态前体质量。

- 选定流：硝酸银
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入乳剂批次的硝酸银质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行感光乳剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_records`
- 来源：`us-epa-photographic-processing-1981`

###### 摄影级明胶（`se_gelatin`）

仅在现场制备明胶基感光乳剂时纳入；如已知，披露品级及动物或其他来源。

- 选定流：摄影级明胶
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入乳剂批次的摄影级明胶质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行感光乳剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_records`
- 来源：`us-epa-photographic-processing-1981`

###### 溴化钾卤化物前体（`se_potassium_bromide`）

仅在以溴化钾形成所声明现场卤化银乳剂时纳入。

- 选定流：溴化钾
- 流属性/单位：Mass / kg
- 数量规则：按供应状态投入乳剂批次的溴化钾质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行感光乳剂
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emulsion_records`
- 来源：`us-epa-photographic-processing-1981`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 摄影用感光乳剂（`se_sensitizing_emulsion`）

记录转入灌装或作为涵盖产品销售的已放行感光乳剂；UUID 保持未解决，不得以已确认的显影液 UUID 替代。

- 选定流：摄影用感光乳剂
- 流属性/单位：Mass / kg
- 数量规则：根据批次记录确定的已放行感光乳剂质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行感光乳剂
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emulsion_records`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

### 过程：灌装、包装和产品放行（`finishing_packaging`）

#### 输入

##### 产品流

###### 高密度聚乙烯一级包装瓶（`pk_hdpe_bottle`）

仅在声明液体产品灌装入 HDPE 瓶时纳入；只有瓶和不可分离瓶盖作为一个采购项目供应时才将二者合并记录。

- 选定流：高密度聚乙烯瓶
- 流属性/单位：Mass / kg
- 数量规则：已放行产品消耗的采购成品 HDPE 瓶质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 瓦楞二级包装箱（`pk_corrugated_box`）

仅在声明销售单元或运输配置使用瓦楞纸箱时纳入。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：已放行产品消耗的采购瓦楞纸箱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 灌装和包装用电（`pk_electricity`）

记录可归属于产品的输送泵、灌装、封口、贴标、装箱和放行线作业用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量并分配至已放行产品灌装和包装的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行摄影显影液（`pk_reference_product`）

本行为代表性参考输出。其他涵盖产品族应使用单独确认的产品标识，不得把该显影液 UUID 用于其他名称。

- 选定流：摄影显影液 `1ad173c7-fe76-44fa-9f02-9942dbe1bcbc`
- 流属性/单位：Mass / kg
- 数量规则：根据合格灌装件数和经核实的净灌装质量计算已放行产品净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

### 过程：设备清洗与废水转移（`equipment_cleaning`）

#### 输入

##### 产品流

###### 设备清洗工艺用水（`cl_process_water`）

记录用于冲洗配制、输送和灌装设备的新鲜工艺用水；不跨越系统边界的经核实回用冲洗水应单独披露。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量并分配至已放行产品的新鲜清洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 摄影化学品设备清洗废水（`cl_photochemical_wastewater`）

记录制造设备清洗后转移至场内或外部处理的液体废物；表征产品族、pH、相关危险成分和去向。

- 选定流：含摄影化学品的设备清洗废水
- 流属性/单位：Volume / m3
- 数量规则：转移废水体积减去经核实的闭路回用量及返回同批次的滞留产品量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行参考产品净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 配制、灌装和清洗 | 优先按批次、生产线或生产周期细分并直接计量，使负荷无需分配即可归属。 |  |
| `allocation_rework` | 返回过程的不合格物料 | 将返工物料及其额外处理保留在前景系统内；不得作为共产品抵扣，也不得同时计为废物。 |  |
| `allocation_shared_operations` | 共用电力、清洗和质量控制服务 | 细分后，按设备时间、计量吞吐量或净处理质量等有文件记录的物理驱动因素分配剩余共用负荷；披露驱动因素并测试重要替代方案。 |  |
| `allocation_recovered_material` | 送往外部回收的物料 | 在场址边界报告输出废物或可回收物料；除非研究目标采用另行披露的后果法，否则不得计入避免负荷抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formulation_records` | `formulation` | 原料、公用工程及不合格物料 | 批次工艺单、称量单、领用记录、仪表及处置记录 | batch_id; formulation_version; ingredient_id; supplier_lot; as_supplied_mass; purity_or_concentration; water_mass; electricity; rework_mass; offspec_mass; disposition | 核对签批工艺单领用、经校准秤、批次仪表及放行或废物记录 | kg; MJ | 每批 | 报告期内全部批次 | 全部范围内配制线 | 按原子流汇总并除以已放行产品净质量；保持产品族分列 | 校准记录；配方批准；供应商证书；批次核对；处置记录 |
| `cp_emulsion_records` | `sensitizing_emulsion_preparation` | 乳剂前体、公用工程及输出 | 批次工艺单、称量单、过程仪表和放行记录 | batch_id; emulsion_recipe; silver_nitrate_mass; gelatin_mass; potassium_bromide_mass; water_mass; electricity; released_emulsion_mass | 核对前体领用、计量公用工程及已放行乳剂 | kg; MJ | 每个适用批次 | 报告期内全部现场感光乳剂批次 | 全部范围内乳剂生产线 | 汇总每个原子流并除以已放行感光乳剂质量 | 校准记录；配方批准；供应商证书；批次放行记录 |
| `cp_packaging_records` | `finishing_packaging` | 包装、生产线电力及已放行产品 | 包装物料清单、库存领用、灌装计数、净含量检查及仪表 | product_code; package_configuration; bottle_mass; box_mass; accepted_unit_count; rejected_unit_count; verified_net_fill_mass; electricity | 核对采购包装领用、合格灌装、不合格灌装、净含量检查及生产线仪表 | kg; MJ; item | 每个灌装批次 | 报告期内全部已放行批次 | 全部范围内灌装线 | 计算每单位已放行产品净质量的包装消耗和电力 | 物料清单；秤校准；灌装控制图；库存核对；仪表记录 |
| `cp_cleaning_records` | `equipment_cleaning` | 清洗水及废水 | 清洗记录、进水仪表、转移仪表和废物联单 | campaign_id; product_family; fresh_water_mass; recycled_water_mass; retained_product_returned; wastewater_volume; destination; pH; relevant_constituents | 核对清洗事件、水表、储罐转移及废物运输 | kg; m3 | 每次清洗事件 | 可归属于报告期批次的全部清洗事件 | 全部范围内配制和灌装设备 | 按因果生产周期分配；仅扣除经核实的闭路回用水和返回同批次的滞留产品 | 仪表校准；签字清洗记录；废水分析；转移或联单记录 |
| `cp_air_emissions` | `formulation` | PM0.2-PM2.5 直接排放 | 烟道测试、连续或定期测量、物料衡算及控制装置记录 | source_id; operating_hours; measured_pm25; exhaust_flow; control_efficiency; bypass_hours; dry_material_throughput | 使用适用的实测排放，或依据实测活动和控制性能形成有文件记录的计算 | kg | 每次测试及每个报告时段 | 报告期内全部干料处理、混合或研磨作业 | 全部范围内受控及无控制源 | 汇总排至声明区室的排放，并除以已放行产品净质量 | 测试报告；仪器校准；控制装置检查；旁路记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | `pk_reference_product` | 已放行净质量 = 合格销售件数 × 经核实的平均净灌装质量；不含包装、不合格或未放行物料。 | accepted_unit_count; verified_net_fill_mass | kg 已放行产品净重 |  |
| `calc_input_normalization` | 产品投入 | 归一化投入 = 可归属于已放行批次的供应状态投入总质量 ÷ 已放行产品净质量。 | 原子投入质量；分配记录；已放行产品净质量 | kg/kg 参考产品 |  |
| `calc_electricity_normalization` | 电力行 | 计量 kWh 乘以 3.6 换算为 MJ，按因果关系分配后除以适用的已放行输出质量。 | 计量 kWh；分配驱动因素；输出质量 | MJ/kg 输出 |  |
| `calc_packaging_normalization` | 包装行 | 包装质量 = 库存领用净量减去经核实的未用退回量和另行记录的包装废物量；再除以已放行产品净质量。 | 包装领用质量；未用退回量；包装废物；已放行净质量 | kg/kg 参考产品 |  |
| `calc_wastewater_normalization` | `cl_photochemical_wastewater` | 净废水量 = 计量处理转移体积减去经核实的同一闭路回用体积；再除以已放行产品净质量。 | 转移体积；闭路回用体积；已放行产品净质量 | m3/kg 参考产品 |  |
| `calc_pm_normalization` | `fm_pm25_air` | 汇总可归属运行时段内实测或按控制情况计算的 PM0.2-PM2.5 排放质量，再除以已放行产品净质量。 | 实测排放质量或活动因子；控制性能；运行时段；已放行产品净质量 | kg/kg 参考产品 | us-epa-chemical-preparations-neshap-2009 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品及全部涵盖产品输出 | 保留产品族、配方版本、物理状态、浓度状态、批次和放行规格；不得把显影液 UUID 用于其他产品族。 | 批准配方；标签；分析证书；放行记录 |
| `dq_atomic_ingredients` | 配制和乳剂投入 | 将每个原料行核对为一种化学或物理产品；原料族小计不得替代原子记录。 | 工艺单；供应商标识；领用记录；质量核对 |
| `dq_measurement` | 质量、能量和体积记录 | 使用经校准仪器或可审计票据，并记录换算系数、分配驱动因素和数据缺口。 | 校准证书；仪表记录；票据；计算工作簿 |
| `dq_temporal_coverage` | 前景报告期 | 纳入与报告期相关的全部合格、不合格、返工和清洗事件，并披露停机或非典型生产周期。 | 生产计划；批次台账；废物记录；清洗记录 |
| `dq_completeness` | 环境排放和废物 | 针对每种声明原料和工艺条件筛查相关直接排放及废物路径；量化实际存在的路径，并记录经核实不存在的路径。 | SDS；许可；监测记录；废物表征；过程审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 完成的前景数据包 | 确认参考输出为 1 kg 可销售产品净重、包装单列，且全部必需限定信息均已声明。 | un-cpc-3-0-structure-2025 |
| `validate_atomic_rows` | 过程清单 | 确认每个选定流都是一个原子交换，且每种条件性原料仅在声明配方支持时出现。 | us-epa-photographic-processing-1981 |
| `validate_mass_reconciliation` | 每个生产批次 | 核对供应状态原料投入与已放行产品、留存库存、经核实返工、不合格物料、样品及实测损失；解释未解决差额。 |  |
| `validate_emulsion_route` | 感光乳剂产品 | 现场乳剂制备适用时，确认前体标识、已放行乳剂质量和过程记录；否则记录采购感光乳剂的上游数据集。 | us-epa-photographic-processing-1981 |
| `validate_air_pathway` | 干料投料、混合或研磨 | 发生干法作业时评估细颗粒物排放和控制装置性能；不得仅因该路线间歇运行而报告零排放。 | us-epa-chemical-preparations-neshap-2009 |
| `validate_wastewater` | 设备清洗 | 核对新鲜和回用清洗水、转移废水及滞留产品，并披露处理去向和相关成分。 |  |
| `validate_boundary` | 数据集范围 | 确认客户摄影处理、使用后银回收和下游报废均被排除，除非作为单独报告的下游模块加入。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明摄影用化学制剂的从摇篮到工厂大门前景生产数据包 |
| downstream_use | 经方法和数据审查后，可发布为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 产品族、配方、状态、浓度、地域、技术和包装边界匹配的归因型产品及过程 LCA |
| excluded_use | 在显影剂、定影剂、漂白剂、停显液、调色剂、润湿剂或感光乳剂产品族间自动替代；客户摄影处理；使用后银回收；未限定的地域或技术外推 |
| required_metadata | canonical PCR id；产品族；配方版本；物理状态；浓缩或即用状态；活性成分及浓度；批次和报告期；设施地域；工艺路线；包装配置；分配；上游数据集选择 |
| required_quality_disclosure | 前景覆盖；数据年代；仪器和计算证据；原料和产品质量核对；不合格和返工物料；水电覆盖；直接排放筛查；废水去向；UUID 和范围证据缺口 |
| update_trigger | 配方或供应商品级变化；产品族或市场状态变化；包装重新设计；工艺或控制技术变化；地域变化；重大分配变化；报告期更新；缺失精确 UUID 或独立范围证据得到解决 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48342 精确分类标识及明确排除项 |
| `us-epa-photographic-processing-1981` | official_guidance | 美国环保署，《摄影处理行业水污染控制指导文件》，EPA-440/1-81/082-9，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=00000VZ7.TXT | 摄影用显影、停显、定影、漂白和感光乳剂化学品，用于定义产品特定条件性投入 |
| `us-epa-chemical-preparations-neshap-2009` | official_guidance | 美国环保署，Chemical Preparations Industry: National Emission Standards for Hazardous Air Pollutants for Area Sources，https://www.epa.gov/stationary-sources-air-pollution/chemical-preparations-industry-national-emission-standards | 混合、掺混、研磨和挤出作业范围及条件性颗粒物排放审查 |
| `ilford-rapid-fixer-sds-2024` | official_guidance | HARMAN Technology Ltd，《Rapid Fixer USA/CAN 安全数据表》，2024-07-18，https://www.ilfordphoto.com/wp/wp-content/uploads/2024/10/US-EN-Rapid-Fixer.pdf | 摄影定影液标识、液态物理状态及硫代硫酸铵组成 |
