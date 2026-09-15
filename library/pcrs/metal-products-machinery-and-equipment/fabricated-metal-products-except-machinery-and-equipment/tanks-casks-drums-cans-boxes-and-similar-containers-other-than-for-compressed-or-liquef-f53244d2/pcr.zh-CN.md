---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.tanks-casks-drums-cans-boxes-and-similar-containers-other-than-for-compressed-or-liquef-f53244d2
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未装机械或热力设备的小型铁、钢及铝制容器

## 1. 范围与适用性

本 PCR 适用于制造容量不超过 300 升的空置铁、钢或铝制罐、桶、圆桶、罐头盒、箱及类似容器；不包括压缩气体或液化气体用容器，也不包括装有机械或热力设备的产品。范围包括以外购金属板材或带材进行成形、适用路线的连接、实际发生的水基清洗或化学预处理、实际发生的涂装、印刷和固化、检验，以及在制造厂门口放行产品。

前景边界始于外购金属原料、工艺化学品、涂料和公用工程进入制造场址。上述投入的上游生产以链接数据集表示。内容物灌装、配送、使用、收集及容器寿命终结均在本门到门前景边界之外。单独供应的塞子、盖、罐盖、封闭件及其他包装附件不属于本 PCR 的产品；作为申报容器组成部分永久随容器供应的封闭件，必须披露并在前景数据包中作为独立原子组件列清单。

本方法适用于所覆盖的容器形态，但每个数据集都必须声明一个实际材料、容器形态、标称容量、连接路线、涂层体系和市场状态。下述参考流对象以质量计的钢制罐为代表；用于其他覆盖形态时，须审查产品特定的输出流身份，同时沿用相同的质量、边界和数据采集规则。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.tanks-casks-drums-cans-boxes-and-similar-containers-other-than-for-compressed-or-liquef-f53244d2 |
| classification_refs | CPC 3.0：42931（精确类别语境） |
| covered_products | 标称容量不超过 300 L、未装机械或热力设备的空置铁、钢或铝制罐、桶、圆桶、罐头盒、箱及类似容器 |
| excluded_products | 压缩气体或液化气体用容器；超过 300 L 的容器；装有机械或热力设备的容器；单独供应的塞子、盖、罐盖及包装附件；已灌装容器 |
| representative_product | 在制造厂门口放行的空置钢制罐 |
| production_route | 外购金属板材或带材；切割与成形；条件性连接；条件性水基预处理；条件性涂装、印刷与固化；检验与放行 |
| market_state | 制造厂门口的空置、合格、干燥容器，并声明材料、形态、容量、涂层及封闭件配置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并提供以钢制罐为代表的合格空置小型金属容器 |
| How much | 1 kg 已放行空置钢制罐净质量 |
| How well | 满足声明的尺寸、容量、材料、接缝、涂层、洁净度和密封性规范 |
| How long or cycle | 完成一个直至厂门口放行的制造与放行周期；容器使用寿命不在前景边界内 |
| reference_flow_link | 扣除内容物、运输包装及单独供应的附件后，已放行的 `steel_can_output` 质量等于 1 kg 参考数量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 钢制罐 `5e63418a-6550-4e3c-a334-3a1b343ced44` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际容器材料及合金或钢级；容器形态；标称容量（L）；空容器净质量；板材或带材厚度；两片式、三片式、焊接、卷封或拉深的连接/成形路线；内外涂层体系；印刷路线；封闭件随容器供应或单独供应；可重复使用或一次性市场状态；生产地域及报告期；放行产品规范；厂门口边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品及按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用厂门口放行的合格空容器净干质量。排除内容物、托盘、缠绕膜、纸箱及单独供应的附件。 |
| `measurement_count_to_mass` | 按件记录的产量和废品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用同一材料、形态、容量和配置的同期样本平均皮重将件数换算为质量，并保留样本量及离散度。 |
| `measurement_electricity_energy` | 所有电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留以 kWh 计的电表读数并按 3.6 MJ/kWh 转换为 MJ；不得将外购电力与现场燃料能量合并。 |
| `measurement_gas_volume` | 天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明计量参考温度、压力及干/湿基准，并采用供应商或流量计修正换算到报告体积基准。 |
| `measurement_water_mass` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量计量。以体积计量时，应采用记录温度下实测或有据可查的密度换算，并保留体积原始记录和换算基准。 |
| `measurement_material_balance` | 金属原料、放行产品和金属废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按每种材料路线核对期初库存加收货减期末库存，与放行产品、分类废料、废品及有记录的库存变化保持平衡。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址门口的外购金属板材或带材、工艺化学品、涂料和公用工程，均带有供应商身份、材料状态及上游数据集链接 |
| starting_condition_role | 门到门前景容器制造的上游产品投入 |
| product_classification_scope | 不超过 300 L 的空置铁、钢或铝制容器，不包括压缩/液化气体用容器及装有机械或热力设备的容器 |
| recursive_input_rule | 若所覆盖的小型金属容器本身作为前景投入消耗，则将该具体容器记为具有独立上游数据集的直接产品投入；不得在当前前景过程中递归纳入其制造 |
| upstream_dataset_requirement | 为每项外购金属原料、电力供应、燃料、水、化学品、涂料和连接耗材链接与声明地域及交付边界一致的上游数据集 |
| disclosure | 声明材料及厚度、成形和连接路线、预处理和涂装路线、标称容量、随附封闭件配置、场址地域、报告期、上游数据集选择、分配方法及任何被排除的现场操作 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景容器制造 | 纳入申报容器所用的全部现场切割、成形、连接、清洗、预处理、涂装、印刷、固化、检验、返工和放行操作；前景边界终止于空容器放行。 | `unsd-cpc-3-0-structure-2025`; `us-epa-ap42-can-coating` |
| `boundary_conditional_routes` | 路线选择 | 仅在申报产品实际实施时纳入连接、水基处理、涂装、印刷和固化，并识别每项已纳入技术和材料，不得采用无条件说明的平均路线。 | `us-epa-ap42-can-coating`; `ec-jrc-stm-bref-2006` |
| `boundary_upstream_inputs` | 外购投入 | 将上游生产置于前景单元过程之外，但要求每项外购产品投入均具有相容的上游数据集。 | `ec-jrc-stm-bref-2006` |
| `boundary_direct_releases` | 排放与废物 | 纳入跨越前景边界的现场实测废水、分类金属废料、涂装相关 NMVOC 和直接燃烧化石燃料产生的 CO2；不得重复计算已含在上游电力或燃料数据集中的排放。 | `us-epa-ap42-can-coating`; `ec-jrc-stm-bref-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sheet_preparation_and_forming` | 板材准备与成形 | required | 始终纳入申报容器所用的切割、落料、拉深、辊压或成形操作 | 前景材料转换 | 每 1 kg 已放行钢制罐 |
| `seam_joining` | 接缝连接 | conditional | 当罐身、端部、把手或结构件采用焊接或消耗焊材的方式连接时纳入 | 前景连接 | 每 1 kg 已放行钢制罐 |
| `aqueous_surface_pretreatment` | 水基表面预处理 | conditional | 当现场进行水基清洗、脱脂、蚀洗、漂洗或化学预处理时纳入 | 前景表面准备 | 每 1 kg 已放行钢制罐 |
| `coating_printing_and_curing` | 涂装、印刷与固化 | conditional | 当现场进行内外涂装、印刷、接缝涂漆或热固化时纳入 | 前景精整 | 每 1 kg 已放行钢制罐 |
| `inspection_and_release` | 检验与放行 | required | 始终纳入最终尺寸、外观、洁净度和密封性检验以及放行产品核算 | 前景质量放行 | 每 1 kg 已放行钢制罐 |

### 过程：板材准备与成形（`sheet_preparation_and_forming`）

#### 输入

##### 产品流

###### 镀锡钢板（`tinplate_steel_sheet_input`）

仅对镀锡板路线记录进入切割或成形的镀锡钢板。

- 选定流：镀锡钢板
- 流属性/单位：Mass / kg
- 数量规则：根据收货、卷材、板材和生产记录取得净领用质量，并按期初、期末库存调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`us-epa-ap42-can-coating`

###### 冷轧碳钢板（`cold_rolled_carbon_steel_sheet_input`）

仅对声明采用该原料的钢制路线记录未涂层冷轧碳钢板。

- 选定流：冷轧碳钢板
- 流属性/单位：Mass / kg
- 数量规则：根据收货、卷材、板材和生产记录取得净领用质量，并按期初、期末库存调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`us-epa-ap42-can-coating`

###### 厚度超过 0.2 mm 的铝板材（`aluminium_sheet_over_0_2mm_input`）

仅当申报铝原料厚度超过 0.2 mm 时记录该板材。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据收货、卷材、板材和生产记录取得净领用质量，并按期初、期末库存调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 0.1 mm 铝片（`aluminium_sheet_0_1mm_input`）

仅当申报路线采用 0.1 mm 铝材时记录该特定薄板投入。

- 选定流：0.1mm 铝片 `c5e98422-1b9b-4e10-b3f4-3dc4e17d3989`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据收货、卷材、板材和生产记录取得净领用质量，并按期初、期末库存调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 成形电力（`forming_electricity_input`）

记录切割、冲压、拉深、辊压、输送及路线特定成形辅助设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：对已纳入成形设备分表计量，并按 `measurement_electricity_energy` 将 kWh 转换为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`ec-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢板边角料（`steel_offcut_scrap_output`）

记录作为废物离开前景过程的分类钢制落料骨架、切边及边角料。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量转移至有记录去向的分类钢制边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 铝成形废料（`aluminium_scrap_output`）

记录作为废物离开前景过程的分类铝制落料骨架、切边及成形废料。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量转移至有记录去向的分类铝废料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

##### 基本流

### 过程：接缝连接（`seam_joining`）

#### 输入

##### 产品流

###### 药芯焊丝（`flux_cored_wire_input`）

仅当申报的焊接连接路线实际消耗药芯焊丝时记录；电阻焊或机械卷封路线将本行报告为不适用。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用药芯焊路线的容器批次领用质量减去退回的可用焊丝质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joining_consumables`
- 来源：

###### 连接电力（`joining_electricity_input`）

记录申报路线所含焊接、卷封和连接设备的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：对已纳入连接设备分表计量，并由 kWh 转换为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：水基表面预处理（`aqueous_surface_pretreatment`）

#### 输入

##### 产品流

###### 工艺用水（`process_water_input`）

记录用于水基清洗、浴液补水和漂洗的外部供水；排除内部循环水以避免重复计算。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量外部净用水投入，必要时按 `measurement_water_mass` 换算为质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_pretreatment`
- 来源：`ec-jrc-stm-bref-2006`

###### 氢氧化钠（`sodium_hydroxide_input`）

仅当碱性清洗或处理浴使用氢氧化钠时，按纯物质当量质量记录，并保留交付溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：交付溶液质量乘以实测或供应商声明的氢氧化钠质量分数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_aqueous_pretreatment`
- 来源：`ec-jrc-stm-bref-2006`

###### 预处理电力（`pretreatment_electricity_input`）

记录水基预处理过程中泵、搅拌、抽风、过滤、浴液控制和干燥消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：对已纳入预处理线分表计量，并由 kWh 转换为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`ec-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 碱性金属清洗废水（`alkaline_cleaning_wastewater_output`）

将碱性金属清洗排放或转移的水性废物流与其他废水及废浓浴液分开记录。

- 选定流：碱性金属清洗废水
- 流属性/单位：Mass / kg
- 数量规则：计量或通过储罐核算跨越场址边界的废水质量，并记录去向和处理路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_aqueous_pretreatment`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

### 过程：涂装、印刷与固化（`coating_printing_and_curing`）

#### 输入

##### 产品流

###### 配制型环氧树脂容器涂料（`formulated_epoxy_coating_input`）

仅当申报容器实际涂用配制型环氧树脂涂料时记录；保留固体、溶剂和水分数，不得以初级环氧树脂质量代替。

- 选定流：配制型环氧树脂容器涂料
- 流属性/单位：Mass / kg
- 数量规则：按配方和涂装线，以涂料领用质量减去退回的可用涂料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_fuel_and_formulation`
- 来源：`us-epa-ap42-can-coating`

###### 固化用气态天然气（`natural_gas_input`）

仅当涂装或固化炉现场直接燃烧天然气时记录交付的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：分配至已纳入涂装和固化线的修正计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_fuel_and_formulation`
- 来源：`us-epa-ap42-can-coating`

###### 涂装线电力（`coating_electricity_input`）

记录涂料施涂、印刷、通风、控制、输送及电加热固化设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：对已纳入涂装、印刷和固化线分表计量，并由 kWh 转换为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：`us-epa-ap42-can-coating`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排入空气的非甲烷挥发性有机化合物（`nmvoc_emission_output`）

记录涂料施涂、印刷和固化经捕集与控制后直接排放的非甲烷挥发性有机化合物；排除上游排放。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用场址实测排放，或在记录捕集、回收和销毁后进行涂装线溶剂质量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`us-epa-ap42-can-coating`

###### 排入空气的化石源二氧化碳（`fossil_carbon_dioxide_output`）

记录现场燃烧天然气用于涂装或固化产生的直接化石源二氧化碳；排除上游燃料供应及外购电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将现场实测的直接烟气排放分配至已纳入的固化设备。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`us-epa-ap42-can-coating`

### 过程：检验与放行（`inspection_and_release`）

#### 输入

##### 产品流

###### 检验与放行电力（`inspection_electricity_input`）

记录密封性试验、尺寸检验、视觉系统、干式清洁、输送及发运准备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：对检验与放行设备分表计量，并由 kWh 转换为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行钢制罐（`steel_can_output`）

仅记录在厂门口放行的合格空置钢制罐；其他覆盖产品形态需要各自经审查的产品流身份。

- 选定流：钢制罐 `5e63418a-6550-4e3c-a334-3a1b343ced44`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告期内放行的合格空置钢制罐净干质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已放行钢制罐
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_released_product`
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 所有前景过程 | 在记录允许时，通过分开材料路线、产品形态、生产线、批次、计量表、槽体和排放控制来避免分配。 | `ec-jrc-stm-bref-2006` |
| `allocation_shared_utilities` | 共用电力、燃料、水及处理服务 | 优先采用直接计量量。无法直接计量时，采用设备时间、处理表面积或产量质量等有记录的物理驱动因素，并披露驱动因素及敏感性。 | `ec-jrc-stm-bref-2006` |
| `allocation_metal_scrap` | 钢和铝废料 | 以实测质量和去向将分类废料报告为废物输出。不得在前景清单内应用替代原生材料的避免负荷；任何回收替代均属于声明的下游系统模型。 | `ec-jrc-stm-bref-2006` |
| `allocation_rework_and_rejects` | 内部返工及不合格容器 | 将内部返工循环保留在前景系统内并纳入其增量材料和能源。仅报告跨越边界的废物；不得将返工质量计为额外放行产品。 | `us-epa-ap42-can-coating` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `sheet_preparation_and_forming` | 金属板材投入和分类废料 | 采购、卷材/板材领用、库存、称量及废物转移记录 | 材料身份；合金或钢级；涂层；厚度；期初库存；收货；领用质量；期末库存；废料质量；去向；批次 | 经校准秤具及核对的库存台账 | kg | 每次收货、领用和废物转移；每月核对 | 完整报告期 | 所有纳入生产线和库房 | 按材料和产品路线分别核对，再按放行质量归一化 | 秤具校准；供应商证书；库存结账；废物转移单 |
| `cp_process_electricity` | 所有纳入过程 | 外购电力 | 分表和生产记录 | 电表编号；起止读数；kWh；过程；生产线；批次；运行时间；共用负荷驱动因素 | 经校准分表或有记录的总表差减法 | kWh | 连续或每班；每月结账 | 完整报告期 | 所有纳入生产及辅助设备 | 扣除排除负荷，按有记录的物理驱动分配共用负荷，转换为 MJ 并归一化 | 电表校准；单线图；与账单核对 |
| `cp_joining_consumables` | `seam_joining` | 药芯焊丝 | 领用、退回及批次记录 | 耗材身份；牌号；直径；领用质量；退回质量；批次；连接技术；产品批次 | 经校准领料秤及库房台账 | kg | 每次领用和退回 | 完整报告期 | 所有纳入连接线 | 按相容连接路线计算净消耗并按放行质量归一化 | 材料证书；秤具校准；批次可追溯性 |
| `cp_aqueous_pretreatment` | `aqueous_surface_pretreatment` | 水、氢氧化钠和废水 | 水表、化学品领用、浴液分析、储罐及排放记录 | 水体积或质量；密度；化学溶液质量；浓度；浴液库存；排放质量；去向；生产线；批次 | 经校准仪表/秤具、浴液分析及储罐核对 | kg; m3; mass fraction | 每批或连续计量；每次排放 | 完整报告期 | 所有纳入水处理和漂洗工序 | 分开外部供水、每种化学品及每股废物流；按跨边界净质量归一化 | 仪表/秤具校准；分析结果；排放转移单；浴液平衡 |
| `cp_coating_fuel_and_formulation` | `coating_printing_and_curing` | 涂料和天然气 | 配方、涂料领用/退回、燃气表及生产记录 | 配方编号；涂料质量；退回质量；固体；水；溶剂；燃气体积；参考条件；生产线；批次；涂覆面积 | 经校准秤具及修正燃气表 | kg; m3 | 每涂料批次和班次；每月结账 | 完整报告期 | 所有纳入涂装、印刷和固化设备 | 仅汇总相同配方和路线条件，并按放行质量归一化 | 安全/技术数据表；秤具和仪表校准；批次可追溯性 |
| `cp_direct_air_emissions` | `coating_printing_and_curing` | NMVOC 和化石源 CO2 | 烟气测试、连续监测、捕集/控制及运行记录 | 污染物；浓度；流量；时长；涂料溶剂投入；捕集；回收；销毁；燃料；生产线；批次 | 场址实测或控制后按生产线核对的质量平衡 | kg | 每次测试及场址计划要求的运行期 | 代表完整报告期 | 已纳入涂装和固化设备的全部直接排口 | 汇总控制后的直接排放；排除上游电力及燃料供应排放 | 方法报告；校准；控制装置日志；完整性核对 |
| `cp_released_product` | `inspection_and_release` | 已放行钢制罐 | 生产、检验、皮重及发运记录 | 产品编号；材料；形态；容量；涂层；封闭件；件数；抽样皮重；放行质量；废品；返工；日期 | 经校准生产秤或件数转质量协议，加签署放行 | kg; item | 每个放行批次 | 完整报告期 | 所有纳入检验和发运点 | 仅汇总合格放行质量；核对废品及返工 | 秤具校准；皮重样本；检验结果；放行授权；发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个清单行 | 归一化数量 = 报告期交换量 / 报告期已放行钢制罐质量 | 交换量；放行质量 | 每 1 kg 已放行钢制罐的数量 |  |
| `calc_electricity_mj` | 所有电力行 | 电力 MJ = 计量 kWh × 3.6 MJ/kWh | 计量 kWh | 以 MJ 计的电力 |  |
| `calc_sodium_hydroxide_pure` | 氢氧化钠 | 纯 NaOH 当量质量 = 交付溶液质量 × 实测或供应商声明的 NaOH 质量分数 | 溶液质量；NaOH 质量分数 | kg NaOH | `ec-jrc-stm-bref-2006` |
| `calc_count_to_mass` | 按件计的放行产品 | 放行质量 = 合格件数 × 同期抽样平均皮重 | 合格件数；抽样皮重；样本统计 | kg 放行产品 |  |
| `calc_metal_balance` | 每条金属路线 | 不平衡量 = 期初库存 + 收货 - 期末库存 - 放行产品 - 分类废料 - 其他有记录输出；调查并披露非零不平衡量 | 库存、收货、产品和废物质量 | 路线质量平衡结果 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 每个建模产品声明材料、牌号/合金、形态、容量、厚度、连接路线、涂层、封闭件配置及放行规范。 | 供应商证书；图纸/规范；放行记录 |
| `dq_temporal_representativeness` | 所有前景数据 | 采用一个完整、有代表性的报告年度或完整的较短生产期；披露停产、试验及异常时段。 | 带日期记录；生产日历；异常日志 |
| `dq_measurement_traceability` | 质量、能源、水及排放 | 保留仪表/秤具身份、校准状态、原始读数、换算基准及记录责任人。 | 校准证书；原始日志；签署核对记录 |
| `dq_route_separation` | 材料及技术变体 | 不得在未披露组成和测试敏感性的情况下平均铁/钢与铝路线、涂层与无涂层路线或差异显著的成形/连接技术。 | 路线特定批次和计量记录 |
| `dq_completeness` | 前景边界 | 将金属质量、外购能源、水、化学品、涂料、废物及直接排放与纳入的过程图核对，并解释缺失或估算记录。 | 签署的质量/能源平衡及完整性检查表 |
| `dq_upstream_compatibility` | 上游产品投入 | 采用与声明地域、技术、产品状态及交付边界相容的上游数据集；记录替代情况。 | 上游数据集元数据及选择记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_scope_identity` | 产品类别及参考流 | 若产品用于压缩或液化气体、容量超过 300 L、装有机械或热力设备、已灌装，或缺失必需产品限定信息，则校验失败。 | `unsd-cpc-3-0-structure-2025` |
| `validation_reference_mass` | 参考产品 | 确认参考量恰为 1 kg 合格放行空置钢制罐净质量，并排除内容物、运输包装和单独供应的附件。 |  |
| `validation_process_alignment` | 过程图及清单 | 确认每个必需过程均有详细清单、每个条件过程均声明适用性，且每个选定流均为一个原子交换。 | `us-epa-ap42-can-coating`; `ec-jrc-stm-bref-2006` |
| `validation_uuid_and_units` | 含 UUID 的行 | 确认公开状态为 100，英文和中文 baseName、流类型、分类、属性、单位组和参考单位均与选定行相符；未解决行保持 UUID 为空。 |  |
| `validation_balance_and_completeness` | 前景记录 | 确认质量平衡闭合、放行产品核对、路线特定公用工程覆盖、废水去向及直接排放完整性；调查无法解释的缺口。 | `ec-jrc-stm-bref-2006` |
| `validation_no_double_counting` | 排放与回收 | 确认上游电力和燃料排放未作为直接排放重复计算，且前景废料输出中未嵌入避免回收信用。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅对声明的材料、产品形态、容量、路线、地域和厂门口边界可作为 `background_dataset` |
| downstream_use | 需要空置小型金属容器制造数据的前景过程数据集及生命周期模型 |
| allowed_use | 在声明的材料、形态、容量、连接、涂装、地域及报告期限值内进行比较或建模 |
| excluded_use | 压缩/液化气体用容器；超过 300 L 的容器；装有设备的容器；已灌装包装系统；未经相容性审查的其他材料或产品形态；容器使用或寿命终结 |
| required_metadata | PCR id；产品及 CPC 语境；材料和牌号/合金；形态；容量；厚度；连接路线；涂装/印刷路线；封闭件配置；地域；报告期；参考质量；过程适用性；上游数据集链接；分配；数据质量 |
| required_quality_disclosure | 原始记录覆盖率；校准；质量平衡结果；件数转质量抽样；路线分离；共用服务分配；直接排放方法；未解决 UUID；缺失独立范围证据 |
| update_trigger | 材料、厚度、成形/连接技术、涂料配方或控制、燃料、容量等级、封闭件配置、场址地域、分配、上游数据集、报告期或放行产品规范发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | dataset | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 42931 正式身份、容量上限及排除项 |
| `us-epa-ap42-can-coating` | official_guidance | 美国环境保护署，AP-42 第 4.2.2.2 节《罐涂装》，https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2b.pdf（检索日期：2026-09-04） | 两片式和三片式罐路线分解、板材涂装、成形、接缝涂装、固化及直接 NMVOC 采集要求 |
| `ec-jrc-stm-bref-2006` | official_guidance | 欧盟委员会联合研究中心，《金属与塑料表面处理最佳可行技术参考文件》，2006 年 8 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索日期：2026-09-04） | 水基预处理、漂洗、能源、水、碱、废水、废物分类及前景质量规则 |
