---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-leather-other-than-sports-footwear-footwear-incorporating-a-pro-ef9e7096
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他皮革鞋

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 29330 下、鞋帮为皮革且作为完整成品交付的非运动鞋类的工厂门前景数据生产。产品必须用于保护或覆盖足部并装有鞋底，可包括鞋、靴、乐福鞋及同类非运动皮革鞋。

运动鞋、防护金属鞋头鞋、其他专用鞋、非皮革鞋帮鞋、玩具鞋、一次性鞋、带鞋底袜、电子鞋、皮革片材、鞋帮、鞋底、内底及其他鞋类零部件不在范围内。成品革和外购部件的上游生产通过独立数据集连接。分销、消费者使用、维修和生命末期不属于本前景生产边界。

## 2. 产品类别标识

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-leather-other-than-sports-footwear-footwear-incorporating-a-pro-ef9e7096 |
| classification_refs | CPC 3.0: 29330, exact |
| covered_products | 鞋帮为皮革的完整非运动成品鞋，不包括防护金属鞋头鞋和其他专用鞋 |
| excluded_products | 运动鞋；防护金属鞋头鞋；其他专用鞋；非皮革鞋帮鞋；电子鞋、玩具鞋或一次性鞋；带鞋底袜；鞋类部件和皮革中间产品 |
| representative_product | 一件装有鞋底、面向消费市场的皮革鞋帮成品鞋或靴 |
| production_route | 接收成品革和部件；裁切及部件准备；鞋帮缝制；绷帮、鞋底连接、最终装配和整饰；包装 |
| market_state | 装配场址门口的完整成品鞋；天工消费混合；数据集声明型号、尺码、计数约定、完成状态、地理范围和参考期 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供一件用于保护或覆盖足部并装有鞋底的完整其他皮革鞋 |
| How much | 1 Item(s)，数据集须声明计数市场单位是一只实体鞋还是一双上市鞋 |
| How well | 已完成、可销售，并符合声明的型号、尺码、皮革鞋帮规格、外底规格及适用耐久性要求 |
| How long or cycle | 一个工厂门生产周期；该生产参考流不代表分销、使用寿命、维修或生命末期 |
| reference_flow_link | `final_other_leather_shoes` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | 其他皮革鞋 `985ca5fa-699a-411e-b304-0398fc7b4865` |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | 计数市场单位及实体鞋只数；产品型号和鞋类类型；尺码体系和参考尺码；鞋帮皮革物种及整饰；鞋里材料；外底和中底材料；装配及整饰路线；成品可销售状态；生产地理范围；参考期 |

构建前景数据包时，必须在数据集元数据、过程注释、参考流注释、产品描述或等效数据包字段中声明 `Required qualifiers` 所列项目。缺少任何必需限定信息，均使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 将每项交换归一化到 1 Item(s) 合格产出，并保留声明的天工计数约定。 |
| `pair_record_conversion` | 以双报告的生产或销售记录 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 保留双数和实体鞋只数；仅在记录天工 1 Item(s) 是一只实体鞋还是一双上市鞋后转换，不得预设换算系数。 |
| `material_mass_basis` | 纳入产品的材料、化学品、废物和直接排放 | 质量 | kg | 分别记录净纳入质量、毛投入质量和单独识别的损失或废物质量，不得以一种材料抵销另一种材料。 |
| `energy_carrier_basis` | 电力、蒸汽、外购热力和燃料 | 能量或低位热值 | kWh 或 MJ | 每种载能体作为独立交换，记录计量或发票单位，并记录换算至报告单位的全部系数。 |
| `water_basis` | 工艺用水和废水 | 体积 | m3 | 分别记录供水和排放废水；没有文件化水平衡时不得互相推算。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 成品鞋帮革、成品鞋里材料、外底或鞋底材料及其他外购部件进入首个受控鞋类制造操作。 |
| starting_condition_role | 声明的起始条件将鞋类前景制造与上游皮革、聚合物、纺织品、金属、化学品和包装生产分开。 |
| product_classification_scope | 仅 CPC 3.0 代码 29330 内的完整皮革鞋帮成品鞋。 |
| recursive_input_rule | 同类别完整鞋类投入仍作为独立产品投入，不得并入参考产出；披露其先前生产阶段和上游数据集。 |
| upstream_dataset_requirement | 每项外购材料、部件、公用工程、燃料和处理服务须连接具有地理与技术代表性的上游数据集，或记录数据缺口。 |
| disclosure | 声明供给部件状态、外包操作、装配和整饰技术、鞋帮皮革物种、鞋底结构、公用工程供应、溶剂控制、废物去向、产出计数约定、地理范围和参考期。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 受控鞋类制造 | 纳入裁切或成形、部件准备、鞋帮缝制、绷帮和鞋底连接、最终装配、实际实施的整饰、包装、可直接归属的公用工程、直接排放、废水、次品及分别识别的废物。 | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `boundary_purchased_inputs` | 外购皮革、部件、化学品、包装、公用工程、燃料和服务 | 每项外购投入记录为一个原子交换并连接其上游生产；除非同一报告组织控制并单独记录皮革生产，否则不得将上游皮革制造纳入鞋类前景过程。 | `rossi-et-al-2021-leather-shoe-lca`; `navarro-et-al-2020-leather-lca` |
| `boundary_downstream_exclusion` | 分销、使用、维修和生命末期 | 从本工厂门生产数据集中排除下游阶段；研究目标要求从摇篮到坟墓时，由下游生命周期模型补充。 | `ec-pefcr-apparel-footwear-2025`; `iso-14044-2006` |
| `boundary_no_hidden_cutoff` | 实际物料清单和过程记录 | 核对所有实际纳入材料、制造损失、公用工程、燃料、制冷剂、化学品、包装部件、废物、废水和直接排放；未列出的实际交换须新增独立原子行，不得隐藏在集合名称中。 | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_cutting_preparation` | 部件裁切与准备 | required | 受控鞋帮、鞋里、鞋底和中底部件准备始终纳入；外购预裁部件仍作为显式投入，并披露未执行的裁切步骤。 | 前景部件准备 | 每 1 Item(s) 合格包装产出 |
| `upper_stitching` | 鞋帮缝制与分总成 | required | 始终纳入；外包缝制以服务关联的上游数据集表示，缝制鞋帮仍作为最终装配投入。 | 前景鞋帮生产 | 每 1 Item(s) 合格包装产出 |
| `final_assembly_finishing` | 绷帮、鞋底连接、最终装配和整饰 | required | 始终纳入装配；仅在声明产品实际采用时纳入各项整饰操作和化学品。 | 前景最终制造 | 每 1 Item(s) 合格包装产出 |
| `packaging` | 产品包装 | required | 纳入随参考产品提供或用于从装配场址门口交付参考产品的包装。 | 前景包装 | 每 1 Item(s) 合格包装产出 |

### 过程：部件裁切与准备（`component_cutting_preparation`）

#### 输入

##### 产品流

###### 鞋帮用皮革（`upper_leather_input`）

记录进入鞋帮裁切的成品革，并声明动物物种、鞣制、整饰、厚度、供应商和上游数据集。

- 选定流：鞋帮用成品革
- 流属性/单位：质量 / kg
- 数量规则：由批次领料和退料记录测得的毛投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 鞋里用皮革（`lining_leather_input`）

仅在使用时记录成品鞋里革，并与鞋帮革分开。

- 选定流：鞋里用成品革
- 流属性/单位：质量 / kg
- 数量规则：由批次领料和退料记录测得的毛投入质量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 硫化橡胶外底（`rubber_outsole_input`）

- 选定流：硫化橡胶外底
- 流属性/单位：质量 / kg
- 数量规则：实测接收和领用质量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 聚氨酯外底（`polyurethane_outsole_input`）

- 选定流：聚氨酯外底
- 流属性/单位：质量 / kg
- 数量规则：实测接收和领用质量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 热塑性聚氨酯外底（`tpu_outsole_input`）

- 选定流：热塑性聚氨酯外底
- 流属性/单位：质量 / kg
- 数量规则：实测接收和领用质量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 乙烯-醋酸乙烯酯泡沫中底（`eva_midsole_input`）

- 选定流：乙烯-醋酸乙烯酯泡沫中底
- 流属性/单位：质量 / kg
- 数量规则：实测接收和领用质量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 裁切与准备用电（`cutting_electricity`）

- 选定流：电网电力
- 流属性/单位：能量 / kWh
- 数量规则：声明生产期的分表电量或经分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

#### 输出

##### 产品流

###### 裁切皮革鞋帮部件（`cut_upper_components_output`）

- 选定流：裁切皮革鞋帮部件
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量，并与皮革投入及裁切边角料核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_yield_records`
- 来源：

##### 废物流

###### 皮革裁切边角料（`leather_cutting_offcuts`）

- 选定流：皮革裁切边角料
- 流属性/单位：质量 / kg
- 数量规则：按产品批次称量或按生产期核对，并记录去向和回收状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 硫化橡胶裁切边角料（`rubber_cutting_offcuts`）

- 选定流：硫化橡胶裁切边角料
- 流属性/单位：质量 / kg
- 数量规则：称量废物；未裁切硫化橡胶时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 聚氨酯外底废料（`polyurethane_cutting_scrap`）

- 选定流：聚氨酯外底废料
- 流属性/单位：质量 / kg
- 数量规则：称量废物；未准备聚氨酯外底时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 热塑性聚氨酯外底废料（`tpu_cutting_scrap`）

- 选定流：热塑性聚氨酯外底废料
- 流属性/单位：质量 / kg
- 数量规则：称量废物；未准备热塑性聚氨酯外底时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 乙烯-醋酸乙烯酯泡沫边角料（`eva_cutting_offcuts`）

- 选定流：乙烯-醋酸乙烯酯泡沫边角料
- 流属性/单位：质量 / kg
- 数量规则：称量废物；未准备该泡沫时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

### 过程：鞋帮缝制与分总成（`upper_stitching`）

#### 输入

##### 产品流

###### 裁切皮革鞋帮部件（`cut_upper_components_input`）

- 选定流：裁切皮革鞋帮部件
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_yield_records`
- 来源：

###### 聚酯缝纫线（`polyester_thread_input`）

- 选定流：聚酯缝纫线
- 流属性/单位：质量 / kg
- 数量规则：领用质量减有记录的退回质量；其他线材另设原子卡片
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 鞋帮缝制用电（`upper_stitching_electricity`）

- 选定流：电网电力
- 流属性/单位：能量 / kWh
- 数量规则：声明生产期的分表电量或经分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

#### 输出

##### 产品流

###### 缝制皮革鞋帮组件（`stitched_upper_output`）

- 选定流：缝制皮革鞋帮组件
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量和合格鞋帮数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_component_yield_records`
- 来源：

##### 废物流

###### 聚酯线头废料（`thread_trimmings`）

- 选定流：聚酯线头废料
- 流属性/单位：质量 / kg
- 数量规则：称量或核对线头废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

### 过程：绷帮、鞋底连接、最终装配和整饰（`final_assembly_finishing`）

#### 输入

##### 产品流

###### 缝制皮革鞋帮组件（`stitched_upper_input`）

- 选定流：缝制皮革鞋帮组件
- 流属性/单位：质量 / kg
- 数量规则：实测转移质量和合格鞋帮数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_yield_records`
- 来源：

###### 纤维素内底板（`cellulose_insole_board_input`）

- 选定流：纤维素内底板
- 流属性/单位：质量 / kg
- 数量规则：领用质量减有记录的退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 聚酯鞋带（`polyester_shoelace_input`）

- 选定流：聚酯鞋带
- 流属性/单位：质量 / kg
- 数量规则：用产品特定部件记录将领用数量换算为质量；无鞋带型号不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 钢制鞋眼（`steel_eyelet_input`）

- 选定流：钢制鞋眼
- 流属性/单位：质量 / kg
- 数量规则：用实测部件质量将领用数量换算为质量；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_material_records`
- 来源：

###### 溶剂型聚氨酯鞋用胶粘剂（`polyurethane_adhesive_input`）

- 选定流：溶剂型聚氨酯鞋用胶粘剂
- 流属性/单位：质量 / kg
- 数量规则：领用质量减退回和单独称量残余物；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：

###### 水性聚氨酯鞋用胶粘剂（`waterborne_polyurethane_adhesive_input`）

- 选定流：水性聚氨酯鞋用胶粘剂
- 流属性/单位：质量 / kg
- 数量规则：领用质量减退回和单独称量残余物；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：

###### 水性丙烯酸鞋用整饰剂（`waterborne_acrylic_finish_input`）

- 选定流：水性丙烯酸鞋用整饰剂
- 流属性/单位：质量 / kg
- 数量规则：领用质量减退回和单独称量残余物；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：

###### 工艺用水（`assembly_process_water`）

- 选定流：工艺用水
- 流属性/单位：体积 / m3
- 数量规则：分表或核对后的供水体积；未使用工艺水时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 最终装配与整饰用电（`assembly_electricity`）

- 选定流：电网电力
- 流属性/单位：能量 / kWh
- 数量规则：声明生产期的分表电量或经分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 外购蒸汽（`assembly_steam`）

- 选定流：外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：计量蒸汽能量，或用有记录的压力和焓将质量换算；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 外购热力（`assembly_purchased_heat`）

- 选定流：外购热力
- 流属性/单位：能量 / MJ
- 数量规则：计量外购热量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### 天然气（`assembly_natural_gas`）

- 选定流：天然气
- 流属性/单位：低位热值 / MJ
- 数量规则：用供应商低位热值换算计量或发票体积；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

###### HFC-134a 制冷剂（`assembly_hfc134a_input`）

- 选定流：HFC-134a 制冷剂
- 流属性/单位：质量 / kg
- 数量规则：维修记录中可归属声明过程的充注量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_records`
- 来源：

#### 输出

##### 产品流

###### 包装前成品鞋（`finished_footwear_before_packaging`）

- 选定流：包装前其他皮革鞋成品
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按声明的 Item(s) 约定记录包装前合格产出数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_records`
- 来源：

##### 废物流

###### 聚氨酯胶粘剂残余物（`adhesive_residue_waste`）

- 选定流：聚氨酯胶粘剂残余物
- 流属性/单位：质量 / kg
- 数量规则：称量容器、混合和施胶产生的残余物；未产生时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 不合格整鞋（`rejected_footwear_waste`）

- 选定流：不合格其他皮革鞋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：使用与合格产出相同的 Item(s) 约定记录不合格数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 鞋类装配废水（`assembly_wastewater`）

- 选定流：鞋类装配废水
- 流属性/单位：体积 / m3
- 数量规则：计量或由平衡计算的排放体积；未产生工艺废水时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_wastewater_records`
- 来源：

##### 基本流

###### 丙酮排放至空气（`acetone_to_air`）

- 选定流：丙酮排放至空气
- 流属性/单位：质量 / kg
- 数量规则：按化合物实测，或根据配方、使用、捕集、转移和留存记录计算；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 乙酸乙酯排放至空气（`ethyl_acetate_to_air`）

- 选定流：乙酸乙酯排放至空气
- 流属性/单位：质量 / kg
- 数量规则：按化合物实测，或根据配方、使用、捕集、转移和留存记录计算；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-ecolabel-footwear-2016`

###### 甲苯排放至空气（`toluene_to_air`）

- 选定流：甲苯排放至空气
- 流属性/单位：质量 / kg
- 数量规则：按化合物实测，或根据配方、使用、捕集、转移和留存记录计算；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-ecolabel-footwear-2016`

###### HFC-134a 排放至空气（`hfc134a_to_air`）

- 选定流：HFC-134a 排放至空气
- 流属性/单位：质量 / kg
- 数量规则：充注量减回收量和有记录的库存变化；未使用 HFC-134a 时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 包装前成品鞋（`finished_footwear_packaging_input`）

- 选定流：包装前其他皮革鞋成品
- 流属性/单位：物品数量 / Item(s)
- 数量规则：按声明的 Item(s) 约定记录合格转移数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output_records`
- 来源：

###### 纸板鞋盒（`paperboard_shoebox_input`）

- 选定流：纸板鞋盒
- 流属性/单位：质量 / kg
- 数量规则：领用数量乘实测空盒质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 薄页纸（`tissue_paper_input`）

- 选定流：薄页纸
- 流属性/单位：质量 / kg
- 数量规则：领用质量，或用实测单张质量换算数量；未使用时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 瓦楞纸板运输箱（`corrugated_shipping_carton_input`）

- 选定流：瓦楞纸板运输箱
- 流属性/单位：质量 / kg
- 数量规则：纸箱质量除以该箱有记录的参考产品装载数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 低密度聚乙烯包装薄膜（`ldpe_film_input`）

- 选定流：低密度聚乙烯包装薄膜
- 流属性/单位：质量 / kg
- 数量规则：领用质量减有记录的退回质量；未使用时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 包装用电（`packaging_electricity`）

- 选定流：电网电力
- 流属性/单位：能量 / kWh
- 数量规则：声明生产期的分表电量或经分配的总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：

#### 输出

##### 产品流

###### 包装后其他皮革鞋（`final_other_leather_shoes`）

这是完整包装参考产品，不得用鞋类部件、皮革中间产品、使用服务或更窄鞋类替代。

- 选定流：其他皮革鞋 `985ca5fa-699a-411e-b304-0398fc7b4865`
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：按声明的计数约定归一化后恰为 1 Item(s) 合格包装产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 Item(s) 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output_records`
- 来源：

##### 废物流

###### 废纸板鞋盒（`waste_paperboard_shoebox`）

- 选定流：废纸板鞋盒
- 流属性/单位：质量 / kg
- 数量规则：称量不合格鞋盒，或以实测鞋盒质量换算不合格数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：

###### 废低密度聚乙烯薄膜（`waste_ldpe_film`）

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：称量废薄膜；未产生时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 Item(s) 合格包装产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 产品特定生产线、批次和计量表 | 优先细分过程并使用产品特定记录，再分配共享负荷。 | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `allocation_cutting_and_forming` | 共享裁切、成形和鞋底准备记录 | 无法细分时，按实测加工材料质量分配剩余共享负荷；保留产品特定边角料质量，不按最终产品收入分配。 | `ec-pefcr-apparel-footwear-2025` |
| `allocation_stitching_and_assembly` | 共享缝制、装配、整饰和包装记录 | 对等效产品按合格 Item(s) 产出分配剩余共享负荷；加工差异显著时采用有记录的机器时间，并披露物理驱动量。 | `ec-pefcr-apparel-footwear-2025`; `iso-14044-2006` |
| `allocation_waste_and_recovered_material` | 边角料、次品、残余物和回收材料 | 每项材料特定废物或回收材料产出均以实测质量和去向保持可见；不得把销售收入、回收抵扣或避免负荷冲抵前景投入。 | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `allocation_upstream_leather` | 外购成品革数据集 | 使用所选上游皮革数据集已记录的分配方法，并披露动物系统及副产品处理；不得在鞋类过程中自行覆盖上游分配。 | `navarro-et-al-2020-leather-lca`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_material_records` | `component_cutting_preparation`; `upper_stitching`; `final_assembly_finishing` | 纳入产品的材料或部件 | BOM、采购、领用、退回和库存记录 | 材料标识；供应商；批次；领用量；退回量；库存变化；部件数量；实测单位质量 | 将产品 BOM 与仓储和生产记录核对 | kg 和物品数量 | 每批次，按月汇总 | 完整声明生产期 | 生产声明物品的全部场址和承包商 | 毛领用减退回和库存增加，再按合格产出归一化 | 批准 BOM；发票；领料单；秤校准；供应商规格 |
| `cp_component_yield_records` | `component_cutting_preparation`; `upper_stitching`; `final_assembly_finishing` | 中间转移和收率 | 批次转移和验收记录 | 投入质量；转移质量；合格数；不合格数；在制品变化 | 按批次或生产期核对每个部件阶段 | kg 和物品数量 | 每批次，按月汇总 | 完整声明生产期 | 每个受控或外包部件阶段 | 转移产出、特定废物及库存变化与投入核对 | 签署转移记录；批次流转单；验收记录 |
| `cp_utility_records` | `component_cutting_preparation`; `upper_stitching`; `final_assembly_finishing`; `packaging` | 电力、蒸汽、外购热力、燃料或水 | 计量表、发票和运行日志 | 载能体标识；表计始末；发票量；设备时数；生产数；换算系数 | 优先读取专用表，否则按适用分配规则分配经核对的共享表计 | kWh、MJ、m3 | 表计间隔或发票期，按月汇总 | 完整声明生产期 | 全部纳入生产及可直接归属辅助区域 | 按载能体归一化至合格产出，不得相互抵销 | 表计校准；发票；表计图；换算记录 |
| `cp_chemical_records` | `final_assembly_finishing` | 胶粘剂或整饰剂 | 配方、SDS、领用、退回和残余物记录 | 产品名；供应商；配方；密度；领用质量；退回质量；残余物质量 | 分别核对每项化学产品 | kg | 每批次，按月汇总 | 完整声明生产期 | 全部装配和整饰场址 | 领用减退回，残余物和排放另行报告 | 现行 SDS；配方声明；校准秤；领用记录 |
| `cp_refrigerant_records` | `final_assembly_finishing` | HFC-134a 充注和释放 | 设备清单和维修记录 | 设备 ID；制冷剂标识；期初库存；充注；回收；期末库存 | 设备级制冷剂平衡 | kg | 每次维修及年度核对 | 完整声明生产期 | 可直接归属的冷却设备 | 充注减回收和库存增加等于计算释放，并披露差额 | 维修证书；钢瓶日志；设备登记 |
| `cp_waste_records` | 全部纳入过程 | 材料特定废物 | 称量票和去向记录 | 废物标识；过程；质量或数量；容器皮重；去向；处理路线 | 称量各分流废物或采用有记录的数量-质量换算 | kg 或 Item(s) | 每次转移，按月汇总 | 完整声明生产期 | 全部纳入场址和承包商 | 按 row_id 和去向汇总，再按合格产出归一化 | 校准秤；称量票；废物转移单 |
| `cp_water_wastewater_records` | `final_assembly_finishing` | 工艺水和废水 | 水表、排放表和处理记录 | 供水体积；排放体积；库存或蒸发调整；去向 | 分别测量供水和排放并记录水平衡 | m3 | 表计间隔，按月汇总 | 完整声明生产期 | 使用水的装配和整饰区域 | 各流分别按合格产出归一化 | 表计校准；排放记录；处理发票 |
| `cp_direct_emission_records` | `final_assembly_finishing` | 化合物特定空气排放 | SDS、配方、使用、捕集、回收、转移和监测记录 | 化合物标识；浓度；产品用量；捕集质量；转移质量；留存质量；可得时的废气浓度和流量 | 分别计算或测量每项排放化合物 | kg | 每项配方和监测期，按月汇总 | 完整声明生产期 | 全部施胶、清洁和整饰排放点 | 化合物投入减捕集、转移、留存和库存变化，并与监测核对 | SDS；配方；监测报告；捕集和废物记录 |
| `cp_packaging_records` | `packaging` | 包装部件 | 包装规格、领用和不合格记录 | 包装标识；部件数量；实测空质量；每箱物品数；领用量；不合格量 | 按部件核对数量和质量 | kg 和物品数量 | 每包装批次，按月汇总 | 完整声明生产期 | 全部包装场址 | 净领用包装按合格包装产出归一化 | 包装规格；秤记录；领用和不合格日志 |
| `cp_product_output_records` | `final_assembly_finishing`; `packaging` | 参考和中间鞋类产出 | 生产、质量验收和包装记录 | 合格数；不合格数；实体鞋只数；上市双数；Item(s) 约定；型号；尺码 | 核对装配产出、包装投入和包装后产出 | Item(s) 和实体鞋只数 | 每批次，按月汇总 | 完整声明生产期 | 全部最终装配和包装场址 | 合格包装产出为归一化分母；调查差异 | 生产订单；质量放行；包装记录；计数约定声明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_item` | 每个清单行 | 归一化量 = 声明期交换量 / 同期以 Item(s) 计的合格包装产出 | 交换量；合格包装产出；Item(s) 约定 | 每 1 Item(s) 的交换量 | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `convert_pair_records` | 以上市双报告的记录 | 保留双数和实体鞋只数；仅根据有记录的天工计数约定转换至 Item(s)，并声明系数 | 双数；实体鞋只数；Item(s) 约定 | 可审计换算的 Item(s) 数量 | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `reconcile_bom_and_losses` | 每项材料或包装部件 | 毛投入 = 纳入转移 + 材料特定废物 + 退回 + 期末库存 - 期初库存，并考虑有记录的测量不确定性 | 领用；退回；期初期末库存；纳入转移；特定废物 | 经核对的物料平衡和披露的差额 | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `calculate_compound_air_release` | 丙酮、乙酸乙酯和甲苯 | 排放化合物 = 产品中进入量 - 捕集量 - 回收量 - 废物或废水转移量 - 产品留存量 - 库存增加；更具代表性时采用废气实测结果 | 配方；化学品用量；捕集；回收；废物转移；留存；库存变化；监测 | 化合物特定空气排放 | `eu-ecolabel-footwear-2016` |
| `calculate_hfc134a_release` | HFC-134a 制冷剂 | 释放 = 充注 + 期初库存 - 回收 - 期末库存，并披露无法解释的差额 | 充注；回收；期初期末库存 | HFC-134a 空气排放 | `iso-14044-2006` |
| `allocate_shared_records` | 共享公用工程和操作 | 仅在无法细分和直接计量后应用第 7 节分配规则；在数据包保留驱动量和分母 | 共享总量；产品特定驱动量；总驱动量 | 归属产品的交换量 | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产出 | 证明完整其他皮革鞋、CPC 29330 范围、天工官方 UUID、成品状态、型号、尺码、鞋帮皮革、鞋底结构和 Item(s) 约定。 | 产品规格；照片或技术图；BOM；质量放行；天工标识记录 |
| `dq_bom_reconciliation` | 材料和包装 | 将 BOM 与毛投入、纳入转移、特定废物、退回和库存变化核对；为每项未列实际材料新增原子行。 | 批准 BOM；领用和库存记录；部件及废物质量平衡 |
| `dq_temporal_alignment` | 全部前景记录 | 使用一个声明生产期，并对齐材料、公用工程、排放、废物和产出分母；披露停机、启动、试制和外包期间。 | 期间台账；表计日期；生产日历；承包商声明 |
| `dq_atomic_carriers_and_emissions` | 公用工程、燃料、制冷剂、废物和排放 | 电力、蒸汽、外购热力、天然气、HFC-134a、每项废物流和每种排放化合物分别记录；不得使用载能体、VOC、废物或包装集合占位。 | 交换清单；发票；SDS；废物转移单；排放计算工作簿 |
| `dq_geography_technology` | 上游连接和前景过程 | 将上游数据集和前景记录匹配声明的地理范围、皮革和鞋底技术、电力供应、装配路线及整饰控制，或披露不匹配。 | 供应商声明；数据集元数据；场址过程图；公用工程合同 |
| `dq_outsourced_operations` | 承包商 | 外包裁切、缝制、部件制造、整饰或包装保持为显式服务或产品投入，并带运输和上游数据集；不得把缺失承包商数据当作零。 | 采购订单；承包商过程声明；转移和运输记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 核验 UUID `985ca5fa-699a-411e-b304-0398fc7b4865`、Product 流类型、CPC 29330、英文 baseName Other Leather Shoes、中文 baseName 其他皮革鞋、流属性 UUID `01846770-4cfe-4a25-8ad9-919d8d378345`、单位组 UUID `5beb6eed-33a9-47b8-9ede-1dfe8f679159` 和 Item(s) 单位；拒绝鞋类部件、皮革中间产品、服务、运动鞋、防护金属鞋头鞋及更窄产品类型。 | `unsd-cpc-3-2025` |
| `validate_counting_convention` | 参考量及全部物品计数行 | 强制声明一个 Item(s) 是一只实体鞋还是一双上市鞋，并核验所有双至物品换算；缺少该声明即不符合。 | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `validate_process_coverage` | 过程图和清单 | 确认每个受控或外包阶段均表示裁切或外购预裁披露、鞋帮缝制、绷帮和鞋底连接、最终装配、适用整饰、包装、公用工程、直接排放、废水和材料特定废物。 | `ec-pefcr-apparel-footwear-2025`; `rossi-et-al-2021-leather-shoe-lca`; `eu-ecolabel-footwear-2016` |
| `validate_bom_mass_balance` | 材料、部件和废物 | 对每项实际材料及包装部件核对投入、纳入产出、边角料或次品、退回和库存变化；无法解释的差额必须报告，不得通过材料净额隐藏。 | `ec-pefcr-apparel-footwear-2025`; `eu-ecolabel-footwear-2016` |
| `validate_atomic_exchanges` | 全部清单行 | 拒绝将集合或选择器作为选定流；每项实际电力、蒸汽、热力、燃料、制冷剂、化学品、材料、包装部件、废物流、废水流和排放化合物须有独立卡片和单位。 | `ec-pefcr-apparel-footwear-2025`; `iso-14044-2006` |
| `validate_source_and_period` | 前景证据 | 核验来源记录、校准证据、时间覆盖、场址范围、分配驱动量、外包处理和上游数据集连接支撑同一声明生产期的归一化量。 | `iso-14044-2006`; `ec-pefcr-apparel-footwear-2025` |
| `validate_no_case_derived_range` | 数量范围 | 确认未从单一工厂、产品、情景或论文编制经验范围；因未建立任一清单量的两份独立且边界兼容原始来源，本 PCR 不提供数量范围。 | `iso-14044-2006`; `rossi-et-al-2021-leather-shoe-lca` |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` 或 `background_dataset`，表示包装后其他皮革鞋的工厂门生产 |
| downstream_use | 作为产品系统的生产阶段数据集连接；需要时在独立生命周期模型增加分销、使用、维修和生命末期 |
| allowed_use | CPC 范围、鞋帮材料、鞋底结构、Item(s) 约定、地理范围、参考期和系统边界兼容的产品特定或技术匹配建模 |
| excluded_use | 鞋类部件、皮革生产、运动鞋、防护金属鞋头鞋、其他专用鞋、非皮革鞋帮鞋、鞋类使用服务，或忽略计数和质量差异的比较 |
| required_metadata | PCR id 和版本状态；参考 UUID 和 Item(s) 约定；型号和尺码；鞋帮皮革和鞋底结构；地理范围；参考期；工艺路线；分配；上游连接；数据来源 |
| required_quality_disclosure | BOM 和损失核对；初级数据覆盖；表计和秤质量；承包商覆盖；溶剂和制冷剂处理；废物去向；数据缺口；假设；无来源支持范围 |
| update_trigger | 产品结构、鞋帮皮革、鞋底材料、胶粘剂或整饰剂、装配技术、能源供应、制冷剂、包装、地理范围、承包商网络、Item(s) 约定、分配、上游数据集或重要前景证据发生变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 数据集（`dataset`） | 联合国统计司，《产品总分类 3.0 版》结构，2025 年 6 月 30 日，CPC 29330。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-23） | 官方分类名称、范围和参考流验证排除项 |
| `ec-pefcr-apparel-footwear-2025` | 官方指南（`official_guidance`） | Technical Secretariat, Product Environmental Footprint Category Rules for Apparel and Footwear, Version 3.1, 29 April 2025. https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf（检索于 2026-08-23） | 鞋类分析单位语境、BOM 和损失采集、制造过程拆分、分配、包装、数据质量及部分生命周期披露 |
| `eu-ecolabel-footwear-2016` | 官方指南（`official_guidance`） | European Commission, Commission Decision (EU) 2016/1349 establishing EU Ecolabel criteria for footwear, consolidated text. https://eur-lex.europa.eu/eli/dec/2016/1349/2026-01-06/eng（检索于 2026-08-23） | 完整鞋及部件定义、装配场址边界、成品和 BOM 证据、VOC 与化学品核验、耐久性和包装 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020. https://www.iso.org/standard/38498.html（检索于 2026-08-23） | 目标与范围、清单、分配、报告、审查及生命周期解释规则 |
| `rossi-et-al-2021-leather-shoe-lca` | 文献（`literature`） | Rossi, M.; Papetti, A.; Marconi, M.; Germani, M. Life cycle assessment of a leather shoe supply chain. International Journal of Sustainable Engineering 14(4), 686–703. https://doi.org/10.1080/19397038.2021.1920643 | 皮革鞋部件制造、鞋帮裁切、整鞋装配、鞋底连接、整饰、包装投入、供应商与承包商边界及初级数据采集的全文证据；案例数值未用作范围 |
| `navarro-et-al-2020-leather-lca` | 文献（`literature`） | Navarro, D.; Wu, J.; Lin, W.; Fullana-i-Palmer, P.; Puig, R. Life cycle assessment and leather production. Journal of Leather Science and Engineering 2, 26. https://doi.org/10.1186/s42825-020-00035-y | 皮革系统边界、上游分配披露、数据集透明度及鞋类制造与皮革生产分离的全文证据 |
