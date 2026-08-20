---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.yeasts-active-or-inactive-other-single-cell-micro-organisms-dead-prepared-baking-powders
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 酵母（活性或非活性）；其他单细胞微生物（已死亡）；配制发酵粉

## 1. 范围与适用性

本 PCR 支持 CPC 3.0 子类 23996 范围内产品的前景数据包：活性或非活性酵母、作为产品销售的其他已死亡单细胞微生物，以及配制发酵粉。每个数据包应表示一个明确声明的产品族、配方或微生物、生命状态、物理形态、等级、生产路线和工厂门市场状态，不得把实质不同的产品合并为未说明的类别平均值。

Tiangong flow `dried yeast` 是本 PCR 的代表产品和物理形态，而不是 CPC 23996 全部产品的通用身份。实际产品为鲜酵母或膏状酵母、非活性酵母、其他已死亡单细胞微生物、配制发酵粉或其他不匹配形态时，数据生产者应替换为更准确的 Tiangong 产品流，绝不能把代表 UUID 静默保留给不同产品。

前景边界覆盖报告设施直接控制的作业，从采购物料、培养物、配料、公用工程和包装进入设施，直到形成所声明的工厂门产品。根据所声明路线，可包括微生物培养、回收、灭活、干燥和整理，或发酵粉配料处理、混合、质量控制、包装和场内处理。采购投入的上游生产和产品的下游使用通过链接数据集表示，不吸收到前景清单中。

排除烘焙食品和面团产品、发酵服务、未构成配制发酵粉而单独销售的碳酸氢盐或酸反应配料、CPC 23996 以外的产品、研究目标未要求的资本品，以及未明确纳入范围的下游配送、使用或寿命终结。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.yeasts-active-or-inactive-other-single-cell-micro-organisms-dead-prepared-baking-powders |
| classification_refs | CPC 3.0: 23996 |
| covered_products | 活性或非活性酵母；作为产品销售的其他已死亡单细胞微生物；配制发酵粉 |
| excluded_products | CPC 23996 以外的产品；下游烘焙食品或发酵服务；单独销售的发酵粉配料；除非明确纳入，否则排除下游使用和寿命终结 |
| representative_product | 干酵母，仅代表所声明的干酵母形态；Tiangong 记录为饲料级，只有身份匹配时才具有代表性 |
| production_route | 路线特定的微生物培养、回收、灭活和/或干燥；或配制发酵粉的干配料接收、计量、混合和包装 |
| market_state | 一个明确声明的工厂门产品，并说明生命状态、形态、水分或干物质基准、等级、适用时的配方以及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供所声明的 CPC 23996 酵母、已死亡单细胞微生物或配制发酵粉 |
| How much | 1 kg 合格声明产品的净质量 |
| How well | 满足产品身份、活性或死亡/非活性状态、物理形态、水分或干物质、等级、适用时的配方及包装状态的声明规格 |
| How long or cycle | 一个生产批次或报告期的工厂门产出；不暗含使用阶段持续时间 |
| reference_flow_link | `packaging_and_dispatch` 的参考产品输出，归一化至 1 kg 声明产品净质量 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 工厂门 1 kg 声明产品净质量 |
| Reference product flow | dried yeast, feed-grade `3ea5b163-5e50-4f40-bf13-8a6c3f10d1b6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 产品族；适用时的微生物和菌株；活性、非活性或死亡状态；产品形态；水分或干物质基准；等级和预期用途；适用时的配方或配料类别；生产路线；地理；技术和报告期；包装状态；精确 Tiangong flow 匹配决定 |

构建前景数据包时，所有必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。只有声明产品确实匹配干酵母、饲料级身份时才可保留 `dried yeast` UUID。对于其他产品或形态，应在存在时使用更准确的真实 flow；不存在时应显式保留身份缺口，不得用代表 UUID 掩盖。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单归一化至工厂门 1 kg 合格声明产品净质量。 |
| `net_mass_excludes_packaging` | 参考产品和包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg 参考数量不含包装质量，包装作为独立清单投入记录。 |
| `moisture_basis_disclosure` | 湿态、膏状、压缩、干燥或粉末微生物产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录销售状态质量和水分或干物质分数。湿基与干基之间只能根据产品特定实测值换算，并保留计算。 |
| `formulation_mass_basis` | 配制发酵粉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各配方配料采用一致的接收状态质量基准，并核对配料、产品、废物和库存变化质量。 |
| `representative_flow_match` | 产品流身份 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 代表干酵母 UUID 仅用于匹配的干酵母、饲料级产品；否则替换为最接近且已核验的真实产品流并披露决定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购基质、培养物、配料、加工助剂、公用工程和包装以有记录的接收状态进入报告设施。 |
| starting_condition_role | 前景制造入口；上游生产保留在链接的供应商或背景数据集中。 |
| product_classification_scope | CPC 3.0 子类 23996，但每个数据包只表示一个具体声明的产品和路线。 |
| recursive_input_rule | 本身属于 CPC 23996 的采购投入仍作为可见产品投入链接到独立上游数据集；不得在同一前景过程中递归吸收，也不得改标为代表 UUID。 |
| upstream_dataset_requirement | 所有实质性采购基质、配料、培养物、营养物、公用工程、包装材料和外部处理废物均链接到地理、时间、技术和产品形态适当的数据集。 |
| disclosure | 声明实际产品族、生命状态、配方或微生物、物理形态、水分基准、等级、生产路线、报告期、设施覆盖、包装状态、排除作业、同类投入和产品流替换决定。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_specific_operations` | 前景制造 | 纳入从投入接收到声明工厂门产品的所有适用受控作业。微生物产品可包括培养物和进料准备、好氧培养、回收、灭活、干燥和整理；配制发酵粉包括配料接收、计量、混合、质量控制和包装。 | `us-epa-ap42-yeast-1995`; `canada-cfcs-baking-powder` |
| `boundary_upstream_links` | 采购投入和服务 | 将采购物料、培养物、配料、能源、供水、包装、运输服务和外部处理保留为显式投入并链接适当上游数据集；不得仅因不受直接运营控制而省略实质性投入。 | `iso-14044-2006`; `eu-commission-pef-2021` |
| `boundary_direct_releases` | 直接排放和废物 | 使用设施记录记录适用发酵、分离、干燥、粉体处理、清洗和废水作业的直接排放及处理转移；无默认因子不构成零排放证据。 | `us-epa-ap42-yeast-1995`; `iso-14044-2006` |
| `boundary_category_not_route_average` | 产品和路线选择 | 只纳入适用于声明产品的过程模块。不得在没有明确匹配时，将干酵母过程、生命活性假设或参考 UUID 用于非活性酵母、其他已死亡单细胞微生物或配制发酵粉。 | `un-cpc-v3-23996` |
| `boundary_packaging_and_dispatch` | 工厂门市场状态 | 包装和发运准备属于声明市场状态时予以纳入；包装质量独立于产品净质量，并披露任何有意的包装排除。 | `eu-commission-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_preparation` | 原料、配料或培养物准备 | required | 始终纳入；采用路线特定的准备步骤和投入 | 前景投入接收、储存、计量、准备、澄清或卫生处理 | 转移到下一适用过程的已准备进料、配料组合或物料质量 |
| `microbial_biomass_production` | 微生物培养或繁殖 | conditional | 声明的酵母或单细胞产品在报告设施培养时纳入 | 前景生物生产 | 转移到回收过程的培养液或培养产出质量 |
| `biomass_recovery_and_finishing` | 生物质回收、灭活、干燥和整理 | conditional | 微生物产品发生分离、杀灭/灭活、浓缩、挤出、干燥、研磨或整理时纳入 | 前景回收和产品形态形成 | 转移到包装的成品微生物产品质量 |
| `baking_powder_formulation` | 配制发酵粉配方生产 | conditional | 声明产品为配制发酵粉时纳入 | 前景计量、混合、质量控制和散装整理 | 转移到包装的合格配制发酵粉质量 |
| `packaging_and_dispatch` | 包装和工厂门发运 | required | 始终纳入；不使用包装时显式记录散装交付 | 形成声明的工厂门市场状态 | 发运的合格声明产品净质量 |

### 过程：原料、配料或培养物准备（`raw_material_preparation`）

#### 输入

##### 产品流

###### 声明的主要物料（`raw_primary_materials`）

记录所选路线全部接收状态主要物料：微生物生产的培养物、碳源、营养物和加工助剂，或配制发酵粉的碳酸氢盐、酸反应物、淀粉或其他中性载体。

- 选定流：路线特定的采购主要物料
- 流属性/单位：Mass / kg
- 数量规则：投入批次或报告期的实测接收状态质量，并校正有记录的退回和库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门声明产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_preparation`
- 来源：`us-epa-ap42-yeast-1995`; `canada-cfcs-baking-powder`

###### 准备用水（`raw_preparation_water`）

记录跨越前景边界、进入稀释、清洗、澄清、卫生处理或其他路线特定准备作业的用水。

- 选定流：过程用水
- 流属性/单位：Mass or volume / kg or m3，必要时以实测密度换算
- 数量规则：可归属于本过程的计量或批次记录水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门声明产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_preparation`
- 来源：

###### 准备过程能源（`raw_preparation_energy`）

记录接收、储存、计量、溶解、澄清、灭菌、卫生处理和配料操作使用的采购电力及热能载体。

- 选定流：按载体区分的采购电力和热能载体
- 流属性/单位：Energy / 电力用 kWh，热能用 MJ 或燃料特定实物单位
- 数量规则：适用准备作业的计量能源或有依据的分配能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门声明产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_preparation`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备的路线进料或配料组合（`prepared_route_material`）

记录转移到培养、回收或配方过程的已准备物料，不将该中间物视为参考产品。

- 选定流：路线特定的已准备进料或配料中间物
- 流属性/单位：Mass / kg
- 数量规则：按批次或报告期计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位转移到下一适用过程的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_preparation`
- 来源：

##### 废物流

###### 准备残余物和废水（`raw_preparation_waste`）

按去向和处理路线分别记录不合格配料、澄清残余物、清洗废水和其他准备废物。

- 选定流：路线特定的准备废物或废水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按废物类型和去向称重、计量或转移单据记录的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门声明产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_material_preparation`
- 来源：

##### 基本流

### 过程：微生物培养或繁殖（`microbial_biomass_production`）

#### 输入

##### 产品流

###### 已准备培养进料和接种物（`cultivation_feed_and_inoculum`）

记录培养中实际使用的已准备碳源、接种物、营养物、维生素、pH 调节剂和其他产品投入。

- 选定流：产品特定的培养进料、接种物、营养物和添加剂
- 流属性/单位：Mass / kg
- 数量规则：批次或报告期物料领用记录，并与退回和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 培养液或培养产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_biomass_production`
- 来源：`us-epa-ap42-yeast-1995`

###### 培养用水（`cultivation_water`）

记录培养过程和清洗用水；在有计量时区分留在产品中的水与废水。

- 选定流：过程用水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量或批次记录的培养及清洗水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 培养液或培养产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_biomass_production`
- 来源：`us-epa-ap42-yeast-1995`

###### 曝气和培养能源（`cultivation_energy`）

按实际载体记录曝气、搅拌、泵和控制系统用电，以及灭菌或温控用热能。

- 选定流：按载体区分的采购电力和热能载体
- 流属性/单位：Energy / kWh or MJ
- 数量规则：培养过程计量用量或有依据的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 培养液或培养产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_biomass_production`
- 来源：`us-epa-ap42-yeast-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 培养液或湿生物质（`cultivation_biomass_output`）

记录转移到回收过程的培养液或湿生物质质量及固形物或干物质含量。

- 选定流：产品特定的培养液或湿生物质
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量及实测固形物或干物质分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个培养批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_biomass_production`
- 来源：`us-epa-ap42-yeast-1995`

##### 废物流

###### 培养废水和废弃培养液（`cultivation_wastewater`）

按处理去向记录排放或处理的培养液、清洗液和其他培养废水。

- 选定流：培养废水或废弃培养液
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量排放量或处理转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 培养液或培养产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_biomass_production`
- 来源：`us-epa-ap42-yeast-1995`

##### 基本流

###### 培养过程直接二氧化碳（`cultivation_carbon_dioxide`）

按照声明的碳核算方法记录培养直接释放的生物源或化石二氧化碳；不得因缺少默认数据而推定为零。

- 选定流：Carbon dioxide to air，并声明 fossil 或 biogenic 身份
- 流属性/单位：Mass / kg
- 数量规则：场址测量或基于采集前景记录的批准碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 培养液或培养产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_microbial_biomass_production`
- 来源：`us-epa-ap42-yeast-1995`

###### 培养过程直接挥发性有机物（`cultivation_voc`）

适用时记录设施特定 VOC 释放。EPA AP-42 指出设施和批次间差异较大，因此未经明确适用性审查，其因子不得替代场址记录。

- 选定流：与产品和司法辖区相符的 VOC to air 基本流
- 流属性/单位：Mass / kg
- 数量规则：按报告期测量或经设施批准计算的释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 培养液或培养产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_biomass_production`
- 来源：`us-epa-ap42-yeast-1995`

### 过程：生物质回收、灭活、干燥和整理（`biomass_recovery_and_finishing`）

#### 输入

##### 产品流

###### 培养液或湿生物质投入（`recovery_biomass_input`）

记录进入过程的微生物中间物，并实测质量和固形物或干物质含量。

- 选定流：产品特定的培养液或湿生物质
- 流属性/单位：Mass / kg
- 数量规则：与培养输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品微生物产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biomass_recovery_finishing`
- 来源：`us-epa-ap42-yeast-1995`

###### 回收和整理助剂（`recovery_finishing_aids`）

仅在实际使用时记录水、乳化剂、切割油、载体、抗结剂和其他助剂，并披露产品特定功能。

- 选定流：产品特定的回收和整理助剂
- 流属性/单位：Mass / kg
- 数量规则：批次领用或计量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品微生物产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biomass_recovery_finishing`
- 来源：`us-epa-ap42-yeast-1995`

###### 回收和干燥能源（`recovery_drying_energy`）

按载体记录离心、过滤、灭活、挤出、干燥、研磨、冷却及其他适用整理作业的电力和热能。

- 选定流：按载体区分的采购电力和热能载体
- 流属性/单位：Energy / kWh or MJ
- 数量规则：适用作业的计量用量或有依据的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品微生物产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biomass_recovery_finishing`
- 来源：`us-epa-ap42-yeast-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品微生物产品（`finished_microbial_product`）

记录处于声明销售形态的合格活性或非活性酵母或其他已死亡单细胞微生物产品，并附水分或干物质及生命状态证据。

- 选定流：产品特定的成品微生物产品
- 流属性/单位：Mass / kg
- 数量规则：转移到包装的实测合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个回收和整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biomass_recovery_finishing`
- 来源：

##### 废物流

###### 回收液体和不合格生物质（`recovery_waste`）

按处理或回收路线分别记录分离液、不合格生物质、过滤残余物、不合格物料和清洗废水。

- 选定流：路线特定的回收废物或废水
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按废物类型称重、计量或转移单据记录的数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品微生物产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biomass_recovery_finishing`
- 来源：`us-epa-ap42-yeast-1995`

##### 基本流

###### 回收和干燥空气排放（`recovery_drying_air_emissions`）

使用设施特定测量或批准计算，记录适用回收和干燥设备的直接粉尘、颗粒物、VOC、燃烧或其他排放。

- 选定流：按污染物区分的 to air 基本流
- 流属性/单位：Mass / kg
- 数量规则：按污染物和报告期测量或经设施批准计算的释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品微生物产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biomass_recovery_finishing`
- 来源：`us-epa-ap42-yeast-1995`

### 过程：配制发酵粉配方生产（`baking_powder_formulation`）

#### 输入

##### 产品流

###### 碳酸氢盐组分（`baking_powder_bicarbonate`）

按供应商、等级和批号记录实际使用的碳酸氢钠或碳酸氢钾配料。

- 选定流：声明配方使用的 sodium or potassium bicarbonate
- 流属性/单位：Mass / kg
- 数量规则：与库存领用记录核对的批次称量投料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格配制发酵粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_baking_powder_formulation`
- 来源：`canada-cfcs-baking-powder`

###### 酸反应组分（`baking_powder_acid_component`）

按化学身份、供应商、等级和批号记录声明配方中的每一种酸反应物。

- 选定流：声明的 acid-reacting material
- 流属性/单位：Mass / kg
- 数量规则：与库存领用记录核对的批次称量投料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格配制发酵粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_baking_powder_formulation`
- 来源：`canada-cfcs-baking-powder`

###### 淀粉或中性载体（`baking_powder_carrier`）

按材料身份、供应商、等级和批号记录声明配方中的淀粉或其他中性材料。

- 选定流：声明的 starch or neutral carrier
- 流属性/单位：Mass / kg
- 数量规则：与库存领用记录核对的批次称量投料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格配制发酵粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_baking_powder_formulation`
- 来源：`canada-cfcs-baking-powder`

###### 配方过程能源（`baking_powder_energy`）

记录输送、筛分、计量、混合、除尘、质量控制和散装转移使用的电力及其他能源。

- 选定流：按载体区分的采购电力和其他能源载体
- 流属性/单位：Energy / kWh or MJ
- 数量规则：计量用量或有依据的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格配制发酵粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_baking_powder_formulation`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格配制发酵粉（`finished_baking_powder`）

记录包装前的合格散装混合物，并附配方标识和产品质量放行证据。

- 选定流：与声明配方匹配的 Prepared baking powder
- 流属性/单位：Mass / kg
- 数量规则：放行到包装的实测合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个配方批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_baking_powder_formulation`
- 来源：`canada-cfcs-baking-powder`

##### 废物流

###### 不合格混合物和收集粉体（`baking_powder_waste`）

按回用、返工、处理或处置去向分别记录不合格混合物、回收粉尘、洒落和清洗残余物。

- 选定流：按去向区分的配制发酵粉生产废物
- 流属性/单位：Mass / kg
- 数量规则：按批次称量的废物、返工或转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格配制发酵粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_baking_powder_formulation`
- 来源：

##### 基本流

###### 粉体操作空气排放（`baking_powder_air_emissions`）

适用时记录治理后的直接颗粒物或配料特定空气排放；除尘记录本身不构成排放为零的证据。

- 选定流：按污染物区分的 to air 基本流
- 流属性/单位：Mass / kg
- 数量规则：按报告期测量或经设施批准计算的释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格配制发酵粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_baking_powder_formulation`
- 来源：

### 过程：包装和工厂门发运（`packaging_and_dispatch`）

#### 输入

##### 产品流

###### 散装合格产品（`bulk_conforming_product`）

记录进入包装或散装发运的合格微生物产品或配制发酵粉。

- 选定流：声明的散装合格产品
- 流属性/单位：Mass / kg
- 数量规则：与适用上游过程输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发运声明产品净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：

###### 包装材料（`packaging_materials`）

按材料和部件分别记录投放市场或发运中消耗的初级、次级和三级包装。

- 选定流：按材料和部件类型区分的包装部件
- 流属性/单位：Mass or item count，以实测部件质量换算 / kg
- 数量规则：采购或领用包装与包装产出、废品、退回和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发运声明产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：`eu-commission-pef-2021`

###### 包装和发运能源（`packaging_dispatch_energy`）

记录灌装、封口、标签、码垛、散装装载、受控储存和工厂门发运准备使用的电力及其他能源。

- 选定流：按载体区分的采购电力和其他能源载体
- 流属性/单位：Energy / kWh or MJ
- 数量规则：计量用量或有依据的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运声明产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门参考产品（`factory_gate_reference_product`）

这是参考输出。所选 Tiangong UUID 只代表干酵母、饲料级。任何不匹配的产品或形态都必须替换，并在数据包中保留产品流身份决定。

- 选定流：干酵母 `3ea5b163-5e50-4f40-bf13-8a6c3f10d1b6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：工厂门 1 kg 合格声明产品净质量；不含包装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：

##### 废物流

###### 包装废品和发运损失（`packaging_dispatch_waste`）

按材料和去向分别记录不合格包装、受损产品、回收产品、洒落和发运准备废物。

- 选定流：按材料和去向区分的包装及发运废物
- 流属性/单位：Mass / kg
- 数量规则：称重或有单据的废物和回收数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运声明产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_dispatch`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 可分离的产品、路线、批次和作业 | 在可行时，通过分别计量和建模不同产品路线、批次、单元操作、返工循环和废物处理活动来避免分配。 | `iso-14044-2006` |
| `allocation_physical_driver` | 无法避免的共享投入和排放 | 无法细分时，采用有记录的因果物理驱动因子分配共享负荷，例如分表计量设备用量、加工时间、干物质吞吐量或适合共享作业的其他可测关系。 | `iso-14044-2006` |
| `allocation_other_relationship` | 无可辩护物理关系的共享负荷 | 只有在不存在可辩护的因果物理基准时，才采用包括经济分配在内的其他关系；披露方法、数据期、价格或其他参数以及敏感性检查。 | `iso-14044-2006` |
| `allocation_co_product_accounting` | 可销售共产品、回收物料和返工 | 显式保留共产品数量和去向。内部返工不得作为第二产品；若没有与研究目标一致且明确声明的系统扩展、替代或分配方法，不得对外送物料或能源计入抵扣。 | `iso-14044-2006`; `eu-commission-pef-2021` |
| `allocation_category_routes` | 混合生产微生物产品和配制发酵粉 | 若没有有记录的代表性和产品特定产量，不得把类别平均负荷分配到实质不同的微生物、生命状态、配方或产品形态。 | `un-cpc-v3-23996`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_material_preparation` | `raw_material_preparation` | 主要物料、水、能源、中间物输出、残余物、废水 | 采购和领用记录；秤；仪表；批次及清洗日志；废物转移 | material_id; supplier; lot; opening_stock; receipts; issues; returns; closing_stock; measured_mass; water_volume; energy_by_carrier; intermediate_mass; waste_mass; wastewater_volume; timestamp | 将物料和公用工程记录核对至每个批次或稳定报告期，并保留路线特定身份 | kg; m3; kWh; MJ | 每批次并进行报告期核对 | 覆盖常规生产和实质性活动变化的声明代表期 | 数据集纳入的每个设施 | 汇总已核验投入和输出，应用库存变化校正，再按工厂门合格产品净产出归一化 | 经校准的秤和仪表记录；签署批次表；发票；库存核对；废物联单 |
| `cp_microbial_biomass_production` | `microbial_biomass_production` | 培养投入、湿生物质、废水、直接 CO2 和 VOC | 发酵罐批次记录；计量系统；公用工程仪表；实验室固形物测试；排放记录 | strain; batch_id; feed_mass; inoculum_mass; nutrient_mass; water; electricity; thermal_energy; aeration; broth_mass; solids_fraction; wastewater; measured_emissions; operating_time | 按发酵罐或活动采集，并核对转移到回收过程的物料；区分实测排放与计算排放 | kg; m3; kWh; MJ; h | 每个培养批次或活动 | 包含实质性产品和季节变化的声明代表期 | 纳入的每条培养线和设施 | 只汇总可比产品和运行状态；先按实测培养液或培养产出，再按参考产品归一化 | 批次放行记录；校准仪表；实验室结果；排放监测方法和计算文件 |
| `cp_biomass_recovery_finishing` | `biomass_recovery_and_finishing` | 回收投入、成品微生物产品、废物、废水和直接空气排放 | 转移秤；水分或固形物测试；计量和公用工程记录；干燥器及过滤器日志；废物和排放记录 | batch_id; incoming_mass; incoming_solids; aids; water; electricity; thermal_energy; product_mass; moisture; biological_state_test; waste_mass; wastewater; pollutant_mass | 从进入的中间物到合格产品及全部损失，对每个回收和整理批次进行核对 | kg; m3; kWh; MJ | 每批次并进行报告期核对 | 覆盖全部纳入产品形态和技术的声明代表期 | 纳入的每条回收、灭活、干燥或整理线 | 按声明水分基准归一化至合格产品；除非证明代表性，否则路线和形态保持分开 | 校准秤和仪表；实验室水分和状态测试；设备日志；废物联单；排放记录 |
| `cp_baking_powder_formulation` | `baking_powder_formulation` | 配方配料、能源、合格混合物、不合格物料、回收粉尘和排放 | 供应商和批号记录；校准计量秤；批次表；公用工程仪表；放行测试；粉尘和废物记录 | formulation_id; ingredient_identity; supplier; lot; dose_mass; opening_stock; closing_stock; energy; product_mass; release_result; rework_mass; waste_mass; collected_dust; emitted_dust | 逐批采集每项配料投料和输出，并核对完整配方质量平衡 | kg; kWh; MJ | 每个配方批次 | 覆盖全部纳入配方的声明代表期 | 纳入的每条混合线和设施 | 除非按产量加权且证明性能等效，否则配方保持分开 | 批准配方；供应商证书；校准秤记录；签署批次和放行记录；废物及除尘记录 |
| `cp_packaging_and_dispatch` | `packaging_and_dispatch` | 散装产品、包装、能源、参考输出、废品和发运损失 | 转移和发运秤；包装领用记录；部件质量；公用工程仪表；包装日志；废物记录 | product_id; batch_id; bulk_mass; package_component; component_mass; component_count; energy; dispatched_net_mass; packaging_mass; reject_mass; recovered_product; timestamp | 核对散装投入、发运产品净质量、包装领用、废品、回收产品和库存变化 | kg; item; kWh; MJ | 每个包装或散装发运批次 | 与上游前景生产相同的期间 | 纳入的每条包装线、散装装载线和设施 | 汇总发运的合格产品净质量并将全部清单归一化至 1 kg 净产品；参考数量不含包装质量 | 校准发运秤；包装规格；领用记录；装运记录；废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 已核验的报告期或批次数量除以声明基准上的工厂门合格产品净质量。 | row amount; net conforming product mass; moisture basis where applicable | 每 1 kg 声明产品净质量的数量 | `iso-14044-2006` |
| `calc_stock_reconciliation` | 采购和中间物料 | 物料消耗 = 期初库存 + 接收 - 期末库存 - 有记录退回；归一化前调查物料差异。 | opening stock; receipts; closing stock; returns; issue records | 核对后的物料消耗 | `iso-14044-2006` |
| `calc_dry_matter_conversion` | 同时按湿基和干基报告的微生物产品 | 干质量 = 销售状态质量乘以实测干物质分数。不得跨产品形态或批次使用通用水分因子。 | as-sold mass; measured dry-matter fraction | 干质量及保留的换算记录 | `iso-14044-2006` |
| `calc_shared_utility_allocation` | 共享公用工程仪表 | 优先采用直接分表；否则采用设备功率乘运行时间等实测因果驱动因子，并记录未分配基荷。 | meter total; submeter values; equipment power; operating time; throughput | 产品和过程特定的公用工程数量 | `iso-14044-2006` |
| `calc_direct_emissions` | 直接空气和水排放 | 使用经验证的设施测量，或根据采集的浓度、流量、运行时间、碳平衡或质量平衡进行有记录的计算。不得把 AP-42 因子作为产品默认值。 | measured concentration; standardized gas or water flow; operating time; collected material and carbon records | 按污染物区分的直接排放 | `us-epa-ap42-yeast-1995`; `iso-14044-2006` |
| `calc_packaging_normalization` | 包装 | 每参考流包装 = 核对后的投放市场包装部件质量除以发运的合格产品净质量。 | packaging component counts and masses; net dispatched product mass; rejects and returns | 每 1 kg 产品净质量的包装部件 kg 数 | `eu-commission-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和全部产品输出 | 证明具体产品族、适用时的微生物和菌株、生命状态、形态、水分基准、等级、适用时的配方以及精确 Tiangong flow 匹配决定。 | 批准产品规格；批次放行；flow 回读或有记录的未解决身份缺口 |
| `dq_route_separation` | 混合设施和产品组合 | 除非证明按产量加权汇总合理并披露，否则将实质不同的微生物路线、生命状态、干燥技术、配方和包装状态分开。 | 产品路线矩阵；批次清单；产量；汇总理由 |
| `dq_temporal_representativeness` | 全部前景数据 | 使用一致且声明的期间，代表常规运行并覆盖实质性活动、季节条件、停机、返工和异常排除。 | 报告期说明；生产计划；排除日志；核对记录 |
| `dq_measurement_control` | 质量、水、能源、水分、排放和废物 | 使用经校准或核验的仪器，并保留单位、换算因子、适用时的检出限和责任记录。 | 校准证书；仪表检查；实验室方法；监管链；计算文件 |
| `dq_completeness` | 前景清单 | 核对物料、产品、废物、水、能源和直接排放记录，并记录每个实质性缺口、估计、排除和截断决定。 | 质量和公用工程核对；完整性清单；差异调查；排除登记 |
| `dq_upstream_fit` | 链接的上游数据集 | 选择与物料身份、产品形态、技术、地理、时间和供应商情况匹配的数据集；披露代理和替代选择。 | 供应商数据；数据集元数据；代理理由；敏感性或改进计划 |
| `dq_source_traceability` | 全部计算值和来源约束值 | 保留原始前景记录、公式、分配驱动因子、来源标识、操作者和修订，使每个归一化值可重现。 | 审计链；版本化计算工作簿或脚本；来源登记；评审记录 |
| `dq_review_and_verification` | 共享或发布数据集 | 发布前评审产品身份、边界、分配、数据质量和可重现性；向第三方披露的研究遵循适用核查要求。 | 评审清单；问题解决记录；适用时的核查声明；`eu-commission-pef-2021` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_product_identity` | 产品类别和数据集元数据 | 若缺少具体产品族、生命状态、形态、水分或干物质基准、等级、适用时的配方、生产路线或包装状态，则判定不符合。 | `un-cpc-v3-23996` |
| `validate_reference_flow` | 参考流 | 要求工厂门恰好 1 kg 合格声明产品净质量、Mass 属性、Units of mass 单位组、kg 参考单位及全部必需限定信息。 | `iso-14044-2006` |
| `validate_representative_uuid` | Tiangong 产品流身份 | 非匹配的干酵母、饲料级产品不得静默使用 `3ea5b163-5e50-4f40-bf13-8a6c3f10d1b6`；存在更接近的已核验 flow 时必须替换，不存在时必须显式记录身份缺口。 | `un-cpc-v3-23996` |
| `validate_route_coverage` | 过程图和清单 | 要求纳入且仅纳入适用路线模块：始终纳入准备和发运；相关微生物路线纳入培养及回收/整理；配制发酵粉纳入发酵粉配方生产。 | `us-epa-ap42-yeast-1995`; `canada-cfcs-baking-powder` |
| `validate_mass_and_units` | 计量和归一化 | 要求质量单位一致、库存变化核对、产品净质量归一化、包装质量单列，并在比较湿基和干基时使用实测水分换算。 | `iso-14044-2006` |
| `validate_inventory_completeness` | 物料、公用工程、废物和直接排放 | 要求物料投入、水、能源、产品、废物、废水、包装及适用直接排放记录；缺少默认因子不构成零流量依据。 | `us-epa-ap42-yeast-1995`; `eu-commission-pef-2021` |
| `validate_allocation` | 共享过程和共产品 | 在可行时要求细分，否则要求有记录的因果分配驱动因子；仍不可行时要求所选关系、参数、理由和敏感性检查。 | `iso-14044-2006` |
| `validate_data_quality` | 前景证据 | 要求能够重现每个实质性归一化值所需的采集期间、场址和产线覆盖、仪器、原始记录、公式、排除、代理及质量证据。 | `iso-14044-2006`; `eu-commission-pef-2021` |
| `validate_source_traceability` | 证据支持的规则 | 要求每个引用 source id 均能在数据源中解析，并区分来源约束规则、前景测量和作者判断。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个具体声明 CPC 23996 产品和路线的前景工厂门生产数据集 |
| downstream_use | `secondary_dataset`; 完成方法学评审、质量评审和发布批准后可作为 `background_dataset` |
| allowed_use | 当产品身份、路线、地理、技术、时间、水分基准、等级、配方和包装状态与研究匹配且上游链接完整时，用于产品碳足迹或 LCA 建模 |
| excluded_use | 作为全部 CPC 23996 产品的通用表示；把干酵母 UUID 静默用于其他形态；使用阶段性能建模；生命活性等效；未证明功能等效的跨形态或跨配方比较；未完成适用评审和核查的公开比较声明 |
| required_metadata | canonical PCR id；CPC 引用；产品及微生物或配方身份；活性、非活性或死亡状态；形态；水分或干物质基准；等级和预期用途；生产路线；地理；技术；报告期；设施和产线覆盖；包装状态；产品流替换决定；分配；排除；source ids |
| required_quality_disclosure | 前景数据占比；仪表和秤覆盖；批次和时间覆盖；质量及公用工程核对；排放方法；分配驱动因子；代理数据集；截断和排除；不确定性及代表性限制；评审状态 |
| update_trigger | 产品身份、菌株或配方、生命状态、产品形态、水分基准、过程技术、主要供应商或能源、包装、设施边界、分配方法、产品流 UUID、法规或来源证据发生变化，或实测清单发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-23996` | 标准（`standard`） | 联合国统计司，Central Product Classification Version 3.0，子类 23996，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-10） | 产品类别范围，以及区分酵母、其他已死亡单细胞微生物和配制发酵粉的要求 |
| `us-epa-ap42-yeast-1995` | 官方指南（`official_guidance`） | 美国环境保护署，AP-42 Chapter 9.13.4 Yeast Production，1995 年 1 月，https://www.epa.gov/sites/default/files/2020-10/documents/c9s13-4.pdf（检索于 2026-08-10） | 面包酵母过程分解、投入、发酵、回收、混合、干燥、包装、废水、VOC 和 CO2 清单检查点；不采用其排放因子作为默认值 |
| `canada-cfcs-baking-powder` | 标准（`standard`） | 加拿大食品检验局，Canadian Food Compositional Standards，Volume 3 Baking Powder，section 3.1.1，https://inspection.canada.ca/en/about-cfia/acts-and-regulations/list-acts-and-regulations/documents-incorporated-reference/canadian-food-compositional-standards-0（检索于 2026-08-10） | 配制发酵粉产品和配方身份：碳酸氢盐、酸反应物、淀粉或其他中性材料 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，含 ISO 页面列出的现行修正，https://www.iso.org/standard/38498.html（检索于 2026-08-10） | 目标和范围、清单完整性、分配层级、数据质量、报告、评审和可追溯性规则 |
| `eu-commission-pef-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，C(2021) 9332 final，https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en?filename=CommissionRecommendationontheuseoftheEnvironmentalFootprintmethods_0.pdf（检索于 2026-08-10） | 生命周期范围、建模和数据质量期望、包装及供应链完整性和核查期望 |
