---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vinegar-and-substitutes-therefor-obtained-from-acetic-acid
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 食醋及由醋酸制得的食醋代用品

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 中的食醋，以及通过稀释或配制食品级醋酸制得的可食用食醋代用品。它支持工厂门成品的前景数据包，包括以农产品基质或农业来源酒精生产的发酵食醋，以及由醋酸配制、具有类似食醋用途的液态食品。

前景数据包必须声明具体产品形态和路线。发酵食醋与醋酸配制代用品是不同产品，不得相互代表。第 3 节的天工类别标记流仅作为成品液态食醋的代表标识。若存在与实际基质、路线、物理形态、市场规格或包装状态更匹配的真实天工流，必须用该流替换代表流。不得将代表 UUID 静默用于醋酸代用品、缓冲食醋粉、浓缩半成品酸或其他具有实质差异的形态。

本 PCR 不包括作为化学品销售的工业醋酸、醋酸盐和缓冲食醋粉、仅以食醋作为配料的酱料和腌渍食品、非食品清洁用品，以及由独立供应商数据集表示的上游生产过程。只有当声明的工厂门产品为包装产品时才纳入包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vinegar-and-substitutes-therefor-obtained-from-acetic-acid |
| classification_refs | CPC 3.0：23994，食醋及由醋酸制得的食醋代用品 |
| covered_products | 由农产品基质或农业来源酒精制得的成品液态发酵食醋；以食品级醋酸配制、具有类似食醋用途的可食用液态代用品 |
| excluded_products | 工业醋酸；醋酸盐和缓冲食醋粉；酱料、调味品、腌渍食品及其他含食醋食品；非食品清洁用品；除非明确声明为产品，否则不包括供进一步加工的未完成中间体 |
| representative_product | 工厂门可得的类别标记成品液态食醋；经核验的天工 UUID 是代表流，不是覆盖所有形态的通用标识 |
| production_route | 发酵路线，包括在场址进行时的酒精发酵和需氧醋酸发酵；或醋酸配制路线；随后进行适用于路线的后处理和有条件包装 |
| market_state | 工厂门成品液体；必须声明散装或包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明的酸化、调味或保藏功能的成品食醋或可食用醋酸基食醋代用品 |
| How much | 1 kg 产品净重 |
| How well | 符合声明的产品标识、路线、酸度规格、物理形态、市场或司法管辖区规格及包装状态 |
| How long or cycle | 在声明工厂门交付的一个生产批次或报告期产出；使用和储存期限不属于该参考功能 |
| reference_flow_link | 功能单位由恰好 1 kg 声明的成品实现。仅当不存在更具体的真实流时，类别标记代表流才用于成品液态食醋。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Vinegar and substitutes therefor obtained from acetic acid `20393649-bcc3-43f0-a2df-1a99c0005e29` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具体产品名称和形态；发酵食醋或醋酸代用品路线；农产品基质或醋酸来源；酸度和检测基准；物理状态；散装或包装状态；地理和市场规格；生产技术；适用时的陈酿和热处理；选定的产品流 UUID 以及任何替换的理由 |

构建前景数据包时，`Required qualifiers`（必需限定信息）中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明工厂门的实测产品净重归一化。包装质量不计入产品质量，另行记录。仅可使用批次或产品特定的实测密度将体积换算为质量，并保留密度、温度和方法。 |
| `representative_flow_use` | 参考产品标识 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅将 `20393649-bcc3-43f0-a2df-1a99c0005e29` 用于完全匹配类别标记代表形态的成品液态食醋。声明实际形态，并在存在更具体真实流时替换该 UUID；不得静默用于代用品或其他形态。 |
| `acid_strength_reporting` | 成品质量 | 产品特定浓度属性 | 声明的实验室单位 | 酸度必须独立于产品质量报告，并声明检测方法、取样点、适用时的温度和市场规格。不得根据标称酸度推断产品质量。 |
| `packaging_mass` | 包装产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种包装材料按每 1 kg 产品净重单独记录；容器和封口质量不得计入参考产品数量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的农产品或酒精原料、食品级醋酸、过程水、配料、培养物、能源载体、清洁材料和包装带着上游数据集进入；前景建模从首个场内转化或配制步骤开始。 |
| starting_condition_role | 从摇篮到工厂门的前景制造，供应商负荷由链接的上游数据集表示 |
| product_classification_scope | 覆盖 CPC 3.0 23994 的完整类别语义，但每个前景数据包只选择一个明确的产品形态和路线。 |
| recursive_input_rule | 采购的同类别食醋、代用品、醋母或返工料只作为产品输入记录一次，并链接其上游数据集。不得在接收过程中递归展开该供应商数据集。同一报告系统内的内部循环不得计为新的外部输入。 |
| upstream_dataset_requirement | 为跨越工厂边界的全部材料和能源输入链接具有代表性的上游数据集，包括声明的原料或食品级醋酸。对重要输入优先使用供应商特定数据。 |
| disclosure | 声明路线、原料来源、酒精发酵是否在场内进行、醋酸发酵技术、配方基准、陈酿、后处理和热处理、工厂门包装状态、纳入的公用工程、数据期间、地理范围以及任何排除活动。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | 所有前景数据包 | 选择并声明发酵食醋路线或醋酸代用品路线。只纳入适用于该路线的过程，绝不得将发酵食醋标识用于配制代用品。 | `unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100` |
| `boundary_foreground_operations` | 制造工厂 | 纳入场内原料制备和在场内进行时的酒精发酵、醋酸发酵或醋酸配制、后处理、可直接归属的公用工程、清洁、直至废物和废水离开前景边界的处理，以及有条件包装。 | `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019` |
| `boundary_upstream_inputs` | 采购输入 | 用上游数据集表示采购的原料、食品级醋酸、配料、培养物、水、能源载体、清洁材料和包装；不得将供应商生产视为零负荷。 | `jrc-fdm-bref-2019` |
| `boundary_downstream_exclusions` | 工厂门结果 | 排除工厂门之后的配送、零售、消费者储存和使用以及寿命终止，除非研究明确扩展边界并单独报告。 | `eu-pef-2021-2279` |
| `boundary_representative_identity` | 参考流 | 经核验的类别标记食醋流只是代表产品形态。代用品或其他实质不同形态的数据包必须在可得时选择匹配的真实流，并披露任何剩余代理。 | `unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | 农业原料制备 | `conditional` | 发酵食醋由场内制备的农业基质生产 | 制备可计量的农业来源基质 | kg 制备后基质 |
| `alcoholic_fermentation` | 酒精发酵 | `conditional` | 可发酵基质在场内转化为含酒精液体 | 生产供醋化使用的含酒精基质 | kg 含酒精液体 |
| `acetification` | 好氧醋化 | `conditional` | 选择发酵食醋路线 | 在表面、发生器或浸没工艺中生物氧化乙醇 | kg 生发酵食醋 |
| `acetic_acid_formulation` | 食品级醋酸配制 | `conditional` | 选择醋酸代用品路线 | 稀释并配制食品级醋酸形成声明的食用代用品 | kg 生配制代用品 |
| `finishing` | 调配、澄清、稳定与放行 | `required` | 全部路线 | 按路线进行调配、澄清、过滤、稳定和放行 | kg 成品散装产品 |
| `packaging` | 初级与次级包装 | `conditional` | 声明的厂门产品为包装状态 | 灌装、封口、贴标并准备发运 | kg 净包装产品 |

### 过程：农业原料制备 (`feedstock_preparation`)

#### 输入

##### 产品流

###### 葡萄汁原料 (`feedstock_grape_must`)

将 Grape must 作为一个独立计量的交换记录。

- 选定流：Grape must
- UUID 状态：未解析——拒绝了未能确立葡萄汁身份和参考属性的葡萄酒/葡萄汁合并类别候选。
- 适用条件：仅适用于葡萄汁路线；当记录原料为葡萄酒、苹果酒、乙醇、糖、稻米或小麦时省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 葡萄酒原料 (`feedstock_wine`)

将 Wine 作为一个独立计量的交换记录。

- 选定流：Wine `bb271645-d31c-4d60-9c88-d8b416a0d947`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当购入葡萄酒在场内制备用于醋化时纳入；其余原料路线省略。
- 流属性/单位：Volume / m3
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 苹果酒原料 (`feedstock_cider`)

将 Cider 作为一个独立计量的交换记录。

- 选定流：Cider `2a9af3da-d57b-4669-bd9c-c228be771967`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当购入苹果酒在场内制备用于醋化时纳入；其余原料路线省略。
- 流属性/单位：Volume / m3
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 农业来源乙醇原料 (`feedstock_agricultural_ethanol`)

将 Food-grade ethanol of agricultural origin 作为一个独立计量的交换记录。

- 选定流：Food-grade ethanol of agricultural origin
- UUID 状态：未解析——拒绝了未同时确立食品级和农业来源的通用乙醇及燃料乙醇候选。
- 适用条件：仅适用于农业酒精路线；当农业基质在场内发酵时省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 蔗糖原料 (`feedstock_sucrose`)

将 Soft white sugar 作为一个独立计量的交换记录。

- 选定流：Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当蔗糖为声明的可发酵原料时纳入；非糖路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 稻米原料 (`feedstock_rice`)

将 Rice 作为一个独立计量的交换记录。

- 选定流：Rice `bc375e24-c87f-4fa2-b557-123f3aa312ef`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当稻米为声明的含淀粉原料时纳入；非稻米路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 小麦原料 (`feedstock_wheat`)

将 Food-grade wheat grain 作为一个独立计量的交换记录。

- 选定流：Food-grade wheat grain
- UUID 状态：未解析——拒绝了 flow get 标识为饲料级而非食品级谷物的小麦候选。
- 适用条件：仅当小麦为声明的含淀粉原料时纳入；非小麦路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 制备用自来水 (`preparation_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当原料制备消耗自来水时纳入。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### α-淀粉酶 (`preparation_alpha_amylase`)

将 Amylase, medium-temperature 作为一个独立计量的交换记录。

- 选定流：Amylase, medium-temperature `ec31f8f1-1870-4f41-846a-3632072a5d9f`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该酶用于淀粉液化投加时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 糖化酶 (`preparation_glucoamylase`)

将 Glucoamylase, 1500 U/g 作为一个独立计量的交换记录。

- 选定流：Glucoamylase, 1500 U/g `019f5b53-6ae4-41aa-8e75-0f5fefaf4469`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该酶用于糖化投加时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 果胶酶 (`preparation_pectinase`)

将 Food-grade pectinase 作为一个独立计量的交换记录。

- 选定流：Food-grade pectinase
- UUID 状态：未解析——未找到果胶酶候选；返回的起重机系统命中因语义无关被拒绝。
- 适用条件：仅当果胶酶用于水果基质制备投加时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### 磷酸二铵营养剂 (`preparation_diammonium_phosphate`)

将 Diammonium phosphate, purity above 99.5% 作为一个独立计量的交换记录。

- 选定流：Diammonium phosphate, purity above 99.5% `743bd461-1a63-4ed6-934c-86b29fe21080`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当制备阶段投加磷酸二铵时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后可发酵基质输出 (`prepared_fermentable_substrate`)

将 Prepared fermentable agricultural substrate 作为一个独立计量的交换记录。

- 选定流：Prepared fermentable agricultural substrate
- UUID 状态：未解析——未找到精确的内部中间体流身份；通用可发酵原料候选未确立声明基质。
- 适用条件：纳入原料制备过程时必须记录该输出；仅转移至声明的下游发酵或醋化过程。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

##### 废物流

###### 不合格农业原料 (`preparation_rejected_feedstock`)

按实测数量和去向单独记录 Rejected agricultural feedstock。

- 选定流：Rejected agricultural feedstock
- UUID 状态：未解析——拒绝了不能保留农业原料身份的通用食品残渣候选。
- 适用条件：仅当不合格进厂原料作为废物离开前景边界时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 水果果渣 (`preparation_fruit_pomace`)

按实测数量和去向单独记录 Fruit pomace。

- 选定流：Fruit pomace
- UUID 状态：未解析——拒绝了橄榄果渣候选，因为本 PCR 要求声明水果基质而非橄榄特定废物。
- 适用条件：仅适用于分离果渣的水果制备；酒精、糖或谷物路线省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 废酒糟谷物 (`preparation_spent_grain`)

按实测数量和去向单独记录 Spent grain。

- 选定流：Spent grain
- UUID 状态：未解析——未找到精确废酒糟谷物流；研磨粉尘候选被拒绝。
- 适用条件：仅适用于分离废固体的谷物路线，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 制备废水 (`preparation_wastewater`)

按实测数量和去向单独记录 Food-feedstock preparation wastewater。

- 选定流：Food-feedstock preparation wastewater
- UUID 状态：未解析——拒绝了来源与食品原料制备不符的市政及电解锰加工废水候选。
- 适用条件：仅当制备废水送处理或排放时纳入，并保留去向。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 制备后基质输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

### 过程：酒精发酵 (`alcoholic_fermentation`)

#### 输入

##### 产品流

###### 制备后基质投入 (`fermentation_prepared_substrate`)

将 Prepared fermentable agricultural substrate 作为一个独立计量的交换记录。

- 选定流：Prepared fermentable agricultural substrate
- UUID 状态：未解析——未找到精确的内部中间体流身份。
- 适用条件：仅当酒精发酵在场内进行时必须纳入；购入酒精或购入葡萄酒路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 发酵酵母 (`fermentation_yeast`)

将 Saccharomyces cerevisiae fermentation yeast 作为一个独立计量的交换记录。

- 选定流：Saccharomyces cerevisiae fermentation yeast
- UUID 状态：未解析——拒绝了不表示活性发酵酵母的酵母提取物和饲料干酵母候选。
- 适用条件：仅当购入酵母跨越过程边界时纳入；内部菌种回流不构成新的外部投入。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 磷酸二铵营养剂 (`fermentation_diammonium_phosphate`)

将 Diammonium phosphate, purity above 99.5% 作为一个独立计量的交换记录。

- 选定流：Diammonium phosphate, purity above 99.5% `743bd461-1a63-4ed6-934c-86b29fe21080`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当酒精发酵投加该营养剂时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 低压电网电力 (`alcoholic_fermentation_electricity_low_voltage_grid`)

将 Alternating current, below 1 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, below 1 kV, grid consumption mix
- UUID 状态：未解析——拒绝了低于 1 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 中压电网电力 (`alcoholic_fermentation_electricity_medium_voltage_grid`)

将 Alternating current, 1-35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, 1-35 kV, grid consumption mix
- UUID 状态：未解析——拒绝了 1–35 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 高压电网电力 (`alcoholic_fermentation_electricity_high_voltage_grid`)

将 Alternating current, above 35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, above 35 kV, grid consumption mix
- UUID 状态：未解析——未找到参考属性为有效电力能量的高于 35 kV 消费组合精确候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 厂内光伏电力 (`alcoholic_fermentation_electricity_onsite_photovoltaic`)

将 Alternating current, on-site photovoltaic supply 作为一个独立计量的交换记录。

- 选定流：Alternating current, on-site photovoltaic supply
- UUID 状态：未解析——拒绝了电压或净热值参考属性与该交换不匹配的光伏候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 11.0 MPaG 蒸汽 (`alcoholic_fermentation_steam_11mpag`)

将 Steam, 11.0 MPaG 作为一个独立计量的交换记录。

- 选定流：Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 80 °C 热水 (`alcoholic_fermentation_hot_water_80c`)

将 Hot water, 80 °C 作为一个独立计量的交换记录。

- 选定流：Hot water, 80 °C
- UUID 状态：未解析——未找到参考属性为有效热能的 80 °C 热水产品流精确候选。
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Energy / MJ
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 天然气燃料 (`alcoholic_fermentation_natural_gas`)

将 Natural gas in the gaseous state 作为一个独立计量的交换记录。

- 选定流：Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 液化石油气燃料 (`alcoholic_fermentation_liquefied_petroleum_gas`)

将 Liquefied petroleum gas 作为一个独立计量的交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 柴油燃料 (`alcoholic_fermentation_diesel_oil`)

将 Diesel oil 作为一个独立计量的交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 重油燃料 (`alcoholic_fermentation_heavy_oil`)

将 Heavy oil 作为一个独立计量的交换记录。

- 选定流：Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 沼气燃料 (`alcoholic_fermentation_biogas`)

将 Biogas, 50-80% methane 作为一个独立计量的交换记录。

- 选定流：Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 压缩空气 (`alcoholic_fermentation_compressed_air`)

将 Compressed air 作为一个独立计量的交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当 Compressed air 跨越酒精发酵边界时纳入，否则省略。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-134a 制冷剂补充 (`alcoholic_fermentation_refrigerant_r134a`)

将 Refrigerant, R134a 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-717 氨制冷剂补充 (`alcoholic_fermentation_refrigerant_r717`)

将 Refrigerant, R717 ammonia 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R717 ammonia
- UUID 状态：未解析——拒绝了未确立制冷级或补充用途的无水氨候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-744 二氧化碳制冷剂补充 (`alcoholic_fermentation_refrigerant_r744`)

将 Refrigerant, R744 carbon dioxide 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R744 carbon dioxide
- UUID 状态：未解析——拒绝了描述为废气、化学试剂或焊接气体而非 R-744 制冷剂的二氧化碳候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 自来水 (`alcoholic_fermentation_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 工艺用地下水 (`alcoholic_fermentation_groundwater`)

将 Groundwater for process use 作为一个独立计量的交换记录。

- 选定流：Groundwater for process use
- UUID 状态：未解析——拒绝了不能表示食品工艺供水的地下水取用和灌溉候选。
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 冷却水 (`alcoholic_fermentation_cooling_water`)

将 Cooling water 作为一个独立计量的交换记录。

- 选定流：Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 去离子水 (`alcoholic_fermentation_deionized_water`)

将 Deionised water 作为一个独立计量的交换记录。

- 选定流：Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 回用工艺水 (`alcoholic_fermentation_reused_process_water`)

将 Process Water 作为一个独立计量的交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 含酒精液体输出 (`alcoholic_liquid`)

将 Alcoholic liquid for acetification 作为一个独立计量的交换记录。

- 选定流：Alcoholic liquid for acetification
- UUID 状态：未解析——通用乙醇候选不能表示批次特定的含酒精中间体。
- 适用条件：纳入酒精发酵时必须记录该输出；保留基质身份、酒精度和批次关联。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

##### 废物流

###### 酒泥 (`fermentation_wine_lees`)

按实测数量和去向单独记录 Wine lees。

- 选定流：Wine lees
- UUID 状态：未解析——拒绝了具有无关危废含量和处置语义的通用残渣候选。
- 适用条件：仅当酒泥被分离并离开过程时纳入；保留在中间体中时省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 废酵母生物质 (`fermentation_spent_yeast`)

按实测数量和去向单独记录 Spent yeast biomass。

- 选定流：Spent yeast biomass
- UUID 状态：未解析——未找到精确废酵母流；木废料命中被拒绝。
- 适用条件：仅当废酵母作为废物离开过程时纳入；经核实的内部回用省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 不合格含酒精液体 (`fermentation_rejected_alcoholic_liquid`)

按实测数量和去向单独记录 Rejected alcoholic fermentation liquid。

- 选定流：Rejected alcoholic fermentation liquid
- UUID 状态：未解析——拒绝了未确立酒精发酵来源的通用废液候选。
- 适用条件：仅适用于作为废物外运的不合格批次；内部返工省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 发酵废水 (`fermentation_wastewater`)

按实测数量和去向单独记录 Alcoholic-fermentation wastewater。

- 选定流：Alcoholic-fermentation wastewater
- UUID 状态：未解析——拒绝了绑定非食品工业路线的废水候选。
- 适用条件：仅当该废水送处理或排放时纳入；保留去向和处理状态。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

###### 排入空气的生物源二氧化碳 (`fermentation_biogenic_carbon_dioxide_air`)

仅按该命名基本交换及其声明环境介质记录 Carbon dioxide, biogenic, to air unspecified。

- 选定流：Carbon dioxide, biogenic, to air unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅当原料证据确立生物源碳且排放跨越环境边界时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`spain-rd-661-2012-consolidated-2026`

###### 排入空气的乙醇 (`fermentation_ethanol_air`)

仅按该命名基本交换及其声明环境介质记录 Ethanol, to air unspecified。

- 选定流：Ethanol, to air unspecified `08a91e70-3ddc-11dd-9349-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测或计算的排入未指定空气介质的乙醇。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 含酒精液体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`mas-et-al-2014-wine-vinegar`

### 过程：好氧醋化 (`acetification`)

#### 输入

##### 产品流

###### 含酒精液体投入 (`acetification_alcoholic_liquid`)

将 Alcoholic liquid for acetification 作为一个独立计量的交换记录。

- 选定流：Alcoholic liquid for acetification
- UUID 状态：未解析——未找到精确的内部含酒精中间体流身份。
- 适用条件：发酵食醋路线必须纳入；醋酸代用品路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### 购入醋母 (`acetification_mother_vinegar`)

将 Mother vinegar culture 作为一个独立计量的交换记录。

- 选定流：Mother vinegar culture
- UUID 状态：未解析——拒绝了来自湿法冶金路线且不表示醋母的醋酸溶液候选。
- 适用条件：仅当购入醋母跨越边界时纳入；内部回流省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### 醋酸菌培养物 (`acetification_bacteria_culture`)

将 Acetic acid bacteria culture 作为一个独立计量的交换记录。

- 选定流：Acetic acid bacteria culture
- UUID 状态：未解析——未找到醋酸菌培养物流；醋酸酯化学品命中被拒绝。
- 适用条件：仅当购入培养物跨越过程边界时纳入；内部菌种回流省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### 磷酸二铵营养剂 (`acetification_diammonium_phosphate`)

将 Diammonium phosphate, purity above 99.5% 作为一个独立计量的交换记录。

- 选定流：Diammonium phosphate, purity above 99.5% `743bd461-1a63-4ed6-934c-86b29fe21080`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当醋化阶段投加该营养剂时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### 购入工业氧 (`acetification_industrial_oxygen`)

将 Industrial oxygen 作为一个独立计量的交换记录。

- 选定流：Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当购入工业氧跨越过程边界时纳入；由大气氧或压缩空气表示供给时省略。
- 流属性/单位：Volume / m3
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`mas-et-al-2014-wine-vinegar`

###### 低压电网电力 (`acetification_electricity_low_voltage_grid`)

将 Alternating current, below 1 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, below 1 kV, grid consumption mix
- UUID 状态：未解析——拒绝了低于 1 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 中压电网电力 (`acetification_electricity_medium_voltage_grid`)

将 Alternating current, 1-35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, 1-35 kV, grid consumption mix
- UUID 状态：未解析——拒绝了 1–35 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 高压电网电力 (`acetification_electricity_high_voltage_grid`)

将 Alternating current, above 35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, above 35 kV, grid consumption mix
- UUID 状态：未解析——未找到参考属性为有效电力能量的高于 35 kV 消费组合精确候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 厂内光伏电力 (`acetification_electricity_onsite_photovoltaic`)

将 Alternating current, on-site photovoltaic supply 作为一个独立计量的交换记录。

- 选定流：Alternating current, on-site photovoltaic supply
- UUID 状态：未解析——拒绝了电压或净热值参考属性与该交换不匹配的光伏候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 11.0 MPaG 蒸汽 (`acetification_steam_11mpag`)

将 Steam, 11.0 MPaG 作为一个独立计量的交换记录。

- 选定流：Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 80 °C 热水 (`acetification_hot_water_80c`)

将 Hot water, 80 °C 作为一个独立计量的交换记录。

- 选定流：Hot water, 80 °C
- UUID 状态：未解析——未找到参考属性为有效热能的 80 °C 热水产品流精确候选。
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Energy / MJ
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 天然气燃料 (`acetification_natural_gas`)

将 Natural gas in the gaseous state 作为一个独立计量的交换记录。

- 选定流：Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 液化石油气燃料 (`acetification_liquefied_petroleum_gas`)

将 Liquefied petroleum gas 作为一个独立计量的交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 柴油燃料 (`acetification_diesel_oil`)

将 Diesel oil 作为一个独立计量的交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 重油燃料 (`acetification_heavy_oil`)

将 Heavy oil 作为一个独立计量的交换记录。

- 选定流：Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 沼气燃料 (`acetification_biogas`)

将 Biogas, 50-80% methane 作为一个独立计量的交换记录。

- 选定流：Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 压缩空气 (`acetification_compressed_air`)

将 Compressed air 作为一个独立计量的交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当 Compressed air 跨越好氧醋化边界时纳入，否则省略。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-134a 制冷剂补充 (`acetification_refrigerant_r134a`)

将 Refrigerant, R134a 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-717 氨制冷剂补充 (`acetification_refrigerant_r717`)

将 Refrigerant, R717 ammonia 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R717 ammonia
- UUID 状态：未解析——拒绝了未确立制冷级或补充用途的无水氨候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-744 二氧化碳制冷剂补充 (`acetification_refrigerant_r744`)

将 Refrigerant, R744 carbon dioxide 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R744 carbon dioxide
- UUID 状态：未解析——拒绝了描述为废气、化学试剂或焊接气体而非 R-744 制冷剂的二氧化碳候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 自来水 (`acetification_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 工艺用地下水 (`acetification_groundwater`)

将 Groundwater for process use 作为一个独立计量的交换记录。

- 选定流：Groundwater for process use
- UUID 状态：未解析——拒绝了不能表示食品工艺供水的地下水取用和灌溉候选。
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 冷却水 (`acetification_cooling_water`)

将 Cooling water 作为一个独立计量的交换记录。

- 选定流：Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 去离子水 (`acetification_deionized_water`)

将 Deionised water 作为一个独立计量的交换记录。

- 选定流：Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 回用工艺水 (`acetification_reused_process_water`)

将 Process Water 作为一个独立计量的交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

##### 基本流

###### 大气氧资源 (`acetification_atmospheric_oxygen`)

将 Oxygen, resource from air 作为一个独立计量的交换记录。

- 选定流：Oxygen, resource from air `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅当建模约定记录直接从大气取氧时纳入；由购入压缩空气或工业氧表示供给时省略。
- 流属性/单位：Mass / kg
- 数量规则：依据采集的曝气和组成记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_operation`
- 来源：`mas-et-al-2014-wine-vinegar`

#### 输出

##### 产品流

###### 生发酵食醋输出 (`raw_fermentation_vinegar`)

将 Raw fermentation vinegar 作为一个独立计量的交换记录。

- 选定流：Raw fermentation vinegar
- UUID 状态：未解析——醋酸溶液候选不能表示生发酵食醋。
- 适用条件：发酵食醋路线必须记录该输出；保留基质、技术、酸度和批次关联。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

##### 废物流

###### 废醋酸菌生物质 (`acetification_spent_bacteria_biomass`)

按实测数量和去向单独记录 Spent acetic acid bacteria biomass。

- 选定流：Spent acetic acid bacteria biomass
- UUID 状态：未解析——未找到精确废醋酸菌废物流。
- 适用条件：仅当生物质被分离并作为废物外运时纳入；内部回流省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 醋化污泥 (`acetification_sludge`)

按实测数量和去向单独记录 Acetification sludge。

- 选定流：Acetification sludge
- UUID 状态：未解析——通用污泥候选未确立食醋醋化来源。
- 适用条件：仅当可归属污泥离开醋化过程时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 不合格发酵食醋 (`acetification_rejected_vinegar`)

按实测数量和去向单独记录 Rejected fermentation vinegar。

- 选定流：Rejected fermentation vinegar
- UUID 状态：未解析——通用废液候选未确立发酵食醋身份。
- 适用条件：仅当不合格食醋作为废物离开时纳入；内部返工省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 醋化废水 (`acetification_wastewater`)

按实测数量和去向单独记录 Vinegar-acetification wastewater。

- 选定流：Vinegar-acetification wastewater
- UUID 状态：未解析——返回的蒸馏残渣和工业废水候选与食醋醋化不符。
- 适用条件：仅当该废水送处理或排放时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

###### 排入空气的乙醇 (`acetification_ethanol_air`)

仅按该命名基本交换及其声明环境介质记录 Ethanol, to air unspecified。

- 选定流：Ethanol, to air unspecified `08a91e70-3ddc-11dd-9349-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测或计算的排入未指定空气介质的乙醇。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`mas-et-al-2014-wine-vinegar`

###### 排入空气的醋酸 (`acetification_acetic_acid_air`)

仅按该命名基本交换及其声明环境介质记录 Acetic acid, to air unspecified。

- 选定流：Acetic acid, to air unspecified `08a91e70-3ddc-11dd-92c3-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测或计算的排入未指定空气介质的醋酸。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生发酵食醋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`mas-et-al-2014-wine-vinegar`

### 过程：食品级醋酸配制 (`acetic_acid_formulation`)

#### 输入

##### 产品流

###### 食品级醋酸 (`formulation_food_grade_acetic_acid`)

将 Food-grade acetic acid, 98% 作为一个独立计量的交换记录。

- 选定流：Food-grade acetic acid, 98%
- UUID 状态：未解析——拒绝了未确立食品级的工业级、纺织用途及未指定用途的 98% 醋酸候选。
- 适用条件：醋酸代用品路线必须纳入；发酵食醋路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### 配制用自来水 (`formulation_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：自来水用于稀释食品级醋酸时必须纳入；仅在使用另一声明水源时省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### 食品级盐 (`formulation_salt`)

将 Salt, food-grade 作为一个独立计量的交换记录。

- 选定流：Salt, food-grade `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当声明配方含盐时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### 焦糖色 (`formulation_caramel_colour`)

将 Food-grade caramel colour 作为一个独立计量的交换记录。

- 选定流：Food-grade caramel colour
- UUID 状态：未解析——检索返回纺织染料和颜料，而非食品级焦糖色。
- 适用条件：仅当声明配方含焦糖色时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### 柠檬酸 (`formulation_citric_acid`)

将 Citric Acid 作为一个独立计量的交换记录。

- 选定流：Citric Acid `80e2772b-119c-4565-a919-a70939d89dff`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当声明配方含柠檬酸时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### 低压电网电力 (`acetic_acid_formulation_electricity_low_voltage_grid`)

将 Alternating current, below 1 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, below 1 kV, grid consumption mix
- UUID 状态：未解析——拒绝了低于 1 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 中压电网电力 (`acetic_acid_formulation_electricity_medium_voltage_grid`)

将 Alternating current, 1-35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, 1-35 kV, grid consumption mix
- UUID 状态：未解析——拒绝了 1–35 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 高压电网电力 (`acetic_acid_formulation_electricity_high_voltage_grid`)

将 Alternating current, above 35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, above 35 kV, grid consumption mix
- UUID 状态：未解析——未找到参考属性为有效电力能量的高于 35 kV 消费组合精确候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 厂内光伏电力 (`acetic_acid_formulation_electricity_onsite_photovoltaic`)

将 Alternating current, on-site photovoltaic supply 作为一个独立计量的交换记录。

- 选定流：Alternating current, on-site photovoltaic supply
- UUID 状态：未解析——拒绝了电压或净热值参考属性与该交换不匹配的光伏候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 11.0 MPaG 蒸汽 (`acetic_acid_formulation_steam_11mpag`)

将 Steam, 11.0 MPaG 作为一个独立计量的交换记录。

- 选定流：Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 80 °C 热水 (`acetic_acid_formulation_hot_water_80c`)

将 Hot water, 80 °C 作为一个独立计量的交换记录。

- 选定流：Hot water, 80 °C
- UUID 状态：未解析——未找到参考属性为有效热能的 80 °C 热水产品流精确候选。
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Energy / MJ
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 天然气燃料 (`acetic_acid_formulation_natural_gas`)

将 Natural gas in the gaseous state 作为一个独立计量的交换记录。

- 选定流：Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 液化石油气燃料 (`acetic_acid_formulation_liquefied_petroleum_gas`)

将 Liquefied petroleum gas 作为一个独立计量的交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 柴油燃料 (`acetic_acid_formulation_diesel_oil`)

将 Diesel oil 作为一个独立计量的交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 重油燃料 (`acetic_acid_formulation_heavy_oil`)

将 Heavy oil 作为一个独立计量的交换记录。

- 选定流：Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 沼气燃料 (`acetic_acid_formulation_biogas`)

将 Biogas, 50-80% methane 作为一个独立计量的交换记录。

- 选定流：Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 压缩空气 (`acetic_acid_formulation_compressed_air`)

将 Compressed air 作为一个独立计量的交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当 Compressed air 跨越食品级醋酸配制边界时纳入，否则省略。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-134a 制冷剂补充 (`acetic_acid_formulation_refrigerant_r134a`)

将 Refrigerant, R134a 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-717 氨制冷剂补充 (`acetic_acid_formulation_refrigerant_r717`)

将 Refrigerant, R717 ammonia 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R717 ammonia
- UUID 状态：未解析——拒绝了未确立制冷级或补充用途的无水氨候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-744 二氧化碳制冷剂补充 (`acetic_acid_formulation_refrigerant_r744`)

将 Refrigerant, R744 carbon dioxide 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R744 carbon dioxide
- UUID 状态：未解析——拒绝了描述为废气、化学试剂或焊接气体而非 R-744 制冷剂的二氧化碳候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 自来水 (`acetic_acid_formulation_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 工艺用地下水 (`acetic_acid_formulation_groundwater`)

将 Groundwater for process use 作为一个独立计量的交换记录。

- 选定流：Groundwater for process use
- UUID 状态：未解析——拒绝了不能表示食品工艺供水的地下水取用和灌溉候选。
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 冷却水 (`acetic_acid_formulation_cooling_water`)

将 Cooling water 作为一个独立计量的交换记录。

- 选定流：Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 去离子水 (`acetic_acid_formulation_deionized_water`)

将 Deionised water 作为一个独立计量的交换记录。

- 选定流：Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 回用工艺水 (`acetic_acid_formulation_reused_process_water`)

将 Process Water 作为一个独立计量的交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生醋酸代用品输出 (`raw_acetic_acid_substitute`)

将 Raw edible acetic-acid vinegar substitute 作为一个独立计量的交换记录。

- 选定流：Raw edible acetic-acid vinegar substitute
- UUID 状态：未解析——醋酸溶液候选为工业或湿法冶金中间体，而非食用代用品。
- 适用条件：醋酸代用品路线必须记录该输出；保留配方、酸度和批次关联。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

##### 废物流

###### 不合格醋酸代用品 (`formulation_rejected_substitute`)

按实测数量和去向单独记录 Rejected edible acetic-acid vinegar substitute。

- 选定流：Rejected edible acetic-acid vinegar substitute
- UUID 状态：未解析——废酸候选表示硫酸废物，已拒绝。
- 适用条件：仅当不合格代用品作为废物离开时纳入；内部返工省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 稀醋酸泄漏废物 (`formulation_acetic_acid_spill`)

按实测数量和去向单独记录 Dilute acetic acid spill waste。

- 选定流：Dilute acetic acid spill waste
- UUID 状态：未解析——废酸候选与稀食品级醋酸泄漏组成不符。
- 适用条件：仅适用于作为废物外运且未回收的醋酸泄漏。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 配制废水 (`formulation_wastewater`)

按实测数量和去向单独记录 Acetic-acid-formulation wastewater。

- 选定流：Acetic-acid-formulation wastewater
- UUID 状态：未解析——返回的残渣和非食品废水候选与配制废水不符。
- 适用条件：仅当该废水送处理或排放时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 生配制代用品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

### 过程：调配、澄清、稳定与放行 (`finishing`)

#### 输入

##### 产品流

###### 生发酵食醋投入 (`finishing_raw_fermentation_vinegar`)

将 Raw fermentation vinegar 作为一个独立计量的交换记录。

- 选定流：Raw fermentation vinegar
- UUID 状态：未解析——未找到精确的生发酵食醋流。
- 适用条件：仅适用于发酵食醋路线；对同一产品批次与生代用品投入互斥。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 生醋酸代用品投入 (`finishing_raw_acetic_acid_substitute`)

将 Raw edible acetic-acid vinegar substitute 作为一个独立计量的交换记录。

- 选定流：Raw edible acetic-acid vinegar substitute
- UUID 状态：未解析——未找到精确的食用生代用品流。
- 适用条件：仅适用于醋酸代用品路线；对同一产品批次与生发酵食醋互斥。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 稀释用自来水 (`finishing_dilution_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当最终稀释或调配加入自来水时纳入。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 柠檬酸 (`finishing_citric_acid`)

将 Citric Acid 作为一个独立计量的交换记录。

- 选定流：Citric Acid `80e2772b-119c-4565-a919-a70939d89dff`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当后处理投加柠檬酸时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 食品级盐 (`finishing_salt`)

将 Salt, food-grade 作为一个独立计量的交换记录。

- 选定流：Salt, food-grade `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当后处理投加盐时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 膨润土澄清剂 (`finishing_bentonite`)

将 Bentonite, wine clarification grade 作为一个独立计量的交换记录。

- 选定流：Bentonite, wine clarification grade `e01d9941-db32-46cb-b577-ebc584597a2d`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当使用膨润土澄清时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 硅藻土助滤剂 (`finishing_diatomaceous_earth`)

将 Diatomaceous earth filter aid 作为一个独立计量的交换记录。

- 选定流：Diatomaceous earth filter aid `af13e1e4-290c-412d-b3fe-dcba0b4c5b81`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当使用该助滤剂时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 明胶澄清剂 (`finishing_gelatin`)

将 Gelatin, purity above 99.5% 作为一个独立计量的交换记录。

- 选定流：Gelatin, purity above 99.5% `aa9b81c7-64ab-40a2-9419-50fedc25a2c7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当使用明胶澄清时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### PVPP 稳定剂 (`finishing_pvpp`)

将 Polyvinylpolypyrrolidone, beverage grade 作为一个独立计量的交换记录。

- 选定流：Polyvinylpolypyrrolidone, beverage grade
- UUID 状态：未解析——拒绝了未确立饮料级 PVPP 的非交联 PVP 和药用交联聚维酮候选。
- 适用条件：仅当投加饮料级 PVPP 时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 氢氧化钠清洗剂 (`finishing_sodium_hydroxide`)

将 Sodium hydroxide, 95-98% 作为一个独立计量的交换记录。

- 选定流：Sodium hydroxide, 95-98% `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当后处理清洗消耗该浓度时纳入；不同浓度应另建原子行。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 硝酸清洗剂 (`finishing_nitric_acid`)

将 Nitric acid, 50% aqueous solution 作为一个独立计量的交换记录。

- 选定流：Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当后处理清洗消耗该浓度时纳入；不同浓度应另行表示。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 过氧乙酸消毒剂 (`finishing_peracetic_acid`)

将 Peracetic acid disinfectant 作为一个独立计量的交换记录。

- 选定流：Peracetic acid disinfectant
- UUID 状态：未解析——检索返回酸性气体和聚丙烯酸类化学品，而非过氧乙酸消毒剂。
- 适用条件：仅当后处理卫生消毒消耗过氧乙酸时纳入，否则省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### 低压电网电力 (`finishing_electricity_low_voltage_grid`)

将 Alternating current, below 1 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, below 1 kV, grid consumption mix
- UUID 状态：未解析——拒绝了低于 1 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 中压电网电力 (`finishing_electricity_medium_voltage_grid`)

将 Alternating current, 1-35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, 1-35 kV, grid consumption mix
- UUID 状态：未解析——拒绝了 1–35 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 高压电网电力 (`finishing_electricity_high_voltage_grid`)

将 Alternating current, above 35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, above 35 kV, grid consumption mix
- UUID 状态：未解析——未找到参考属性为有效电力能量的高于 35 kV 消费组合精确候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 厂内光伏电力 (`finishing_electricity_onsite_photovoltaic`)

将 Alternating current, on-site photovoltaic supply 作为一个独立计量的交换记录。

- 选定流：Alternating current, on-site photovoltaic supply
- UUID 状态：未解析——拒绝了电压或净热值参考属性与该交换不匹配的光伏候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 11.0 MPaG 蒸汽 (`finishing_steam_11mpag`)

将 Steam, 11.0 MPaG 作为一个独立计量的交换记录。

- 选定流：Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 80 °C 热水 (`finishing_hot_water_80c`)

将 Hot water, 80 °C 作为一个独立计量的交换记录。

- 选定流：Hot water, 80 °C
- UUID 状态：未解析——未找到参考属性为有效热能的 80 °C 热水产品流精确候选。
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Energy / MJ
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 天然气燃料 (`finishing_natural_gas`)

将 Natural gas in the gaseous state 作为一个独立计量的交换记录。

- 选定流：Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 液化石油气燃料 (`finishing_liquefied_petroleum_gas`)

将 Liquefied petroleum gas 作为一个独立计量的交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 柴油燃料 (`finishing_diesel_oil`)

将 Diesel oil 作为一个独立计量的交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 重油燃料 (`finishing_heavy_oil`)

将 Heavy oil 作为一个独立计量的交换记录。

- 选定流：Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 沼气燃料 (`finishing_biogas`)

将 Biogas, 50-80% methane 作为一个独立计量的交换记录。

- 选定流：Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 压缩空气 (`finishing_compressed_air`)

将 Compressed air 作为一个独立计量的交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当 Compressed air 跨越调配、澄清、稳定与放行边界时纳入，否则省略。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-134a 制冷剂补充 (`finishing_refrigerant_r134a`)

将 Refrigerant, R134a 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-717 氨制冷剂补充 (`finishing_refrigerant_r717`)

将 Refrigerant, R717 ammonia 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R717 ammonia
- UUID 状态：未解析——拒绝了未确立制冷级或补充用途的无水氨候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-744 二氧化碳制冷剂补充 (`finishing_refrigerant_r744`)

将 Refrigerant, R744 carbon dioxide 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R744 carbon dioxide
- UUID 状态：未解析——拒绝了描述为废气、化学试剂或焊接气体而非 R-744 制冷剂的二氧化碳候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 自来水 (`finishing_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 工艺用地下水 (`finishing_groundwater`)

将 Groundwater for process use 作为一个独立计量的交换记录。

- 选定流：Groundwater for process use
- UUID 状态：未解析——拒绝了不能表示食品工艺供水的地下水取用和灌溉候选。
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 冷却水 (`finishing_cooling_water`)

将 Cooling water 作为一个独立计量的交换记录。

- 选定流：Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 去离子水 (`finishing_deionized_water`)

将 Deionised water 作为一个独立计量的交换记录。

- 选定流：Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 回用工艺水 (`finishing_reused_process_water`)

将 Process Water 作为一个独立计量的交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品散装食醋输出 (`finished_bulk_vinegar`)

将 Vinegar and substitutes therefor obtained from acetic acid 作为一个独立计量的交换记录。

- 选定流：Vinegar and substitutes therefor obtained from acetic acid `20393649-bcc3-43f0-a2df-1a99c0005e29`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅适用于代表性成品液态食醋路线；对同一批次与成品代用品输出互斥。
- 流属性/单位：Mass / kg
- 数量规则：在声明厂门处实测的净放行质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 声明的成品散装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_output`
- 来源：`unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100`

###### 成品散装醋酸代用品输出 (`finished_bulk_acetic_acid_substitute`)

将 Finished edible acetic-acid vinegar substitute 作为一个独立计量的交换记录。

- 选定流：Finished edible acetic-acid vinegar substitute
- UUID 状态：未解析——类别标注食醋流不能确立代用品身份，且未找到精确代用品流。
- 适用条件：仅适用于代用品路线；对同一批次与成品散装食醋互斥。
- 流属性/单位：Mass / kg
- 数量规则：在声明厂门处实测的净放行质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 声明的成品散装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_output`
- 来源：`eu-commission-2016-263`; `us-fda-cpg-562-100`

##### 废物流

###### 废硅藻土 (`finishing_spent_diatomaceous_earth`)

按实测数量和去向单独记录 Spent diatomaceous earth filter aid。

- 选定流：Spent diatomaceous earth filter aid
- UUID 状态：未解析——通用过滤残渣候选未确立废硅藻土身份。
- 适用条件：仅当硅藻土助滤剂作为废物离开时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 澄清污泥 (`finishing_clarification_sludge`)

按实测数量和去向单独记录 Vinegar clarification sludge。

- 选定流：Vinegar clarification sludge
- UUID 状态：未解析——通用沉积物和污泥候选未确立食醋澄清来源。
- 适用条件：仅当可归属澄清污泥离开过程时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 废过滤介质 (`finishing_spent_filter_media`)

按实测数量和去向单独记录 Spent food-grade filter media。

- 选定流：Spent food-grade filter media
- UUID 状态：未解析——返回的尾矿泥和通用过滤残渣候选未确立食品级过滤介质。
- 适用条件：仅当过滤介质被更换并离开前景边界时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 不合格成品食醋 (`finishing_rejected_vinegar`)

按实测数量和去向单独记录 Rejected finished fermentation vinegar。

- 选定流：Rejected finished fermentation vinegar
- UUID 状态：未解析——通用废液候选未保留发酵食醋身份。
- 适用条件：仅当不合格食醋作为废物离开时纳入；内部返工省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 不合格成品代用品 (`finishing_rejected_substitute`)

按实测数量和去向单独记录 Rejected finished acetic-acid vinegar substitute。

- 选定流：Rejected finished acetic-acid vinegar substitute
- UUID 状态：未解析——废酸候选不表示食用醋酸代用品。
- 适用条件：仅当不合格代用品作为废物离开时纳入；内部返工省略。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 后处理废水 (`finishing_wastewater`)

按实测数量和去向单独记录 Vinegar-finishing wastewater。

- 选定流：Vinegar-finishing wastewater
- UUID 状态：未解析——返回的工业清洗废水候选与食醋后处理不符。
- 适用条件：仅当后处理废水送处理或排放时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

###### 排入空气的醋酸 (`finishing_acetic_acid_air`)

仅按该命名基本交换及其声明环境介质记录 Acetic acid, to air unspecified。

- 选定流：Acetic acid, to air unspecified `08a91e70-3ddc-11dd-92c3-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于后处理或储存阶段实测或计算的排入未指定空气介质的醋酸。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入空气的化石二氧化碳 (`finishing_fossil_carbon_dioxide_air`)

仅按该命名基本交换及其声明环境介质记录 Carbon dioxide, fossil, to air unspecified。

- 选定流：Carbon dioxide, fossil, to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于范围内化石燃料燃烧；生物源二氧化碳单列。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入空气的化石一氧化碳 (`finishing_fossil_carbon_monoxide_air`)

仅按该命名基本交换及其声明环境介质记录 Carbon monoxide, fossil, to air unspecified。

- 选定流：Carbon monoxide, fossil, to air unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅当范围内燃烧产生实测或计算的化石一氧化碳时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入非城市空气的一氧化氮 (`finishing_nitrogen_monoxide_air`)

仅按该命名基本交换及其声明环境介质记录 Nitrogen monoxide, to non-urban air or high stacks。

- 选定流：Nitrogen monoxide, to non-urban air or high stacks `fe0acd60-3ddc-11dd-aa19-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅当实测物种和声明介质与该流相符时纳入；不得作为总氮氧化物占位。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入空气的硫氧化物 (`finishing_sulfur_oxides_air`)

仅按该命名基本交换及其声明环境介质记录 Sulfur oxides, to air unspecified。

- 选定流：Sulfur oxides, to air unspecified `fe0acd60-3ddc-11dd-a207-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测或计算的排入未指定空气介质的硫氧化物。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入空气的 PM2.5 (`finishing_pm25_air`)

仅按该命名基本交换及其声明环境介质记录 Particles, PM2.5, to air unspecified。

- 选定流：Particles, PM2.5, to air unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测或计算的排入未指定空气介质的 PM2.5。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入空气的 HFC-134a (`finishing_r134a_air`)

仅按该命名基本交换及其声明环境介质记录 HFC-134a, to air unspecified。

- 选定流：HFC-134a, to air unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅当泄漏归属于范围内 R-134a 设备时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入空气的氨 (`finishing_ammonia_air`)

仅按该命名基本交换及其声明环境介质记录 Ammonia, to air unspecified。

- 选定流：Ammonia, to air unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅当泄漏归属于范围内氨设备或存在实测氨排放时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入空气的化石甲烷 (`finishing_methane_air`)

仅按该命名基本交换及其声明环境介质记录 Methane, fossil, to air unspecified。

- 选定流：Methane, fossil, to air unspecified `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测或计算的化石甲烷排放；生物源甲烷单列。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入水体的化学需氧量 (`finishing_cod_water`)

仅按该命名基本交换及其声明环境介质记录 Chemical Oxygen Demand, to water unspecified。

- 选定流：Chemical Oxygen Demand, to water unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于排入未指定水体介质且实测 COD 的直接排放。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入淡水的生化需氧量 (`finishing_bod_freshwater`)

仅按该命名基本交换及其声明环境介质记录 Biological oxygen demand, to fresh water。

- 选定流：Biological oxygen demand, to fresh water `08a91e70-3ddc-11dd-97de-0050c2490048`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测 BOD 的直接淡水排放。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入淡水的总氮 (`finishing_total_nitrogen_freshwater`)

仅按该命名基本交换及其声明环境介质记录 Nitrogen, total excluding N2, to fresh water。

- 选定流：Nitrogen, total excluding N2, to fresh water `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测不含 N2 总氮的直接淡水排放。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

###### 排入淡水的总磷 (`finishing_total_phosphorus_freshwater`)

仅按该命名基本交换及其声明环境介质记录 Phosphorus, total, to fresh water。

- 选定流：Phosphorus, total, to fresh water `f9df3107-6b59-4067-b920-3c61cf3630c7`
- UUID 状态：已在 state_code 100 核验：基本流；参考属性与 Mass 匹配
- 适用条件：仅适用于实测总磷的直接淡水排放。
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或依据采集的运行、排放或组成数据进行有记录的计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品散装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emissions`
- 来源：`jrc-fdm-bref-2019`

### 过程：初级与次级包装 (`packaging`)

#### 输入

##### 产品流

###### 成品散装食醋投入 (`packaging_bulk_vinegar`)

将 Vinegar and substitutes therefor obtained from acetic acid 作为一个独立计量的交换记录。

- 选定流：Vinegar and substitutes therefor obtained from acetic acid `20393649-bcc3-43f0-a2df-1a99c0005e29`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅适用于包装代表性成品液态食醋；对同一包装批次与代用品投入互斥。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`unsd-cpc-v3-2025`; `jrc-fdm-bref-2019`

###### 成品散装代用品投入 (`packaging_bulk_substitute`)

将 Finished edible acetic-acid vinegar substitute 作为一个独立计量的交换记录。

- 选定流：Finished edible acetic-acid vinegar substitute
- UUID 状态：未解析——未找到精确的食用代用品流。
- 适用条件：仅适用于包装代用品路线；对同一包装批次与食醋投入互斥。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 玻璃瓶 (`packaging_glass_bottle`)

将 Glass bottle for food liquids 作为一个独立计量的交换记录。

- 选定流：Glass bottle for food liquids
- UUID 状态：未解析——拒绝了平板玻璃和玻璃罐候选，因为两者均未确立食品液体用瓶身份。
- 适用条件：仅当玻璃瓶随声明产品离厂时纳入；塑料容器路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### PET 瓶 (`packaging_pet_bottle`)

将 PET bottle for food liquids 作为一个独立计量的交换记录。

- 选定流：PET bottle for food liquids
- UUID 状态：未解析——拒绝了瓶级 PET 粒料和 rPET 瓶片，因为它们是材料而非成品瓶。
- 适用条件：仅当 PET 瓶随声明产品离厂时纳入；玻璃或 HDPE 路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### HDPE 瓶 (`packaging_hdpe_bottle`)

将 HDPE bottle for food liquids 作为一个独立计量的交换记录。

- 选定流：HDPE bottle for food liquids
- UUID 状态：未解析——未找到 HDPE 食品液体瓶候选；保温瓶和通用容器命中被拒绝。
- 适用条件：仅当 HDPE 瓶随声明产品离厂时纳入；玻璃或 PET 路线省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 塑料封盖 (`packaging_plastic_closure`)

将 Plastic packaging closure cap 作为一个独立计量的交换记录。

- 选定流：Plastic packaging closure cap `bab04179-3799-4eff-b12b-edaec382520c`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当塑料封盖随产品离厂时纳入；铝盖包装批次省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 铝螺旋盖 (`packaging_aluminium_closure`)

将 Aluminium screw cap closure 作为一个独立计量的交换记录。

- 选定流：Aluminium screw cap closure `c37f87ea-0b43-43d6-a300-b142ea358cb7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当铝螺旋盖随产品离厂时纳入；塑料封盖包装批次省略。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 纸标签 (`packaging_paper_label`)

将 Label, paper 作为一个独立计量的交换记录。

- 选定流：Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当纸标签随产品离厂时纳入。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 瓦楞纸板纸箱 (`packaging_corrugated_cardboard`)

将 Corrugated cardboard, type C, E, or F 作为一个独立计量的交换记录。

- 选定流：Corrugated cardboard, type C, E, or F `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该瓦楞纸板等级随产品离厂时纳入；不同等级另行表示。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### LDPE 缠绕膜 (`packaging_ldpe_stretch_film`)

将 LDPE stretch film 作为一个独立计量的交换记录。

- 选定流：LDPE stretch film
- UUID 状态：未解析——拒绝了未确立 LDPE 缠绕膜形态的聚乙烯树脂候选。
- 适用条件：仅当 LDPE 缠绕膜随托盘化产品离厂时纳入。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 木托盘 (`packaging_wooden_pallet`)

将 Pallets and load boards of wood 作为一个独立计量的交换记录。

- 选定流：Pallets and load boards of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当木托盘可归属于发运产品时纳入。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 氢氧化钠清洗剂 (`packaging_sodium_hydroxide`)

将 Sodium hydroxide, 95-98% 作为一个独立计量的交换记录。

- 选定流：Sodium hydroxide, 95-98% `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当包装线消耗该浓度时纳入；不同浓度另行表示。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 硝酸清洗剂 (`packaging_nitric_acid`)

将 Nitric acid, 50% aqueous solution 作为一个独立计量的交换记录。

- 选定流：Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当包装线消耗该浓度时纳入；不同浓度另行表示。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 过氧乙酸消毒剂 (`packaging_peracetic_acid`)

将 Peracetic acid disinfectant 作为一个独立计量的交换记录。

- 选定流：Peracetic acid disinfectant
- UUID 状态：未解析——未找到过氧乙酸消毒剂产品流。
- 适用条件：仅当包装线消耗过氧乙酸时纳入。
- 流属性/单位：Mass / kg
- 数量规则：按计量、称量或批记录数量，并与采购、库存、转移或发运记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 低压电网电力 (`packaging_electricity_low_voltage_grid`)

将 Alternating current, below 1 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, below 1 kV, grid consumption mix
- UUID 状态：未解析——拒绝了低于 1 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 中压电网电力 (`packaging_electricity_medium_voltage_grid`)

将 Alternating current, 1-35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, 1-35 kV, grid consumption mix
- UUID 状态：未解析——拒绝了 1–35 kV 的候选，因为 flow get 报告参考属性为净热值，而非电力能量参考属性。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 高压电网电力 (`packaging_electricity_high_voltage_grid`)

将 Alternating current, above 35 kV, grid consumption mix 作为一个独立计量的交换记录。

- 选定流：Alternating current, above 35 kV, grid consumption mix
- UUID 状态：未解析——未找到参考属性为有效电力能量的高于 35 kV 消费组合精确候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 厂内光伏电力 (`packaging_electricity_onsite_photovoltaic`)

将 Alternating current, on-site photovoltaic supply 作为一个独立计量的交换记录。

- 选定流：Alternating current, on-site photovoltaic supply
- UUID 状态：未解析——拒绝了电压或净热值参考属性与该交换不匹配的光伏候选。
- 适用条件：仅当计量电力属于该电压和供给情景时纳入；同一电表不得在另一个电力行重复。
- 流属性/单位：Energy / kWh
- 数量规则：分表电量，或依据功率和运行时间形成的有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 11.0 MPaG 蒸汽 (`packaging_steam_11mpag`)

将 Steam, 11.0 MPaG 作为一个独立计量的交换记录。

- 选定流：Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 购入 80 °C 热水 (`packaging_hot_water_80c`)

将 Hot water, 80 °C 作为一个独立计量的交换记录。

- 选定流：Hot water, 80 °C
- UUID 状态：未解析——未找到参考属性为有效热能的 80 °C 热水产品流精确候选。
- 适用条件：仅当该购入热载体跨越过程边界时纳入；若厂内燃料行已完整表示同一热量，则省略。
- 流属性/单位：Energy / MJ
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 天然气燃料 (`packaging_natural_gas`)

将 Natural gas in the gaseous state 作为一个独立计量的交换记录。

- 选定流：Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 液化石油气燃料 (`packaging_liquefied_petroleum_gas`)

将 Liquefied petroleum gas 作为一个独立计量的交换记录。

- 选定流：Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 柴油燃料 (`packaging_diesel_oil`)

将 Diesel oil 作为一个独立计量的交换记录。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 重油燃料 (`packaging_heavy_oil`)

将 Heavy oil 作为一个独立计量的交换记录。

- 选定流：Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 沼气燃料 (`packaging_biogas`)

将 Biogas, 50-80% methane 作为一个独立计量的交换记录。

- 选定流：Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当该燃料为本过程燃烧时纳入；不得重复购入蒸汽或热水已表示的热量。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 压缩空气 (`packaging_compressed_air`)

将 Compressed air 作为一个独立计量的交换记录。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Volume 匹配
- 适用条件：仅当 Compressed air 跨越初级与次级包装边界时纳入，否则省略。
- 流属性/单位：Volume / m3
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-134a 制冷剂补充 (`packaging_refrigerant_r134a`)

将 Refrigerant, R134a 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-717 氨制冷剂补充 (`packaging_refrigerant_r717`)

将 Refrigerant, R717 ammonia 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R717 ammonia
- UUID 状态：未解析——拒绝了未确立制冷级或补充用途的无水氨候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### R-744 二氧化碳制冷剂补充 (`packaging_refrigerant_r744`)

将 Refrigerant, R744 carbon dioxide 作为一个独立计量的交换记录。

- 选定流：Refrigerant, R744 carbon dioxide
- UUID 状态：未解析——拒绝了描述为废气、化学试剂或焊接气体而非 R-744 制冷剂的二氧化碳候选。
- 适用条件：仅当该制冷剂补充量归属于范围内冷却设备时纳入；泄漏量另列为基本流输出。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 自来水 (`packaging_tap_water`)

将 Tap water 作为一个独立计量的交换记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 工艺用地下水 (`packaging_groundwater`)

将 Groundwater for process use 作为一个独立计量的交换记录。

- 选定流：Groundwater for process use
- UUID 状态：未解析——拒绝了不能表示食品工艺供水的地下水取用和灌溉候选。
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 冷却水 (`packaging_cooling_water`)

将 Cooling water 作为一个独立计量的交换记录。

- 选定流：Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 去离子水 (`packaging_deionized_water`)

将 Deionised water 作为一个独立计量的交换记录。

- 选定流：Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

###### 回用工艺水 (`packaging_reused_process_water`)

将 Process Water 作为一个独立计量的交换记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID 状态：已在 state_code 100 核验：产品流；参考属性与 Mass 匹配
- 适用条件：仅针对该声明水源和用途纳入；同一水量不得在另一个水行重复。
- 流属性/单位：Mass / kg
- 数量规则：分表、发票、称量或有记录的分配用量，并与设施总量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_utilities`
- 来源：`jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装成品食醋输出 (`packaged_finished_vinegar`)

将 Packaged finished liquid vinegar 作为一个独立计量的交换记录。

- 选定流：Packaged finished liquid vinegar
- UUID 状态：未解析——经核验的类别流未声明包装状态，因此未复用于该包装输出。
- 适用条件：仅适用于包装成品液态食醋；对同一包装批次与包装代用品输出互斥。
- 流属性/单位：Mass / kg
- 数量规则：不含包装质量的实测净灌装产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_output`
- 来源：`unsd-cpc-v3-2025`

###### 包装成品代用品输出 (`packaged_finished_substitute`)

将 Packaged edible acetic-acid vinegar substitute 作为一个独立计量的交换记录。

- 选定流：Packaged edible acetic-acid vinegar substitute
- UUID 状态：未解析——未找到精确的包装食用代用品流。
- 适用条件：仅适用于包装代用品；对同一包装批次与包装食醋输出互斥。
- 流属性/单位：Mass / kg
- 数量规则：不含包装质量的实测净灌装产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净包装产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_output`
- 来源：`unsd-cpc-v3-2025`

##### 废物流

###### 废玻璃瓶 (`packaging_waste_glass_bottle`)

按实测数量和去向单独记录 Waste glass bottles from filling。

- 选定流：Waste glass bottles from filling
- UUID 状态：未解析——可用玻璃废物候选绑定晶圆生产，已拒绝。
- 适用条件：仅当玻璃瓶在前景边界内破损或被拒收时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 废 PET 瓶 (`packaging_waste_pet_bottle`)

按实测数量和去向单独记录 Waste PET bottles。

- 选定流：Waste PET bottles `8874aca6-2ff9-4aef-be62-5cd02f20dc97`
- UUID 状态：已在 state_code 100 核验：废物流；参考属性与 Mass 匹配
- 适用条件：仅当 PET 瓶在前景边界内成为废物时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 废 HDPE 瓶 (`packaging_waste_hdpe_bottle`)

按实测数量和去向单独记录 Waste HDPE bottles。

- 选定流：Waste HDPE bottles
- UUID 状态：未解析——通用废聚乙烯候选不能区分 HDPE 瓶废物和 LDPE 膜废物。
- 适用条件：仅当 HDPE 瓶在前景边界内成为废物时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 废铝封盖 (`packaging_waste_aluminium_closure`)

按实测数量和去向单独记录 Waste aluminium screw-cap closures。

- 选定流：Waste aluminium screw-cap closures
- UUID 状态：未解析——拒绝了不表示场内封盖废料的消费后及无关铝废物候选。
- 适用条件：仅当铝封盖在前景边界内成为废物时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 废纸标签 (`packaging_waste_paper_label`)

按实测数量和去向单独记录 Packaging waste, paper。

- 选定流：Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- UUID 状态：已在 state_code 100 核验：废物流；参考属性与 Mass 匹配
- 适用条件：仅当纸标签在前景边界内成为废物时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 废瓦楞纸板 (`packaging_waste_corrugated_cardboard`)

按实测数量和去向单独记录 Packaging waste, cardboard。

- 选定流：Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- UUID 状态：已在 state_code 100 核验：废物流；参考属性与 Mass 匹配
- 适用条件：仅当瓦楞纸板在前景边界内成为废物时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 废 LDPE 缠绕膜 (`packaging_waste_ldpe_stretch_film`)

按实测数量和去向单独记录 Waste LDPE stretch film。

- 选定流：Waste LDPE stretch film
- UUID 状态：未解析——通用废聚乙烯候选未确立 LDPE 缠绕膜形态。
- 适用条件：仅当 LDPE 缠绕膜在前景边界内成为废物时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

###### 废木托盘 (`packaging_waste_wooden_pallet`)

按实测数量和去向单独记录 Waste wooden pallets。

- 选定流：Waste wooden pallets
- UUID 状态：未解析——通用木废物候选未确立托盘身份和包装线来源。
- 适用条件：仅当木托盘在前景边界内被废弃时纳入。
- 流属性/单位：Mass / kg
- 数量规则：实测发运量或有记录的物料平衡结果；保留去向特定记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`jrc-fdm-bref-2019`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有多功能过程 | 首先通过分设仪表、批次记录、设备时间和物料记录避免分配，使输入输出直接归属于声明产品。仅在有充分理由且报告扩展功能时使用系统扩展。 | `eu-pef-2021-2279` |
| `allocation_physical` | 不可分离共产品 | 若无法细分或合理系统扩展，应采用与共享过程相关且有记录的因果物理关系，例如实测质量、干物质、酸含量或加工时间。解释该关系为何代表资源使用；在质量并非因果驱动时不得默认按质量分配。 | `eu-pef-2021-2279` |
| `allocation_other` | 无可辩护物理关系 | 仅当无法建立相关物理关系时，才采用经济价值等其他关系。记录价格基准、地理、时期、币种、共产品数量和敏感性。 | `eu-pef-2021-2279` |
| `allocation_waste_rework` | 废物、残余物和返工料 | 内部返工保留已记录负荷，不计为新的外部输入或共产品。分配前根据有记录的去向和经济功能，将输出分类为废物或共产品；披露任何分配的负荷或抵扣。 | `eu-pef-2021-2279`; `jrc-fdm-bref-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_output` | `finishing`; `packaging` | 成品标识和产出 | 放行、实验室和发运记录 | 产品名称；路线；基质或醋酸来源；酸度；方法；物理形态；处理；包装状态；流 UUID；批次；净重；换算时的密度 | 核对质量放行和经校准的质量记录；记录所选流为何精确匹配或为何属于已披露代理 | kg 加声明的质量单位 | 每批次，按月或年汇总 | 有代表性的连续 12 个月，或声明的较短生产活动中的全部批次 | 每个纳入场址和生产线 | 按产品和路线汇总放行净重；获得独立结果前不得跨路线平均 | 校准、实验室方法、批次放行、流选择记录、发运核对 |
| `cp_material_inputs` | 所有耗用物料的过程 | 原料、醋酸、水、培养物、配料、辅料和内部转移 | 收货、库存、配方、计量和转移记录 | 物料标识；供应商；流 UUID；批次；路线；数量；单位；浓度；密度；期初库存；收货；期末库存；退货；内部转移 | 将采购和库存移动与批次领用核对；区分内部循环和外部输入 | kg 或带换算证据的声明原始单位 | 每次收货和每批次 | 与产品产出相同期间 | 每个纳入场址和路线 | 消耗量等于期初库存加收货减期末库存、退货和有记录转移；路线分离后再归一化 | 供应商规格、秤或仪表校准、库存核对、批次单 |
| `cp_energy_utilities` | 所有过程 | 电力、燃料、蒸汽、冷却、水和清洁公用工程 | 分表、发票和运行记录 | 仪表 id；载能体；期初和期末读数；数量；单位；过程或生产线；运行小时；分配驱动 | 优先使用过程分表；否则用有记录物理驱动分配设施总量并与发票核对 | 声明的能量或质量单位 | 连续或每批次；按月汇总 | 与产品产出相同期间 | 每个纳入场址 | 扣除排除用途，分配直接计量，用有记录方法分配剩余总量，再归一化至适用过程产出 | 仪表校准、发票核对、分配工作表 |
| `cp_process_operation` | `alcoholic_fermentation`; `acetification`; `acetic_acid_formulation`; `finishing` | 路线和运行状态 | 批次日志和控制系统记录 | 路线；设备；起止时间；输入和输出批次；技术；曝气或混合基准；温度；陈酿时长；过滤；热处理；返工 | 获取同步的批次和控制系统记录；链接全部内部中间体转移 | 声明的运行单位 | 每批次 | 报告期内全部批次 | 每条纳入生产线 | 保留批次级路线标识；只汇总同类产品和技术 | 签署批次记录、控制系统导出、偏差日志 |
| `cp_process_outputs` | `feedstock_preparation`; `alcoholic_fermentation`; `acetification`; `acetic_acid_formulation` | 内部中间产出 | 经校准容器、秤和转移记录 | 中间体标识；批次；质量或体积；密度；浓度；发送方；接收方；损失 | 核对发送方和接收方转移记录，并用实测密度进行体积换算 | kg | 每次转移 | 报告期内全部转移 | 每个纳入场址 | 汇总核对后接受的转移；保持路线特定中间体分离 | 校准、成对转移记录、质量平衡核对 |
| `cp_waste_emissions` | 所有过程 | 废物、废水和直接排放 | 废物票据、废水计量和分析、排放监测及计算记录 | 流标识；状态；数量；单位；去向；处理；化石或生物源基准；采样和计算方法 | 尽可能在源头测量；否则根据采集的活动数据作有记录计算，不得虚构因子 | kg 或声明的排放单位 | 每次发运、排放、采样或批次；按月汇总 | 与产品产出相同期间 | 每个纳入场址和排放点 | 按流和去向汇总；归一化前保持测量和计算结果分离 | 联单、实验室报告、仪表校准、公式和输入追溯 |
| `cp_packaging_records` | `packaging` | 包装材料、包装产品和废料 | 物料清单、领用、计数、灌装重量和拒收记录 | 包装材料；供应商；流 UUID；单件质量；领用件数；包装件数；拒收；净灌装质量 | 核对包装领用、拒收和包装件数；用实测单件质量核验件数到质量的换算 | kg | 每次包装运行 | 报告期内全部纳入运行 | 每条纳入包装线 | 按包装材料汇总；按产品净重而非包装总重归一化 | 包装规格、抽样称量、灌装控制和拒收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 路线特定清单数量除以相同路线、场址和期间的放行产品净重 | 采集的清单数量；放行产品净重 | 每 1 kg 参考产品的数量 |  |
| `calc_volume_to_mass` | 任何以体积记录的液体 | 质量 = 实测体积乘以记录条件下产品或批次特定的实测密度 | 体积；密度；测量温度和方法 | kg 液体 |  |
| `calc_mass_reconciliation` | 每个前景过程 | 核对外部输入和内部接收转移与产品、内部发送转移、废物、排放、库存变化及有记录的测量差；调查物料差异，不得强行平账 | 全部实测质量输入、输出、转移、库存变化、废物和排放 | 过程质量平衡检查和披露的残差 | `jrc-fdm-bref-2019` |
| `calc_allocation` | 共享过程 | 直接归属后应用第 7 节有记录的层级；保留所选驱动以及全部分子和分母数值 | 直接归属记录；共产品数量；物理驱动或经济数据 | 按产品分配的清单 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和物料流 | 产品形态、路线、基质或醋酸来源、物理状态、包装状态和所选流 UUID 必须可追溯。使用代表 UUID 需要明确的精确使用声明；所有替换都需要理由。 | 产品规格、批次记录、供应商记录、天工流回读或选择记录 |
| `dq_measurement` | 质量、体积、能源、水、废物和排放数据 | 使用经校准仪表或经核对记录；保留换算、密度、采样、实验室和分配方法。 | 校准证书、发票、仪表日志、实验室报告、核对工作表 |
| `dq_temporal` | 所有前景记录 | 覆盖有代表性的 12 个月，或声明的较短生产活动中的全部批次，并解释停产、季节效应和排除批次。 | 生产日历、批次清单、期间完整性检查 |
| `dq_completeness` | 过程图和清单 | 检查每个适用过程以及全部材料、能源、水、产品、废物、废水和直接排放路径；量化或说明每项排除。 | 签署的边界检查表、质量平衡、公用工程和废物核对 |
| `dq_route_separation` | 多路线工厂 | 在任何汇总前，保持发酵食醋和醋酸代用品的活动与产出数据分离。 | 路线编码批次记录、分表或有记录的分配记录 |
| `dq_source_fitness` | 上游数据集和外部规则 | 匹配上游地理、技术、时间和产品标识；披露代理，不得将司法管辖区特定产品规格转化为通用限值。 | 数据集元数据、来源适用性说明、代理登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_category_and_route` | 产品标识 | 确认产品属于 CPC 3.0 代码 23994，并且恰好声明一条产品路线。配制醋酸代用品不得标记或建模为发酵食醋。 | `unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100` |
| `validate_reference_identity` | 参考流 | 确认 1 kg 产品净重、Mass UUID、Units of mass UUID、kg、必需限定信息和所选产品流 UUID。若将代表 UUID 用于代用品或其他实质不同形态，且未记录代理及更具体真实流检索，则校验失败。 |  |
| `validate_route_processes` | 过程图 | 发酵食醋数据包必须纳入醋酸发酵，并在场内进行时纳入原料制备或酒精发酵。代用品数据包必须纳入食品级醋酸配制。所有数据包必须纳入后处理和有条件包装。 | `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar` |
| `validate_boundary_completeness` | 前景清单 | 根据源记录检查适用的材料、能源、水、清洁、内部转移、废物、废水、直接排放和产品行，并调查无法解释的质量平衡残差。 | `jrc-fdm-bref-2019` |
| `validate_allocation` | 共享过程 | 核实首先尝试了直接归属，所选分配关系相关且有记录，并且只有在证明前序层级步骤不可行后才使用经济分配。 | `eu-pef-2021-2279` |
| `validate_temporal_coverage` | 报告期 | 核实生产、物料、公用工程、废物、排放和产品产出记录覆盖相同的声明期间和场址，并披露缺口。 | `jrc-fdm-bref-2019` |
| `validate_packaging_state` | 工厂门产出 | 当产出为包装产品时确认存在包装清单；当声明产出为散装时确认包装未纳入或单独排除；产品质量必须保持为不含包装的净重。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明的一种食醋或可食用醋酸基食醋代用品的工厂门前景制造数据集 |
| downstream_use | `secondary_dataset`；当产品、路线、地理、时间、技术和包装状态对接收模型有代表性时可作为 `background_dataset` |
| allowed_use | 产品碳足迹和 LCA 研究、前景过程构建、供应商数据替换，以及在声明产品和路线范围内作为背景使用 |
| excluded_use | 发酵食醋与醋酸代用品之间的静默替代；未经所需替换检查将代表 UUID 用于其他形态；未增加下游阶段的消费者使用或从摇篮到坟墓声明；代表性存在实质差异时的比较断言 |
| required_metadata | canonical PCR id；CPC 坐标；产品名称和形态；路线；基质或醋酸来源；酸度和方法；物理和包装状态；所选流 UUID 和替换理由；地理；场址和技术；报告期；边界；分配；上游数据集；数据所有者和审核状态 |
| required_quality_disclosure | 初级数据占比；测量和校准基准；期间和场址覆盖；路线分离；质量平衡残差；分配选择；代理流和数据集；排除过程；废水和排放覆盖；不确定性和审核状态 |
| update_trigger | 产品形态、路线、原料或醋酸来源、技术、场址、酸度规格、包装状态、分配、材料供应商、能源结构、废水处理、报告期、适用市场规格发生变化，或出现更具体的真实天工产品流 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 23994, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-10 | 类别范围和名称 |
| `eu-commission-2016-263` | `standard` | Commission Regulation (EU) 2016/263, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0263, retrieved 2026-08-10 | 农产品来源食醋与可食用稀释醋酸的区分及共同食品类别处理 |
| `spain-rd-661-2012-consolidated-2026` | `standard` | Spain, Real Decreto 661/2012 consolidated through 27 February 2026, ELI https://www.boe.es/eli/es/rd/2012/04/13/661/con, retrieved 2026-08-10 | 食醋定义、允许过程路线、原料、后处理、包装和质量披露的现行官方实例；司法管辖区特定限值不作为 PCR 通用默认值 |
| `us-fda-cpg-562-100` | `official_guidance` | U.S. FDA CPG Sec. 562.100, Acetic Acid - Use in Foods - Labeling of Foods in Which Used, https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cpg-sec-562100-acetic-acid-use-foods-labeling-foods-which-used, retrieved 2026-08-10 | 食醋与稀释食品级醋酸的产品标识区分 |
| `mas-et-al-2014-wine-vinegar` | `literature` | Mas, Torija, García-Parrilla and Troncoso, Acetic Acid Bacteria and the Production and Quality of Wine Vinegar, 2014, DOI 10.1155/2014/394671 | 发酵食醋过程分解、需氧醋酸发酵技术、陈酿和质量决定因素 |
| `jrc-fdm-bref-2019` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, DOI 10.2760/243911 | 食品制造通用操作及水、能源、清洁、排放和废水的前景采集重点 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02021H2279-20211230, retrieved 2026-08-10 | 系统边界、多功能性、细分、物理分配和后备分配层级 |
