---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-centrifuges-including-centrifugal-dryers-parts-of-filtering-or-purifying-machi-9224f4f0
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 离心机（包括离心式干燥机）零件；液体或气体过滤或净化机器及装置零件

## 1. 范围与适用性

本 PCR 适用于专用于离心机（包括离心式干燥机）或液体、气体过滤或净化机器及装置的成品零件在工厂大门处的生产。零件须通过图纸、规范或等效技术说明加以识别，并作为独立产品供应。

完整离心机和完整过滤或净化机器，以及非专用紧固件、电动机、泵、仪器和控制装置不在范围内。安装、使用、维护和寿命终结阶段不在范围内。本 PCR 可用于金属及聚合物零件；连接、表面处理和包装交换仅按实际路线纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-centrifuges-including-centrifugal-dryers-parts-of-filtering-or-purifying-machi-9224f4f0` |
| classification_refs | CPC 3.0: 43942 |
| covered_products | 专用于离心机、离心式干燥机或液体/气体过滤或净化机器及装置，并作为独立产品供应的成品零件。 |
| excluded_products | 完整机器；非专用通用部件；安装、使用、维护及寿命终结服务。 |
| representative_product | 可从制造场址出厂的合格金属或聚合物成品机械零件。 |
| production_route | 接收材料或预制件；机加工或成形及清洗；条件性连接和表面处理；终检、测试与包装。 |
| market_state | 工厂大门处已完成、清洁并检验的零件，具有规定涂层和出货包装（如适用）。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供专用于离心机或液体/气体过滤或净化机器的合格成品零件。 |
| How much | 1 kg 成品零件净质量，不含出货包装。 |
| How well | 符合声明的图纸/规范、材料牌号、尺寸、表面状态及适用的平衡、洁净度、泄漏或性能准则。 |
| How long or cycle | 在工厂大门处交付的一个生产批次；不主张使用寿命等同性。 |
| reference_flow_link | 功能单位由 1 kg 成品参考产品输出实现。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 离心机或过滤/净化机械成品零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件类型及适用机器/用途；图纸或规范版本；材料牌号和组成；成品净质量和主要尺寸；适用的压力、温度及化学相容性等级；表面处理或涂层；适用的平衡、洁净度、泄漏或过滤性能验收测试；制造场址及地理范围；再生含量声明及核算方法；出货包装配置；生产期 |

构建前景数据包时，所有必需限定信息均须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按最终加工后的净干质量计量，扣除出货包装，并将交换归一化至 1 kg 合格输出。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按过程记录交付电力；kWh 乘以 3.6 换算为 MJ，并披露共用电表分配。 |
| `water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量；按体积计量时，使用测量条件下有文件依据的密度，并保留原始体积。 |
| `gas_volume` | 天然气或氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 对交付气体体积声明压力、温度及标准/参考状态换算。 |
| `material_and_waste_mass` | 材料、包装及废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用过程边界处的净质量；水分或溶液浓度具有实质影响时须声明。 |
| `shared_meter_allocation` | 共用仪表或账单 | 相应流属性 | 相应流单位 | 优先分表计量；否则采用实测因果驱动因素并披露计算。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | 纳入材料或预制件接收、切割/成形/机加工、过程内清洗、条件性连接和表面处理、最终清洗/检验/测试及出货包装，直至制造场址大门放行。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `boundary_upstream_inputs` | purchased_product_inputs | 每项外购材料、化学品、燃料、电力和包装均链接匹配的上游数据集；不得将上游排放计入直接排放行。 |  |
| `boundary_conditional_routes` | joining_and_surface_treatment | 仅当边界内实际实施时，纳入连接、气体、化学处理、漂洗、废水和污泥；不适用声明须有路线证据。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `boundary_exclusions` | downstream_and_capital_activities | 排除声明零件生产者之外的整机装配、安装、使用、维护和寿命终结；披露资本设备处理。 |  |
| `boundary_direct_emissions` | foreground_emissions | 仅报告实测或计算的场址直接排放，并避免与上游供应排放重复。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、预制件或部件在零件制造场址接收，并已识别质量、牌号、供应商及上游数据集。 |
| starting_condition_role | 从摇篮到工厂大门的前景入口条件。 |
| product_classification_scope | CPC 3.0 代码 43942 范围内的专用零件；完整机器仍在边界之外。 |
| recursive_input_rule | 若外购投入本身为本类别专用零件，则作为明确产品投入并链接上游零件数据集，不在同一前景过程中递归复现其制造。 |
| upstream_dataset_requirement | 匹配材料牌号/组成、路线、产品状态、地理范围及期间；记录替代和再生含量建模。 |
| disclosure | 声明接收状态、自制/外购边界、所含路线步骤、外包步骤、场址/地理范围、期间及包装边界。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication` | 材料准备、成形/机加工与清洗 | `required` | 始终纳入所接收坯料或预制件的前景转换。 | 核心材料转换。 | kg 合格已制造零件 |
| `joining_assembly` | 连接与分总成 | `conditional` | 采用边界内焊接或连接时纳入。 | 连接已制造件。 | kg 已连接零件 |
| `surface_treatment` | 表面处理、漂洗与干燥 | `conditional` | 采用边界内化学、电化学或燃料加热处理时纳入。 | 形成规定表面状态。 | kg 已处理零件 |
| `final_testing_packaging` | 终检、测试与包装 | `required` | 始终纳入最终验收和放行；包装行仅在实际存在时适用。 | 产生参考产品。 | 1 kg 成品零件 |

### 过程：材料准备、成形/机加工与清洗（`part_fabrication`）

#### 输入

##### 产品流

###### 不锈钢薄板（`stainless_steel_sheet`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：不锈钢薄板
- 流属性/单位：Mass / kg
- 数量规则：按牌号记录净领用质量，扣除有凭证的退库量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 碳钢厚板（`carbon_steel_plate`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：碳钢厚板
- 流属性/单位：Mass / kg
- 数量规则：按牌号记录钢板净领用质量，扣除有凭证的退库量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 铝板材（`aluminium_sheet`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：按合金牌号记录板材净领用质量，扣除有凭证的退库量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 聚丙烯粒料（`polypropylene_granulate`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：记录干树脂投料质量，扣除同一过程中有凭证的洁净回用料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：

###### 切削液（`cutting_fluid`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：记录采购或槽体补加的消耗质量；稀释液须声明浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 制造用电（`fabrication_electricity`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按分表计量或因果驱动分配，并依 `electricity_energy` 换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 制造工艺用水（`fabrication_process_water`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：记录进入过程的计量水量或批次加水量，必要时依 `water_mass` 换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废钢（`scrap_steel`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：记录转入废物管理的净计量铁质废料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 铝废料（`aluminium_scrap`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：记录转入废物管理的净计量铝废料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 废切削油（`waste_cutting_oil`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：记录转入废物管理的废切削油净质量，并披露含水率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 清洗废水（`cleaning_wastewater`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：记录进入处理的计量或槽容推算废水质量，扣除经核实的循环量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 基本流

###### 制造颗粒物排放（`fabrication_particulate_air`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：记录控制设施后的实测或计算直接排放；截留粉尘作为废物另计。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_part_fabrication`
- 来源：`us-epa-fabricated-metal-products-1995`

### 过程：连接与分总成（`joining_assembly`）

#### 输入

##### 产品流

###### 药芯焊丝（`flux_cored_wire`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：记录焊丝领用量或送丝机消耗量，扣除有凭证的未用退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joining_assembly`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 工业氧气（`industrial_oxygen`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考状态记录瓶装交付量或散装计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joining_assembly`
- 来源：

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：按供应记录或钢瓶质量差分配至焊接批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joining_assembly`
- 来源：

###### 连接用电（`joining_electricity`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按分表计量或因果驱动分配，并依 `electricity_energy` 换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joining_assembly`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：表面处理、漂洗与干燥（`surface_treatment`）

#### 输入

##### 产品流

###### 氢氧化钠（`sodium_hydroxide`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：溶液质量乘以声明的有效质量分数；若上游按供应溶液建模则保留溶液基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

###### 硫酸（`sulfuric_acid`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：溶液质量乘以声明的有效质量分数；若上游按供应溶液建模则保留溶液基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

###### 表面处理工艺用水（`surface_treatment_process_water`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：记录补加水和漂洗水，扣除经核实的闭路循环量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

###### 表面处理用电（`surface_treatment_electricity`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按分表计量或因果驱动分配，并依 `electricity_energy` 换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

###### 天然气（`natural_gas`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考状态记录用于边界内加热的交付计量体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 表面处理废水（`surface_treatment_wastewater`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：记录进入处理的计量或槽容推算排放量，扣除回用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

###### 含金属表面处理污泥（`metal_bearing_treatment_sludge`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：含金属表面处理污泥
- 流属性/单位：Mass / kg
- 数量规则：记录转入废物管理的湿质量，并声明干固体和金属含量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

###### 表面处理燃料产生的化石二氧化碳（`surface_treatment_fossil_co2`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：计量燃料量乘以披露的含碳量/排放因子和氧化因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment`
- 来源：`ec-jrc-stm-bref-2006`

### 过程：终检、测试与包装（`final_testing_packaging`）

#### 输入

##### 产品流

###### 终检与测试用电（`final_electricity`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按分表计量或因果驱动分配，并依 `electricity_energy` 换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_testing_packaging`
- 来源：

###### 瓦楞纸箱（`corrugated_board_boxes`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：纸箱净质量乘以使用数量，再按合格装运产品质量分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_testing_packaging`
- 来源：

###### 聚乙烯包装膜（`polyethylene_packaging_film`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：记录合格出货零件实际消耗的包装膜净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_testing_packaging`
- 来源：

###### 木托盘（`wooden_pallet_euro`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：托盘质量除以声明使用次数和所承载合格产品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_testing_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品机械零件（`finished_machinery_part`）

仅在该原子交换跨越声明的前景过程边界时记录。

- 选定流：离心机或过滤/净化机械成品零件
- 流属性/单位：Mass / kg
- 数量规则：固定为返工和报废处理后 1 kg 净合格输出，不含包装。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 1 kg 成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_final_testing_packaging`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separable_products_and_processes | 首先按产品线、零件族、批次和过程步骤细分，使可直接归属的交换无需分配。 |  |
| `allocation_physical_driver` | inseparable_shared_operations | 无法直接计量时，采用机器工时、处理面积、焊缝长度、槽负荷或加工质量等实测因果驱动因素，并披露敏感性。 |  |
| `allocation_scrap` | recyclable_scrap_and_waste | 在前景边界记录废料和废物，不在本数据集内给予避免负担抵扣；在下游披露回收约定。 |  |
| `allocation_packaging_reuse` | reusable_pallets | 托盘制造负担除以有凭证的预计使用次数，将损失归于报告期，并测试重要复用假设。 |  |
| `allocation_no_mass_only_default` | heterogeneous_part_families | 加工强度差异显著时，不得未经论证即按成品质量分配；须与因果驱动因素比较并说明。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_part_fabrication` | `part_fabrication` | 所列投入、废物及颗粒物 | 领退料、仪表、废物及排放记录 | 材料/牌号、领退质量、仪表读数、分配驱动、废物质量、排放方法、输出质量 | 将 ERP/仓储记录、仪表、废物联单及控制记录与批次核对。 | kg; MJ | 每批或每月 | 12 个代表性连续月或完整生产期 | 所有边界内制造设备 | 汇总净交换并除以合格输出；防止循环量重复计入。 | 发票、领料单、校准、废物票据及核对记录 |
| `cp_joining_assembly` | `joining_assembly` | 焊丝、气体及电力 | 送丝、钢瓶、散装气体及电力记录 | 焊丝领退、气量/状态、仪表、焊接批次、输出 | 按批采集，或按焊接时间/长度分配核对后的总量。 | kg; m3; MJ | 连接批次或每月 | 与参考产品相同期间 | 所有边界内连接工位 | 净消耗除以采用该路线的合格输出。 | 送丝、供应、气体及电力记录 |
| `cp_surface_treatment` | `surface_treatment` | 化学品、水、能源、废水、污泥及 CO2 | 槽液、仪表、排放及废物记录 | 产品质量/浓度、仪表、排放、污泥、因子、处理输出 | 将槽液日志和公用工程与废水/污泥转移及处理输出核对。 | kg; m3; MJ | 槽液周期或每月 | 同期并包含倒槽事件 | 边界内处理及废水设备 | 直接归属或采用处理面积/槽负荷；计算有效化学品和 CO2。 | 槽液分析、校准、联单及因子记录 |
| `cp_final_testing_packaging` | `final_testing_packaging` | 最终用电、包装及参考输出 | 测试、仪表、BOM、称量及出货记录 | 合格/不合格质量、仪表、包装质量/数量、复用、测试、出货 | 将合格输出与处置及包装领用核对。 | kg; MJ | 每批或每次出货 | 相同期间 | 终检测试及包装区 | 归一化至 1 kg 净合格输出；输出质量不含包装。 | 秤、仪表、验收及出货记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all rows | 归一化量 = 报告期边界交换量 / 成品净合格质量 | 交换量；合格质量 | 每 1 kg 成品的量 |  |
| `calc_electricity_kwh_to_mj` | electricity rows | MJ = 计量 kWh × 3.6 | kWh | MJ |  |
| `calc_active_chemical` | sodium hydroxide and sulfuric acid | 有效质量 = 溶液质量 × 有效质量分数；上游要求时保留溶液基准 | 溶液质量；浓度 | kg 有效化学品或供应溶液 | `ec-jrc-stm-bref-2006` |
| `calc_fossil_co2` | `surface_treatment_fossil_co2` | 直接化石 CO2 = 燃料量 × 披露因子 × 氧化因子 | 燃料；因子；氧化率 | kg 化石 CO2 |  |
| `calc_mass_reconciliation` | fabrication and final output | 坯料投入 = 合格输出 + 实测废物 + 库存变化 + 已调查残差 | 坯料；输出；废物；库存 | 残差 | `us-epa-fabricated-metal-products-1995` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 按零件族保存图纸版本、功能、材料牌号、质量、表面状态及测试准则。 | 图纸、BOM、材质证书及验收记录 |
| `dq_temporal` | foreground data | 采用共同代表期，并纳入倒槽、维护废物和不合格品。 | 有日期的生产、公用工程、采购及废物记录 |
| `dq_measurement` | measured exchanges | 识别仪表/秤、校准、频率、估算占比及换算。 | 校准证书、仪表日志及工作簿 |
| `dq_completeness` | inventory | 每项条件行须声明已记录或不适用；采购材料和废物按质量至少覆盖 95%，并调查残差。 | 检查表及质量核对 |
| `dq_geography_technology` | upstream links | 匹配地理、技术、材料状态及再生含量；记录代理且不改变 UUID 身份。 | 供应商记录及数据集选择日志 |
| `dq_uncertainty` | allocated/calculated values | 报告分配份额、变异性及假设；测试重要共用负担和托盘复用。 | 分配工作簿及敏感性结果 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | foreground_dataset_conformance | 确认产品是独立供应的专用零件，而非完整机器或非专用部件。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_flow` | foreground_dataset_conformance | 确认 1 kg 净合格输出、不含包装且具备全部必需限定信息。 |  |
| `validation_route_completeness` | foreground_dataset_conformance | 每项条件性连接、表面处理及包装行均已量化，或有不适用依据。 | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `validation_atomic_inventory` | foreground_dataset_conformance | 每张卡仅含一个交换及其规定属性/单位，不得使用伞形流。 |  |
| `validation_uuid_and_units` | foreground_dataset_conformance | 已填 UUID 保持审计的流类型、正式名称、属性及单位组；未解决行不得静默使用代理。 |  |
| `validation_mass_and_allocation` | foreground_dataset_conformance | 核对投入、输出、废物及库存变化，并披露共用分配。 | `us-epa-fabricated-metal-products-1995` |
| `validation_no_double_counting` | foreground_dataset_conformance | 直接颗粒物及化石 CO2 仅含场址排放，不与上游排放重复。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 按成品零件质量归一化的产品特定或零件族前景从摇篮到工厂大门数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 零件身份、材料、路线、地理、期间及包装与应用相匹配的建模。 |
| excluded_use | 表示完整机器；无功能等同性的使用阶段比较；不同材料或处理间未经限定的替代。 |
| required_metadata | PCR id；图纸版本；CPC 参考；场址/地理；期间；净质量；材料牌号；自制/外购及外包边界；表面/测试准则；再生含量方法；包装；上游数据集；分配。 |
| required_quality_disclosure | 初级数据占比；测量/估算；仪表分配；完整性和质量平衡；路线适用性；未解决 UUID；代理；不确定性。 |
| update_trigger | 材料、供应路线、技术、场址/电网/燃料、处理、验收、包装、分配或期间变化且对清单有实质影响。 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0 Structure》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（访问日期：2026-09-06）。 | CPC 43942 的精确标题及类别身份。 |
| `us-epa-fabricated-metal-products-1995` | 正式指南（`official_guidance`） | 美国环境保护署，《EPA Office of Compliance Sector Notebook Project: Profile of the Fabricated Metal Products Industry》，1995 年 9 月。https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf（访问日期：2026-09-06）。 | 制造、机加工、清洗与精整的投入/产出，包括废金属、油、废水及大气排放。 |
| `ec-jrc-stm-bref-2006` | 正式指南（`official_guidance`） | 欧盟委员会联合研究中心，《Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics》，2006 年 8 月。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（访问日期：2026-09-06）。 | 表面处理边界、化学品和能源投入、漂洗水、废水及污泥。 |
