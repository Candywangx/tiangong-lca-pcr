---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electric-filament-or-discharge-lamps-parts-of-arc-lamps
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 白炽灯或放电灯的零件；弧光灯的零件

## 1. 范围与适用性

本 PCR 适用于单独供应、可识别为专门或主要用于白炽灯、放电灯或弧光灯的零件。涵盖的零件族包括灯头、切成适于装配长度的钨灯丝、金属电极、拟装入灯泡或灯管且不具有绝缘件属性的玻璃零件，以及灯丝支承架。前景数据包表示一个已声明零件族在工厂大门处达到市场交付状态的制造活动。

完整灯泡和灯管、灯具或照明装置、使用自备电源的手提式电灯零件、LED 光源及其专用零件、尚不能识别为灯用零件的通用材料坯料、另行分类的玻璃或陶瓷电气绝缘件，以及归入电气用碳制品的碳电极或弧光灯碳棒均不在范围内。仅装有灯泡的设备也不在范围内。必须声明产品图样、零件族、材料组成、适配灯型、完工状态和生产技术，不得把这一异质类别建模成未指定平均产品。

系统边界始于规定材料、外购组件、能源、水和工艺化学品进入制造场址，包括报告设施实施且适用于实际路线的成形、拉丝、绕制、切割、冲压、连接、热处理、清洗、表面处理、检验、搬运和包装。外购投入的上游生产采用相容的供应商或背景数据集；零件装入完整灯具后的使用和生命周期终结阶段不在本从摇篮到工厂大门的前景边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electric-filament-or-discharge-lamps-parts-of-arc-lamps |
| classification_refs | CPC 3.0：46541（精确分类语境） |
| covered_products | 单独供应且可识别的灯头；适于装配的钨灯丝；放电灯金属电极；灯泡或灯管用非绝缘玻璃零件；灯丝支承架 |
| excluded_products | 完整灯泡或灯管；灯具与照明装置；自备电源手提灯零件；LED 零件；通用材料坯料；另行分类的绝缘件；碳电极和弧光灯碳棒 |
| representative_product | 为白炽灯、放电灯或弧光灯生产的一种已声明的市场交付状态零件 |
| production_route | 按产品将已声明的玻璃或金属坯料通过适用的成形、清洗、热处理、精整、检验和包装工序制成零件 |
| market_state | 工厂大门处检验合格的成品零件；销售规格包含包装时为已包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 可识别、检验合格且可装入已声明白炽灯、放电灯或弧光灯的零件 |
| How much | 市场交付状态零件净质量 1 kg，不含可重复使用的运输包装 |
| How well | 满足已声明的材料、尺寸、电气、机械、表面、洁净度和灯具接口验收准则 |
| How long or cycle | 工厂大门处交付的一个生产批次；零件本身不规定使用期限 |
| reference_flow_link | 规定完工状态和质量的已声明 CPC 46541 零件 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 白炽灯或放电灯的零件，弧光灯的零件 `8234a28a-728c-4755-a4ed-834ace7ddfd8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件族；材料及牌号或组成；图样号或零件号；尺寸及按件销售时的单件净质量；成品或半成品状态；适配灯技术；适用的电气、热学、机械和洁净度规格；表面精整或涂层；制造技术；生产地理范围；参考年份；再生含量声明；包装配置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品和以质量计量的清单交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有前景数量按 1 kg 合格参考产品净质量归一化。声明销售包装是否进入清单，但不得把包装计入参考产品质量。 |
| `count_to_mass` | 以件数记录的生产和销售数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用实测的批次合格零件平均单件净质量将件数换算为质量，并保留样本量、称量方法和批次标识。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 分别声明各气体体积的温度、压力、干湿基准和仪表修正；不得合并不同气体。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 单独保留计量电力，必要时按 1 kWh = 3.6 MJ 换算。声明电压等级、电网或供应商组合，以及变压和配电损耗是否已纳入外购电力数据集。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `part_identity_boundary` | 产品适用性 | 仅纳入可识别为白炽灯、放电灯或弧光灯零件的单独供应产品；排除完整灯、照明设备以及另行分类的通用或绝缘制品。 | `eu-cn-explanatory-notes-2000-8539`; `unsd-cpc-3-0-structure-2025` |
| `foreground_operation_boundary` | 前景制造 | 纳入报告设施控制范围内从规定投入接收到成形或装配、清洗、热处理、精整、检验和市场包装的全部适用工序。 | `us-epa-mercury-study-volume-2-1997`; `imerc-mercury-use-in-lighting-2008` |
| `purchased_input_boundary` | 外购材料、能源、化学品、组件和包装 | 将每项外购投入记录为一个原子产品交换，并关联在地理、技术、产品状态和参考年份上相容的上游数据集。 |  |
| `direct_release_boundary` | 废物和基本流排放 | 分别记录离开设施的每个废物流和每项直接基本流排放。材料离开前景边界之前，内部循环利用不作为输出。 |  |
| `capital_goods_boundary` | 建筑、机器、工装和基础设施 | 默认排除资本货物；如研究目的或适用计划要求纳入，须披露并说明理由。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 规定的玻璃或金属坯料、外购组件、能源、水、化学品和包装进入制造设施 |
| starting_condition_role | purchased_material_and_component_gate |
| product_classification_scope | 可识别为 CPC 3.0 次级 46541 的零件，不因其组成材料的分类而改变产品边界 |
| recursive_input_rule | 若外购投入本身也是 CPC 46541 灯用零件，则以已声明零件族和上游数据集记录为独立产品输入；不得并入参考产品，也不得递归重复应用本前景工序 |
| upstream_dataset_requirement | 每项外购投入均需相容的上游数据集，并披露产品状态、地理、技术、参考年份以及分配或再生含量处理 |
| disclosure | 声明零件族、材料清单、工艺路线、外包步骤、内部循环、直接排放、包装、截断以及与本边界的全部偏离 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `lamp_part_manufacturing` | 灯用零件制造、检验和市场准备 | required | 采用与已声明零件材料和技术相符的原子行；只有产品或过程证据支持时才可将条件行标记为不适用 | 前景生产 | 合格市场交付状态零件净质量 1 kg |

### 过程：灯用零件制造、检验和市场准备（`lamp_part_manufacturing`）

#### 输入

##### 产品流

###### 高硼硅玻璃坯料（`borosilicate_glass`）

当已声明产品为高硼硅玻璃零件或含有此类玻璃时，记录所消耗的高硼硅玻璃。其他玻璃组成必须使用独立原子流，不得在本行下替代。

- 选定流：高硼硅玻璃管 `05342b0b-c850-45a8-b6dd-1b735e40262a`
- 流属性/单位：Mass / kg
- 数量规则：经期初、期末库存和内部退料修正的外购净消耗质量；不含高硼硅玻璃的产品标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 钨丝坯料（`tungsten_wire`）

记录用于制造可装配灯丝或钨电极的已声明钨丝。流 UUID 尚未解决，不得使用钨矿石、钨杆、钼丝或钛丝代理。

- 选定流：钨丝
- 流属性/单位：Mass / kg
- 数量规则：经库存变动和已核实内部退料修正的外购钨丝净消耗质量；产品不含钨丝时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 铝板材坯料（`aluminium_sheet`）

记录用于灯头、触点、支承架或其他已声明铝制零件的铝板材，并声明合金、状态、厚度和再生含量基准。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：经库存变动和内部退料修正的外购铝板材净消耗质量；不使用铝板材时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 钼丝坯料（`molybdenum_wire`）

记录用作已声明引入线或支承材料的钼丝。名称匹配候选被归入未锻轧金属，故流 UUID 尚未解决。

- 选定流：钼丝
- 流属性/单位：Mass / kg
- 数量规则：经库存变动和内部退料修正的外购钼丝净消耗质量；不使用钼丝时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 外购电力（`electricity`）

记录供应至前景工序的计量电力，不得与天然气或其他能源载体合并。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至已声明零件的计量外购电力，必要时由 kWh 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：

###### 气态天然气（`natural_gas`）

使用场内炉、燃烧器或热处理设备时，记录供应的天然气。外购热不在本行表示。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配至已声明零件的经修正计量体积；前景边界内不燃烧天然气时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：

###### 工业氧气（`industrial_oxygen`）

在富氧燃烧或其他已声明的成形或热处理工序使用外购工业氧气时记录。不得用本行表示从环境空气获取的氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：分配至已声明零件的经修正计量氧气体积；无外购工业氧气跨越前景边界时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_gas_records`
- 来源：

###### 工艺用水（`process_water`）

清洗、湿法处理、溶液配制或冷却用水发生消耗或跨越前景边界排放时记录。闭路循环仅记录补水和排污量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配至已声明零件的计量或批次记录补充工艺水质量；不用工艺水时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_chemical_records`
- 来源：

###### 氢氧化钠（`sodium_hydroxide`）

碱性清洗或表面处理使用氢氧化钠时记录。按有效氢氧化钠质量报告，并保留供应溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：发放到已声明工序的有效氢氧化钠质量；未使用时标记为不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_water_and_chemical_records`
- 来源：

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录随参考产品离开工厂并转移给客户的瓦楞纸箱。不转移所有权的可重复使用运输包装不在本行，并单独披露。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：随已声明参考产品转移的瓦楞纸箱净质量；散装无包装交付或使用另行列项的其他包装时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考产品（`reference_product`）

仅记录满足已声明验收准则的市场交付状态合格零件。返工品和不合格品在最终去向确定前不得计入本输出。

- 选定流：白炽灯或放电灯的零件，弧光灯的零件 `8234a28a-728c-4755-a4ed-834ace7ddfd8`
- 流属性/单位：Mass / kg
- 数量规则：将合格产出净质量归一化为恰好 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conforming_output_records`
- 来源：

##### 废物流

###### 高硼硅玻璃碎料（`borosilicate_glass_cullet`）

记录作为废物离开前景边界的高硼硅玻璃边角料和不合格品。不得以浮法玻璃碎料替代，也不得将其他玻璃组成并入本行。

- 选定流：高硼硅玻璃碎料
- 流属性/单位：Mass / kg
- 数量规则：经核实内部回用扣除后，作为高硼硅玻璃碎料外运的实测质量；已声明路线不产生时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 钨生产废料（`tungsten_scrap`）

钨丝边角料、成形不合格品和回收粉尘只有在去向和污染状态等同时才作为一个钨特定废料流记录；否则拆分物理废物流。

- 选定流：钨生产废料
- 流属性/单位：Mass / kg
- 数量规则：经核实内部回用扣除后，从前景设施外运的实测钨废料质量；不存在时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 铝废料（`aluminium_scrap`）

记录作为铝废料离开前景边界的铝板边角料和成形不合格品，并声明合金、污染物、物理形态和处理去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：经核实内部回用扣除后，从前景设施外运的实测铝废料质量；不存在时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 钼生产废料（`molybdenum_scrap`）

记录作为钼特定废料离开前景边界的钼丝边角料和成形不合格品，不得使用“未指定重金属”代理。

- 选定流：钼生产废料
- 流属性/单位：Mass / kg
- 数量规则：经核实内部回用扣除后，从前景设施外运的实测钼废料质量；不存在时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 废碱液（`waste_alkaline_liquor`）

废碱性清洗液离开前景边界送往处理时记录，并保留 pH、氢氧化钠浓度、相关溶解或悬浮污染物及去向。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：外运处理的废碱液实测质量；无废碱液离开设施时标记为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_chemical_records`
- 来源：

##### 基本流

###### 直接化石源二氧化碳（`carbon_dioxide_fossil`）

记录可归属于已声明零件的场内天然气燃烧直接排放的化石源二氧化碳。本行不包含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：场址实测，或根据采集的天然气消耗、供应商组成和有记录的氧化假设计算；场内不燃烧化石燃料时标记为不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享前景工序 | 在采用分配前，应尽可能细分并计量产品特定工序和材料损失。 |  |
| `allocation_physical_causality` | 同一产线生产多种合格灯用零件 | 采用反映因果关系的实测物理关系分配共享投入和排放，例如机器时间、炉内占用、处理表面积或加工质量；记录所选驱动因子并完成核对。 |  |
| `allocation_mass_fallback` | 缺少可辩护因果驱动因子的共享负荷 | 仅以合格产品净质量作为有记录的后备方法；不同零件质量存在实质差异时不得按件数分配。 |  |
| `allocation_recycling_consistency` | 废料和内部回用 | 从边界输出中排除已核实内部循环，并避免重复计算所选 LCA 方法中的循环利用收益、再生含量声明或废物处理负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `lamp_part_manufacturing` | 材料投入、包装、材料特定废料 | 采购、领料、库存、地磅、生产和废物转移记录 | 材料身份；牌号；供应商；期初库存；接收；领用；期末库存；内部退料；外运废料；包装质量；批次；日期 | 将校准秤数据和库存交易核对到每个生产批次 | kg | 每批，按月汇总 | 至少连续 12 个代表性月份；不足 12 个月的完整生产活动按全周期 | 报告设施控制下的全部前景工序和储存 | 净消耗 = 期初库存 + 接收 - 期末库存 - 有记录转移；将分配后的净消耗和外运废物按合格产出质量归一化 | 校准记录；库存核对；材料清单；称重单；废物转移单；差异调查 |
| `cp_energy_and_gas_records` | `lamp_part_manufacturing` | 电力、天然气、工业氧气 | 分表、公用事业账单、储罐或气瓶领用和运行小时记录 | 仪表编号；期初期末读数；体积修正条件；账单期；设备；产品批次；停机 | 优先用专用仪表；共享消耗采用有记录的因果驱动因子分配 | MJ；m3 | 每批或每个计量区间，按月汇总 | 至少连续 12 个代表性月份；不足 12 个月的完整生产活动按全周期 | 全部适用前景设备 | 扣除非生产用量，与账单核对，应用批准的分配驱动因子，并按合格产出质量归一化 | 仪表校准；账单核对；运行日志；温压修正记录 |
| `cp_water_and_chemical_records` | `lamp_part_manufacturing` | 工艺用水、氢氧化钠、废碱液 | 水表、批次配方、化学品领用、溶液分析和废物转移记录 | 水表读数；溶液质量；氢氧化钠浓度；补加；排污；pH；污染物结果；去向；批次；日期 | 计量用水并称量或计量化学溶液；组成影响处理时对废液取样 | kg | 每批或每次排放，按月汇总 | 至少连续 12 个代表性月份；不足 12 个月的完整生产活动按全周期 | 场址控制下的湿法清洗和表面处理工序 | 将供应溶液换算为有效氢氧化钠质量；核对补加、带出、排污和外运废液；按合格产出质量归一化 | 仪表和秤校准；浓度证书或分析；pH 记录；转移联单；质量平衡检查 |
| `cp_conforming_output_records` | `lamp_part_manufacturing` | 参考产品 | 生产、检验、不合格和净质量记录 | 零件号；零件族；批次；生产件数；合格件数；不合格件数；抽样净质量；验收结果 | 称量代表性合格零件，并将合格件数与批次净质量核对 | kg | 每批 | 完整报告期 | 最终检验和发运点 | 合格质量 = 合格件数 × 经核实批次平均单件净质量，或直接批次质量；所有交换按 1 kg 归一化 | 校准秤记录；抽样方案；检验放行；生产核对 |
| `cp_direct_emission_records` | `lamp_part_manufacturing` | 直接化石源二氧化碳 | 烟气实测、燃料表、供应商气体分析或有记录的场址计算 | 排放结果；燃料体积；温度；压力；组成；化石碳比例；氧化假设；设备；批次或期间 | 优先采用代表性直接实测；否则按采集燃料和有记录的场址特定组成与假设计算 | kg | 监测区间或燃料账单期，按月汇总 | 与燃料清单相同期间 | 可归属于已声明产品的全部场内天然气燃烧 | 将计算或实测化石源二氧化碳与天然气消耗核对，并按合格产出质量归一化 | 监测 QA；分析仪校准；供应商组成；计算工作簿；独立质量平衡复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_count_to_mass` | 以件数记录的参考产品 | 合格产品质量 = 合格件数 × 批次实测平均单件净质量 | 合格件数；抽样净质量；样本量；批次标识 | 合格产品 kg |  |
| `calc_active_sodium_hydroxide` | 供应的氢氧化钠溶液 | 有效氢氧化钠 = 溶液质量 × 经核实的氢氧化钠质量分数 | 溶液质量；浓度证书或分析 | 氢氧化钠 kg |  |
| `calc_inventory_normalization` | 每项前景交换 | 归一化数量 = 分配后的交换数量 ÷ 合格参考产品净质量 | 分配后的交换数量；合格产出质量 | 每 1 kg 参考产品的交换数量 |  |
| `calc_fossil_carbon_dioxide` | 场内天然气燃烧 | 采用基于经修正燃料数量、供应商组成或实测碳含量、化石碳比例和氧化假设的有记录场址计算；不得把结果用于上游电力 | 经修正气体体积；气体组成或碳含量；化石比例；氧化假设 | 每 1 kg 参考产品的直接化石源二氧化碳 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别一个零件族并保留图样或零件号、材料规格、完工状态、适配灯型和验收准则；不得发布未指定类别平均数据。 | 已放行图样或规格；材料清单；检验放行 |
| `dq_temporal_representativeness` | 前景清单 | 采用覆盖季节或生产活动变化的连续代表性报告期；说明停机、异常批次及不足 12 个月的期间。 | 有日期的生产、公用事业、库存和废物记录 |
| `dq_mass_reconciliation` | 材料、产品、废料和湿法处理流 | 按材料族核对投入、合格产出、内部退料、库存变化和外运废物，并调查重大无法解释差异。 | 签署的质量平衡表；盘点；称重单；差异调查 |
| `dq_technology_and_geography` | 外购数据集 | 尽可能匹配投入状态、牌号、生产技术、地理、电压或压力等级、再生含量基准和参考年份，并披露替代。 | 供应商数据；数据集元数据；替代清单 |
| `dq_completeness` | 前景过程 | 检查每个原子行及设施环境和废物台账；只有证据支持时才标记条件行不适用，并增加场址实际存在的任何其他具体交换。 | 完整性检查表；环境台账；化学品清单；废物联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_qualifiers` | 参考流 | 缺少零件族、材料或组成、图样或零件号、完工状态、适配灯型、生产地理、技术、参考年份或包装配置时，校验失败。 | `eu-cn-explanatory-notes-2000-8539` |
| `validate_reference_mass` | 参考流和清单 | 确认参考输出恰为合格产品净质量 1 kg，且所有交换均按此质量归一化，销售包装不计入产品质量。 |  |
| `validate_atomicity` | 过程清单 | 确认每行表示一个具体产品、废物或基本流交换；拒绝合并公用工程、通用材料或废物以及选择器标签。 |  |
| `validate_uuid_semantics` | 含 UUID 的行 | 确认天工状态码 100 的流类型、基础名称、分类、属性、单位组、产品状态、地理、技术和 generalComment；不得用代理替代未解决行。 |  |
| `validate_material_balance` | 材料路线 | 将每项已声明玻璃或金属投入与合格产品、库存变化、已核实内部退料及每项材料特定外运废物核对，并调查无法解释差异。 |  |
| `validate_energy_and_emissions` | 能源和直接排放 | 将电力和每种气体分别与仪表或账单核对；使用场内天然气时，将直接化石源二氧化碳与燃料记录核对，并将任何其他直接排放记录为独立原子流。 |  |
| `validate_conditional_rows` | 路线特定投入和输出 | 每项“不适用”决定均需证据，并确保选取的行匹配已声明零件材料和制造技术，且不构造“变体×路线”的笛卡尔清单。 |  |
| `validate_source_and_period` | 数据集证据 | 确认来源可解析、前景记录覆盖已声明期间和场址；未经两项独立且边界相容的原文来源核验，不得声明外部经验范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 带有上游投入关联的前景门到门生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在必需限定信息、边界、技术、地理和参考年份相容时，用于已声明 CPC 46541 灯用零件的产品特定从摇篮到工厂大门建模 |
| excluded_use | 完整灯、灯具、LED 产品、自备电源手提灯零件、未指定混合灯用零件、使用阶段性能、生命周期终结，或在没有新前景清单时替代玻璃与金属零件族 |
| required_metadata | PCR id 和版本；零件族；图样或零件号；材料和组成；完工状态；适配灯技术；功能和质量规格；生产路线；设施地理；技术；参考期；净质量基准；包装；上游数据集标识；分配；内部循环；数据所有者和复核日期 |
| required_quality_disclosure | 计量和称量覆盖；件数转质量抽样；记录覆盖；分配驱动因子；质量平衡结果；条件行决定；未解决 UUID；数据集替代；截断；异常期间；不确定性；验证状态 |
| update_trigger | 零件设计或材料、工艺技术、能源或气体供应、清洗化学品、废料或废液路线、包装、设施地理、分配驱动因子、供应商数据集、参考期、天工 UUID 解析或实质改变清单的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（核验于 2026-09-04） | CPC 46541 正式身份和层级 |
| `unsd-cpc-1-1-zh-2007` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类（CPC）版本1.1》，ST/ESA/STAT/SER.M/77/Ver.1.1，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（核验于 2026-09-04） | 稳定 46541 产品概念的专业中文表述 |
| `eu-cn-explanatory-notes-2000-8539` | 官方指南（`official_guidance`） | 欧洲委员会，《组合命名法解释性说明》，品目 8539，Official Journal C 199，2000-07-13，https://eur-lex.europa.eu/resource.html?format=PDF&uri=cellar%3A775740e4-ebfb-4d08-888b-cb13caba979b.0005.02%2FDOC_86（核验于 2026-09-04） | 可识别零件边界、涵盖零件示例和排除项 |
| `us-epa-mercury-study-volume-2-1997` | 官方指南（`official_guidance`） | 美国环境保护署，Mercury Study Report to Congress, Volume II: An Inventory of Anthropogenic Mercury Emissions in the United States，EPA-452/R-97-004，1997-12，https://www.epa.gov/sites/production/files/2015-09/documents/volume2.pdf（核验于 2026-09-04） | 灯用组件接口和制造工序分解；未采用定量范围 |
| `imerc-mercury-use-in-lighting-2008` | 官方指南（`official_guidance`） | Interstate Mercury Education and Reduction Clearinghouse，Fact Sheet: Mercury Use in Lighting，2008-01，https://semspub.epa.gov/work/05/936142.pdf（核验于 2026-09-04） | 荧光灯零件的组件身份和功能关系；未采用定量范围 |
