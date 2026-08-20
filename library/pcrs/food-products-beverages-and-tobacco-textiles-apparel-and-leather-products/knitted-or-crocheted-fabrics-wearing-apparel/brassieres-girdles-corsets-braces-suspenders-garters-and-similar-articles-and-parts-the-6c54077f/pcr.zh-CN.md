---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.brassieres-girdles-corsets-braces-suspenders-garters-and-similar-articles-and-parts-the-6c54077f
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 胸罩、束带、紧身胸衣、背带、吊带、袜带及类似品及其零件，不论是否针织或钩编

## 1. 范围与适用性

本 PCR 覆盖胸罩、束带、紧身胸衣、塑身背带、吊带、袜带、类似身体支撑用品及其可识别零件的工厂门生产，不论其为针织、钩编或其他纺织结构。适用于按已声明产品规格实施的裁剪、罩杯或部件准备、缝制、五金安装、条件性成衣湿整理、熨烫、检验和销售包装。

纤维、纱线、织物、花边、弹性窄幅织物、泡沫、金属五金、塑料、化学品、燃料、电力和包装的生产，应采用上游数据集表示，除非这些工序实际在报告设施内完成。工厂门后的配送、零售、消费者使用与护理、修理和生命末期不属于本前景生产边界。一般内衣、泳装、袜类、普通腰带、具有受监管治疗功能的医疗器械，以及 CPC 28237 语义边界外的成衣或配饰均不包括。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.brassieres-girdles-corsets-braces-suspenders-garters-and-similar-articles-and-parts-the-6c54077f |
| classification_refs | CPC 3.0: 28237 |
| covered_products | 胸罩；束带；紧身胸衣；塑身背带；吊带；袜带；类似纺织身体支撑用品；及其可识别零件，不论是否针织或钩编 |
| excluded_products | 不符合身体支撑用品范围的一般内衣；泳装；袜类；普通腰带；受监管的治疗性医疗器械；作为材料销售的上游纺织材料；配送、使用和生命末期服务 |
| representative_product | 工厂门成品胸罩，已声明纺织组成、弹性部件、扣件、可选衬垫和可选钢圈 |
| production_route | 生产就绪的织物和部件进入服装厂；裁剪和部件准备；缝制和五金组装；条件性湿整理；检验；熨烫；销售包装 |
| market_state | 在制造厂门交付、符合质量要求并已包装的成品或可识别成品零件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门制造并交付符合质量要求、满足已声明合身性、支撑性、材料、结构和五金规格的 CPC 28237 身体支撑用品或可识别零件 |
| How much | 1 kg 成品参考产品 |
| How well | 符合已声明产品规格和最终质量检验，并按适用情况披露组成、尺码或合身标识、支撑结构、衬垫、钢圈、扣合方式和整理方式 |
| How long or cycle | 一个已声明生产批次；消费者使用寿命和使用循环不属于此前景生产参考 |
| reference_flow_link | `finished_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 乳罩、腰带、紧身胸衣、背带、吊裤带、吊袜带和类似物品及其部分，不论是否是针织的或钩编的 `b1e1a830-20ee-40f3-a59d-87d1dc561706` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 用品类型；成品或零件；针织、钩编或其他纺织结构；材料清单及质量占比；参考尺码和尺码体系；适用时的罩杯与下胸围或等效合身标识；有钢圈或无钢圈；有衬垫、模压或无衬垫；扣合与肩带配置；生产场址和地域；生产期；湿整理路线；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化至工厂门 1 kg 合格成品；参考产品质量不包括包装质量，包装应分别记录。 |
| `item_to_mass_conversion` | 以件计的生产或采购记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用已声明参考尺码和产品规格的实测产品净质量，将件数换算为质量；保留件数、实测样本数、平均质量和换算过程。 |
| `bom_mass_basis` | 成品材料清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 部件质量应统一按干基或收到状态记录并披露该基准；至少核对产品 BOM 质量的 95%，且包括全部主面料、里料、衬垫、金属和已声明五金。 |
| `energy_unit_conversion` | 电力和热能记录 | Energy | kWh and MJ | 保留计费或计量原始单位，报告换算因子，只在汇总时换算；不得将电力、蒸汽、热水、天然气、柴油或 LPG 合并为一个清单交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产就绪的织物、花边、弹性窄幅织物、缝纫线、泡沫或衬垫、金属和聚合物五金、化学品及包装进入报告设施，并带有供应商身份、质量、组成和上游数据集引用。 |
| starting_condition_role | 服装部件准备与组装的门到门前景起点 |
| product_classification_scope | 仅 CPC 3.0 子类 28237；类别不取决于纺织结构是否针织或钩编。 |
| recursive_input_rule | 外购输入本身为 CPC 28237 用品或可识别零件时，以供应商数据集作为一个上游产品输入记录一次，不在此前景系统内重复建立其生产。 |
| upstream_dataset_requirement | 每项外购材料、部件、化学品、公用工程、燃料和包装输入都必须有地域与技术具有代表性的上游数据集，或明确记录的数据缺口。 |
| disclosure | 声明产品规格、BOM 覆盖率、参考尺码、生产场址和时期、纳入和排除的工序、供应商地域、分配基准、材料与能源损失、湿整理路线、不合格品处置、包装配置及全部未解决的上游数据缺口。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_product_system | 纳入已声明产品在接收至工厂门之间实际发生的部件准备、裁剪、缝制、五金组装、条件性湿处理、最终检验、熨烫和销售包装。 | `afw-pefcr-v3-1-2025` |
| `boundary_upstream_materials` | purchased_materials_and_components | 纤维、纱线、织物、花边、弹性材料、泡沫、五金、化学品、燃料、公用工程和包装的生产保留在上游，除非报告设施实际执行该工序；每项外购输入连接上游数据集。 | `afw-pefcr-v3-1-2025` |
| `boundary_wet_finishing_condition` | wet_finishing | 仅当已声明路线在报告设施进行成衣洗涤、漂白、染色或整理时纳入；否则将过程及其全部原子交换标记为不适用，并识别上游整理后织物数据集。 | `eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025` |
| `boundary_losses_and_waste` | manufacturing_losses | 在发生阶段纳入裁剪损失、部件缺陷、缝制错误、不合格品、废水、污泥、包装废物及其实际处理路线。 | `afw-pefcr-v3-1-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cutting_component_preparation` | 裁剪和部件准备 | required | 从生产就绪材料进行工厂组装时始终纳入；单项材料行只在已声明 BOM 存在该材料时适用。 | 前景裁剪、罩杯或泡沫准备和部件成形 | 每 1 kg 合格成品参考产品 |
| `sewing_hardware_assembly` | 缝制和五金组装 | required | 始终纳入；五金行只在已声明设计含该五金时适用。 | 前景缝制、弹性材料应用、扣件安装和用品组装 | 每 1 kg 合格成品参考产品 |
| `wet_finishing` | 成衣湿整理 | conditional | 仅当报告设施内进行洗涤、漂白、染色、漂洗或化学整理时纳入。 | 前景湿处理和废水产生 | 每 1 kg 合格成品参考产品 |
| `inspection_packaging` | 最终检验、熨烫和包装 | required | 始终纳入最终质量检验；熨烫及各包装行在已声明路线使用时适用。 | 前景最终验收和工厂门包装 | 每 1 kg 合格成品参考产品 |
| `facility_utilities` | 共用设施公用工程和直接排放 | conditional | 纳入服务于产品但未计量到其他过程的燃料、备用发电、局部加热、制冷剂补充和直接排放。 | 共用前景公用工程分配和场址直接排放 | 每 1 kg 合格成品参考产品 |

### 过程：裁剪和部件准备（`cutting_component_preparation`）

#### 输入

##### 产品流

###### 聚酰胺-氨纶主体面料（`fabric_polyamide_elastane`）

当 BOM 指定该结构用于裁片、侧翼、罩杯或支撑部位时，成品聚酰胺-氨纶针织面料在发往裁剪时跨越前景边界。

- 选定流：Finished polyamide-elastane knitted fabric
- 流属性/单位：Mass / kg
- 数量规则：发往裁剪订单的实测质量，扣除单独记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酯-氨纶主体面料（`fabric_polyester_elastane`）

已声明 BOM 将聚酯-氨纶针织面料用于主体、罩杯、侧翼或支撑裁片时，应单独记录。

- 选定流：Finished polyester-elastane knitted fabric
- 流属性/单位：Mass / kg
- 数量规则：发往裁剪订单的实测质量，扣除单独记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 棉-氨纶主体面料（`fabric_cotton_elastane`）

只对 BOM 声明使用该材料和结构的产品记录成品棉-氨纶针织面料。

- 选定流：Finished cotton-elastane knitted fabric
- 流属性/单位：Mass / kg
- 数量规则：发往裁剪订单的实测质量，扣除单独记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酰胺花边面料（`lace_polyamide`）

花边作为可识别产品部件进行裁剪、而非并入通用面料总量时，记录成品聚酰胺花边面料。

- 选定流：Finished polyamide lace fabric
- 流属性/单位：Mass / kg
- 数量规则：发往生产订单的花边实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`munasinghe-et-al-2016-bra-lca`; `afw-pefcr-v3-1-2025`

###### 软质聚氨酯泡沫片材（`foam_polyurethane`）

在前景设施内将泡沫裁剪或模压为罩杯、衬垫或支撑部件时，记录软质聚氨酯泡沫片材。

- 选定流：Flexible polyurethane foam sheet
- 流属性/单位：Mass / kg
- 数量规则：发往生产订单的泡沫片材实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 热塑性聚氨酯热熔胶膜（`adhesive_polyurethane_hot_melt`）

仅在粘合或无缝部件结构消耗此外购胶膜时记录。

- 选定流：Thermoplastic polyurethane hot-melt adhesive film
- 流属性/单位：Mass / kg
- 数量规则：为生产订单发放并消耗的胶膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 裁剪和模压用电（`electricity_cutting`）

将供应裁剪机、压力机、模压设备、局部抽风和直接归属辅助设备的计量电力作为本过程单独的电力交换记录。

- 选定流：Electricity, consumed at garment assembly site
- 流属性/单位：Energy / kWh
- 数量规则：裁剪和部件准备的分表用电或经分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 裁剪设备压缩空气（`compressed_air_cutting`）

气动裁剪机、模压夹具或物料搬运装置使用可计量或计算的压缩空气时，应单独记录。

- 选定流：Compressed air, supplied at garment assembly site
- 流属性/单位：Volume / m3
- 数量规则：实测压缩空气体积，或由设备运行时间和经核实流量计算的体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_energy`
- 来源：

#### 输出

##### 废物流

###### 聚酰胺-氨纶裁剪废料（`waste_polyamide_elastane`）

只有组成已记录时，分拣的聚酰胺-氨纶边角料和不可用裁片才以本废物流离开过程。

- 选定流：Polyamide-elastane textile cutting waste
- 流属性/单位：Mass / kg
- 数量规则：送往已声明再利用、回收、处理或处置路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酯-氨纶裁剪废料（`waste_polyester_elastane`）

分拣的聚酯-氨纶边角料和不可用裁片应与其他纺织废物分开记录。

- 选定流：Polyester-elastane textile cutting waste
- 流属性/单位：Mass / kg
- 数量规则：送往已声明再利用、回收、处理或处置路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 棉-氨纶裁剪废料（`waste_cotton_elastane`）

BOM 中存在该材料时，分拣的棉-氨纶边角料和不可用裁片应单独记录。

- 选定流：Cotton-elastane textile cutting waste
- 流属性/单位：Mass / kg
- 数量规则：送往已声明再利用、回收、处理或处置路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚氨酯泡沫裁剪废料（`waste_polyurethane_foam`）

聚氨酯泡沫边角料和不合格模压泡沫部件应作为单独废物交换称量。

- 选定流：Polyurethane foam cutting waste
- 流属性/单位：Mass / kg
- 数量规则：送往已声明再利用、回收、处理或处置路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_waste`
- 来源：`afw-pefcr-v3-1-2025`

### 过程：缝制和五金组装（`sewing_hardware_assembly`）

#### 输入

##### 产品流

###### 聚酯缝纫线（`thread_polyester`）

聚酯缝纫线用于接缝、包边、部件连接或加固时跨越本过程边界。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：发放量减经核实退库量，或根据接缝记录和经核实线密度计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚酰胺-氨纶弹性窄幅织物（`elastic_narrow_fabric`）

BOM 所列下围、肩带、包边、袜带、吊带或支撑部位所用弹性窄幅织物应单独记录。

- 选定流：Polyamide-elastane narrow elastic fabric
- 流属性/单位：Mass / kg
- 数量规则：发往生产订单的弹性织物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`munasinghe-et-al-2016-bra-lca`; `afw-pefcr-v3-1-2025`

###### 涂层钢制胸罩钢圈（`underwire_steel`）

仅有钢圈设计记录涂层钢制钢圈，不得与钩、眼、环或调节扣合并。

- 选定流：Coated steel brassiere underwire
- 流属性/单位：Mass / kg
- 数量规则：实测质量，或用指定钢圈的经核实单件质量换算件数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 钢制钩眼服装扣件（`hook_eye_steel`）

用于扣合或调节时，钢制钩眼扣件作为单独外购部件记录。

- 选定流：Steel hook-and-eye garment fastener
- 流属性/单位：Mass / kg
- 数量规则：以指定扣件组合的实测质量换算件数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚甲醛肩带环（`strap_ring_pom`）

设计中存在聚甲醛肩带环时，应计数并换算质量，且与肩带调节扣分开。

- 选定流：Polyoxymethylene garment strap ring
- 流属性/单位：Mass / kg
- 数量规则：以指定环的实测单件质量换算件数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 聚甲醛肩带调节扣（`strap_slider_pom`）

聚甲醛肩带调节扣应作为独立部件交换计数并换算为质量。

- 选定流：Polyoxymethylene garment strap slider
- 流属性/单位：Mass / kg
- 数量规则：以指定调节扣的实测单件质量换算件数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-v3-1-2025`

###### 缝制和五金安装用电（`electricity_sewing`）

记录缝纫机、套结机、粘合设备和五金安装设备在本过程消耗的电力。

- 选定流：Electricity, consumed at garment assembly site
- 流属性/单位：Energy / kWh
- 数量规则：缝制和五金组装的分表用电或经分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_energy`
- 来源：`afw-pefcr-v3-1-2025`

#### 输出

##### 废物流

###### 钢制服装五金废料（`scrap_steel_hardware`）

只有废物运输为单一分拣钢废料等级时，才可将干净的不合格钢圈、钩、眼或其他有记录钢五金计入本行。

- 选定流：Steel garment-hardware scrap
- 流属性/单位：Mass / kg
- 数量规则：转移至已声明钢废料处理路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_scrap`
- 来源：`afw-pefcr-v3-1-2025`

### 过程：成衣湿整理（`wet_finishing`）

#### 输入

##### 产品流

###### 湿整理工艺水（`process_water_wet`）

已声明产品路线纳入现场洗涤、漂白、染色、漂洗或化学整理时，记录工艺水。

- 选定流：Process water for garment wet finishing
- 流属性/单位：Mass / kg
- 数量规则：进入湿整理过程的计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_inputs`
- 来源：`eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025`

###### 湿整理设备用电（`electricity_wet`）

湿整理机、泵、抽排和直接归属处理设备用电应与热力公用工程分开记录。

- 选定流：Electricity, consumed at garment assembly site
- 流属性/单位：Energy / kWh
- 数量规则：湿整理的分表用电或经分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 外购工艺蒸汽（`purchased_steam_wet`）

外购蒸汽跨越场址或过程边界并用于湿整理时，作为独立热力公用工程交换记录。

- 选定流：Purchased process steam
- 流属性/单位：Energy / MJ
- 数量规则：实测蒸汽质量按已记录供应条件换算，或采用直接能量表读数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_energy`
- 来源：`eu-jrc-textiles-bref-2023`

###### 外购工艺热水（`purchased_hot_water_wet`）

外购热水跨越湿整理过程边界时，应与蒸汽和现场加热水分开记录。

- 选定流：Purchased process hot water
- 流属性/单位：Energy / MJ
- 数量规则：以实测热水质量和入口温度换算交付热能
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_energy`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿整理用碳酸钠（`sodium_carbonate_wet`）

只有已记录的现场湿整理配方消耗碳酸钠时，才作为单一化学品记录。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：根据批次和库存记录实测投加产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_inputs`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿整理用过氧化氢（`hydrogen_peroxide_wet`）

漂白或等效已记录现场配方使用过氧化氢时，将其作为单一化学品记录，并披露产品浓度。

- 选定流：过氧化氢
- 流属性/单位：Mass / kg
- 数量规则：实测投加的收到状态溶液质量，并在原始记录中保留浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_inputs`
- 来源：`eu-jrc-textiles-bref-2023`

#### 输出

##### 废物流

###### 成衣湿整理废水（`wastewater_wet`）

现场成衣湿整理排出的废水，应在场外处理前或转移至场内处理的交接点记录，并声明边界。

- 选定流：Textile garment wet-finishing wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或以实测密度将体积换算为质量，并保留处理去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wet_outputs`
- 来源：`eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025`

###### 湿整理废水处理污泥（`sludge_wet`）

只有场内废水处理产生单独处置的纺织湿整理污泥时才记录。

- 选定流：Textile wet-finishing wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：实测湿污泥质量，并披露固体含量和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_outputs`
- 来源：`eu-jrc-textiles-bref-2023`

### 过程：最终检验、熨烫和包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 检验、熨烫和包装用电（`electricity_packaging`）

记录最终过程检验照明、电熨烫设备、贴标、封口和包装设备使用的电力。

- 选定流：Electricity, consumed at garment assembly site
- 流属性/单位：Energy / kWh
- 数量规则：最终检验、熨烫和包装的分表用电或经分配的电表用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`afw-pefcr-v3-1-2025`

###### 瓦楞纸板运输箱（`carton_corrugated`）

用于从工厂门发运成品的瓦楞纸板箱，应与一次袋和纸吊牌分开记录。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：已声明包装产出的纸箱实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-v3-1-2025`

###### 低密度聚乙烯服装袋（`bag_ldpe`）

直接容纳用品的低密度聚乙烯袋在使用时作为一个塑料包装交换记录。

- 选定流：低密度聚乙烯服装袋
- 流属性/单位：Mass / kg
- 数量规则：以指定服装袋的实测单件质量换算件数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-v3-1-2025`

###### 印刷纸制服装吊牌（`hangtag_paper`）

印刷纸吊牌应与纸箱、塑料袋和纺织洗护标签分开记录。

- 选定流：Printed paper garment hangtag
- 流属性/单位：Mass / kg
- 数量规则：以指定吊牌的实测单件质量换算件数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_inputs`
- 来源：`afw-pefcr-v3-1-2025`

#### 输出

##### 产品流

###### 合格成品参考产品（`finished_reference_product`）

合格工厂门产出使用参考流定义中的精确 CPC 28237 产品流，且不包括包装质量。

- 选定流：乳罩、腰带、紧身胸衣、背带、吊裤带、吊袜带和类似物品及其部分，不论是否是针织的或钩编的 `b1e1a830-20ee-40f3-a59d-87d1dc561706`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 合格成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 瓦楞纸板包装废物（`waste_corrugated`）

现场包装产生的破损纸箱和纸板边料，应称量为分拣纸板废物交换。

- 选定流：Corrugated paperboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：送往已声明再利用、回收、处理或处置路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 低密度聚乙烯薄膜废物（`waste_ldpe`）

破损或未使用的 LDPE 服装袋及薄膜边料应与纸板废物分开记录。

- 选定流：Low-density polyethylene film waste
- 流属性/单位：Mass / kg
- 数量规则：送往已声明回收、处理或处置路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`afw-pefcr-v3-1-2025`

###### 不合格 CPC 28237 成品（`rejected_finished_product`）

最终检验不合格并以废物离开前景系统的成品，应与可恢复的过程内返工分开记录。

- 选定流：Rejected CPC 28237 finished article
- 流属性/单位：Mass / kg
- 数量规则：分配至已声明处理路线的实测质量，不包括成功返工成为合格产出的件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`afw-pefcr-v3-1-2025`

### 过程：共用设施公用工程和直接排放（`facility_utilities`）

#### 输入

##### 产品流

###### 现场锅炉天然气（`natural_gas_facility`）

只有现场锅炉的蒸汽或热水服务于纳入的前景过程且未作为外购蒸汽或热水表示时，才记录天然气。

- 选定流：Natural gas, combusted in site boiler
- 流属性/单位：Energy / MJ
- 数量规则：计量燃料能量，或按已记录低位发热量换算的实测燃料量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_fuels`
- 来源：`afw-pefcr-v3-1-2025`

###### 固定式备用发电机柴油（`diesel_backup_facility`）

固定式备用发电机所发电力服务于纳入生产时，其柴油应与天然气和 LPG 分开记录。

- 选定流：Diesel fuel for stationary backup generator
- 流属性/单位：Energy / MJ
- 数量规则：实测柴油量按已记录低位发热量换算并分配至纳入生产
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_fuels`
- 来源：`afw-pefcr-v3-1-2025`

###### 局部加热 LPG（`lpg_facility`）

用于局部加热、火焰处理或其他已声明服装厂设备的液化石油气，应作为独立燃料交换记录。

- 选定流：Liquefied petroleum gas for garment-factory spot heating
- 流属性/单位：Energy / MJ
- 数量规则：实测 LPG 量按已记录低位发热量换算并分配至纳入生产
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_fuels`
- 来源：`afw-pefcr-v3-1-2025`

###### HFC-134a 制冷剂补充（`refrigerant_r134a_facility`）

根据制冷剂库存记录，记录加入纳入的空间调节或工艺冷却设备的 HFC-134a；其他制冷剂必须另设行。

- 选定流：1,1,1,2-tetrafluoroethane refrigerant (HFC-134a)
- 流属性/单位：Mass / kg
- 数量规则：按设备和报告期归属的制冷剂实测采购与加注质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_balance`
- 来源：

#### 输出

##### 基本流

###### 化石二氧化碳排入空气（`carbon_dioxide_fossil_air`）

纳入的现场天然气、柴油或 LPG 燃烧产生的化石二氧化碳，应作为单独直接基本排放报告。

- 选定流：Carbon dioxide, fossil, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或使用已披露场址或辖区特定因子由各项实测燃料量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 化石甲烷排入空气（`methane_fossil_air`）

纳入的现场燃料燃烧产生的化石甲烷，应与二氧化碳和氧化亚氮分开报告。

- 选定流：Methane, fossil, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或使用已披露场址或辖区特定因子由各项实测燃料量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 氧化亚氮排入空气（`dinitrogen_monoxide_air`）

纳入的现场燃料燃烧产生的氧化亚氮，应作为独立基本排放报告。

- 选定流：Dinitrogen monoxide, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或使用已披露场址或辖区特定因子由各项实测燃料量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 氮氧化物排入空气（`nitrogen_oxides_air`）

有烟道测量或经批准计算提供数量时，纳入的现场燃烧氮氧化物应单独报告。

- 选定流：Nitrogen oxides, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放，或使用已披露场址或辖区特定因子由各项实测燃料量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### 二氧化硫排入空气（`sulfur_dioxide_air`）

燃料硫或烟道数据支持计算时，纳入的现场燃烧二氧化硫应单独报告。

- 选定流：Sulfur dioxide, emission to air
- 流属性/单位：Mass / kg
- 数量规则：实测烟道排放，或以实测燃料硫和燃料消耗量及已披露因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：

###### HFC-134a 排入空气（`hfc134a_air`）

HFC-134a 泄漏应按设备级制冷剂质量平衡作为直接基本排放报告，不得以通用制冷剂排放替代。

- 选定流：1,1,1,2-tetrafluoroethane (HFC-134a), emission to air
- 流属性/单位：Mass / kg
- 数量规则：根据期初库存、采购、加注、回收和期末库存计算制冷剂损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_processes | 记录能够区分已声明产品时，优先采用产品线或过程分表和系统细分，之后才进行分配。 | `afw-pefcr-v3-1-2025` |
| `allocation_assembly_unit` | shared_cutting_sewing_and_assembly | 无法细分时，对物质上可比的用品按合格生产件数分配共用组装和缝制记录，再以实测单件质量换算到 1 kg 参考流；只有具备理由并披露时才采用其他因果物理驱动量。 | `afw-pefcr-v3-1-2025` |
| `allocation_energy_mix` | multiple_sites_or_energy_sources | 多场址应建立产量加权电力组合，并按总实测 kWh 的比例保留各消费电力组合；无物理计量或等效核实记录时，不得将优选组合指定给某一产品。 | `afw-pefcr-v3-1-2025` |
| `allocation_rework_and_waste` | rework_scrap_and_rejected_product | 成功返工返回原过程，不计为第二份成品产出；将实测废物处理归于产生废物的过程，并披露下游采用的任何回收信用方法。 | `afw-pefcr-v3-1-2025` |
| `allocation_no_unrecorded_coproduct` | saleable_by_products | 明确报告每项可销售副产品；存在真实多功能产出时，先记录细分，并在采用非物理分配前取得方法学审查。 | `afw-pefcr-v3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `cutting_component_preparation` | 发放的主体面料、花边、泡沫和胶膜 | BOM、采购规格、领用与退库记录 | product_id; batch_id; material_id; composition; construction; issued_mass; returned_mass; moisture_basis | 将生产订单领用和退库与产品 BOM 核对 | kg | 每个生产订单 | 代表性年度期间和已声明批次 | 每个纳入的组装场址 | 按原子材料行汇总净领用量并除以合格成品质量 | 已签署 BOM 修订版；校准秤记录；供应商规格；库存核对 |
| `cp_cutting_energy` | `cutting_component_preparation` | 电力和压缩空气 | 分表、总表、运行时间和设备规格 | meter_start; meter_end; equipment_id; runtime; verified_flow_rate; allocated_output | 直接读表；仅压缩空气无流量计时，以运行时间乘经核实流量 | kWh; m3 | 每批或计量期 | 代表性年度期间 | 每个纳入裁剪区域 | 采用有记录的因果分配后除以合格产出质量 | 仪表校准；设备规格；分配工作表 |
| `cp_cutting_waste` | `cutting_component_preparation` | 组成特定裁剪废物 | 废物容器和运输记录 | material_composition; batch_id; gross_mass; tare_mass; destination; treatment_route | 在废物离开过程或运输时称量已分拣废物 | kg | 每批或每次废物运输 | 代表性年度期间 | 每个纳入裁剪区域 | 按组成和去向汇总净废物质量 | 秤校准；废物转移单；分拣审核 |
| `cp_sewing_materials` | `sewing_hardware_assembly` | 线、弹性材料、钢圈、扣件、环和调节扣 | BOM、领用记录、件数和部件质量样本 | component_id; composition; issued_mass; item_count; sample_count; sample_mass; returned_mass | 称量散装材料，或用经核实平均部件质量换算计数部件 | kg; item | 每个生产订单 | 代表性年度期间 | 每条纳入组装线 | 按原子行汇总部件净质量 | BOM 修订版；秤校准；部件规格；计数核对 |
| `cp_sewing_energy` | `sewing_hardware_assembly` | 缝制和五金安装用电 | 分表或经分配总表记录 | meter_start; meter_end; line_id; operating_time; accepted_units; accepted_mass | 直接读表或有记录的共用电表分配 | kWh | 每批或计量期 | 代表性年度期间 | 每条纳入组装线 | 对可比用品按合格件数分配，并按合格质量归一化 | 仪表校准；生产报告；分配工作表 |
| `cp_hardware_scrap` | `sewing_hardware_assembly` | 已分拣钢五金废料 | 废料容器和运输记录 | batch_id; gross_mass; tare_mass; material_grade; destination | 称量已分拣干净钢五金废料 | kg | 每次运输 | 代表性年度期间 | 每个纳入组装场址 | 汇总废料净质量并除以合格产出质量 | 秤校准；废物转移单；等级声明 |
| `cp_wet_inputs` | `wet_finishing` | 工艺水和具名湿处理化学品 | 水表、配方、投加和库存记录 | recipe_id; chemical_name; concentration; dose_mass; water_meter_start; water_meter_end; batch_mass | 计量用水，并将每种具名化学品投加与库存变动核对 | kg | 每个湿整理批次 | 代表性年度期间 | 每条纳入湿整理线 | 分别汇总每项原子输入并按合格产出质量归一化 | 仪表校准；配方批准；安全数据表；库存核对 |
| `cp_wet_energy` | `wet_finishing` | 电力、外购蒸汽和外购热水 | 公用工程仪表和发票 | utility_type; meter_start; meter_end; steam_mass; pressure; hot_water_mass; inlet_temperature; supplier | 直接读取公用工程仪表或供应商记录；按已记录条件将蒸汽或热水换算为能量 | kWh; MJ | 每批或计费期 | 代表性年度期间 | 每条纳入湿整理线或场址 | 各公用工程分别保留、因果分配并按合格产出质量归一化 | 仪表校准；发票；换算工作表 |
| `cp_wet_outputs` | `wet_finishing` | 废水和污泥 | 排水计量、处理日志和废物运输记录 | discharge_volume; density; sampling_time; treatment_boundary; sludge_wet_mass; solids_content; destination | 在已声明边界计量废水并称量污泥 | kg | 每批或排放期 | 代表性年度期间 | 每个纳入处理边界 | 分别汇总废水和污泥并按合格产出质量归一化 | 仪表校准；实验室记录；处理日志；转移单 |
| `cp_packaging_inputs` | `inspection_packaging` | 纸箱、LDPE 袋和纸吊牌 | 包装 BOM、领用记录、件数和质量样本 | packaging_id; material; item_count; sample_count; sample_mass; issued_mass; returned_mass | 称量散装包装，或用经核实平均单件质量换算件数 | kg; item | 每个包装订单 | 代表性年度期间 | 每个纳入包装场址 | 分别汇总每种包装材料并按合格产品质量归一化 | 包装规格；秤校准；库存核对 |
| `cp_packaging_energy` | `inspection_packaging` | 最终检验、熨烫和包装用电 | 分表或经分配总表记录 | meter_start; meter_end; area_id; accepted_units; accepted_mass | 直接读表或有记录的共用电表分配 | kWh | 每批或计量期 | 代表性年度期间 | 每个纳入最终处理区域 | 对可比用品按合格件数分配，并按合格质量归一化 | 仪表校准；生产报告；分配工作表 |
| `cp_packaging_waste` | `inspection_packaging` | 纸板废物、LDPE 薄膜废物和不合格产品 | 检验处置和废物转移记录 | waste_id; material; gross_mass; tare_mass; reject_reason; rework_status; destination | 称量每项已分拣废物并排除成功返工产品 | kg | 每批或运输 | 代表性年度期间 | 每个纳入包装场址 | 按去向汇总每项原子废物并除以合格产出质量 | 秤校准；最终检验报告；转移单 |
| `cp_facility_fuels` | `facility_utilities` | 天然气、柴油和 LPG | 燃料表、发票、储罐和发热量记录 | fuel_name; quantity; unit; net_calorific_value; meter_start; meter_end; equipment_id; allocation_driver | 计量或核对燃料采购和库存；各燃料分别换算为能量 | MJ | 每个计费或盘存期 | 代表性年度期间 | 每个纳入公用工程系统 | 扣除库存变化、因果分配并按合格产出质量归一化 | 校准仪表；发票；储罐核对；燃料证书 |
| `cp_refrigerant_balance` | `facility_utilities` | HFC-134a 补充和泄漏 | 设备级制冷剂库存 | equipment_id; refrigerant_name; opening_stock; purchases; charges; recovery; closing_stock | 按设备和报告期核对制冷剂质量 | kg | 每次维护及每年 | 代表性年度期间 | 仅纳入的冷却设备 | 以质量平衡计算 HFC-134a 损失，并按有记录服务驱动量分配 | 维护日志；钢瓶称量；采购发票；技术员记录 |
| `cp_direct_emissions` | `facility_utilities` | 具名燃烧排放 | 烟道测试、燃料使用、燃料性质和因子记录 | pollutant_name; measured_concentration; exhaust_volume; fuel_quantity; factor_value; factor_source; equipment_id | 有条件时采用烟道测量，否则对每项实测燃料采用已披露的批准因子 | kg | 每次测试和报告期 | 代表性年度期间 | 每个纳入燃烧源 | 分别计算每项污染物、因果分配并按合格产出质量归一化 | 实验室报告；因子来源；燃料记录；计算工作表 |
| `cp_final_product_mass` | `inspection_packaging` | 合格成品参考产品 | 最终检验、计数和质量记录 | product_id; specification_revision; reference_size; accepted_count; sample_count; net_sample_mass; accepted_net_mass | 称量不含包装的合格产出，或使用经核实平均净质量换算件数 | kg | 每个生产批次 | 代表性年度期间 | 每个纳入最终检验点 | 按规格汇总合格产品净质量 | 校准秤；检验放行；计数核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | BOM and component rows | 材料净输入 = 发放质量 - 经核实退库质量 | 发放质量；退库质量 | 每 kg 合格产品的 kg 原子材料输入 | `afw-pefcr-v3-1-2025` |
| `calc_item_component_mass` | counted hardware and packaging | 部件质量 = 件数 × 精确指定物件的实测平均质量 | 件数；样本数；样本质量 | 每 kg 合格产品的 kg 具名部件 | `afw-pefcr-v3-1-2025` |
| `calc_assembly_loss` | cutting, component, and rejected-product losses | 组装损失质量 = BOM 输入质量 - 合格产品质量 - 有记录退回材料 - 单独核对的留存品；分别报告每种废物组成和去向 | BOM 输入；合格质量；退回；在制品；实测废物 | 各原子废物行的 kg 损失和损失比例 | `afw-pefcr-v3-1-2025` |
| `calc_energy_normalization` | electricity and thermal utilities | 归一化能量 = 实测或因果分配的过程能量 / 合格产品净质量 | 仪表差值；分配驱动量；合格质量 | 每 kg 合格产品的 kWh 或 MJ | `afw-pefcr-v3-1-2025` |
| `calc_direct_combustion_emission` | named direct combustion emissions | 排放 = 实测燃料量 × 已披露因子，除非采用代表性烟道测量；各燃料和污染物分别计算 | 实测燃料；需要时的低位发热量；因子或烟道结果 | 每 kg 合格产品的 kg 具名污染物 |  |
| `calc_refrigerant_loss` | HFC-134a emission | 损失 = 期初库存 + 采购 - 期末库存 - 有记录的在设备内库存增量 - 回收量；与设备维护记录核对 | 期初与期末库存；采购；加注；回收；设备库存 | 每 kg 合格产品排放的 kg HFC-134a |  |
| `calc_mass_balance` | complete foreground system | 核对具名材料和包装输入与合格产品、退回材料、在制品、组成特定废物、定量时的废水组分及库存变化；解释超过已声明测量不确定度的每项残差 | 全部质量记录和库存变化 | 批次质量平衡表和残差 | `afw-pefcr-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and BOM | 合格产出使用精确 CPC 28237 Product flow，并保留可区分用品类型、尺码或合身、组成、结构、衬垫、钢圈、扣合、整理和包装状态的产品规格。 | state-100 天工身份；批准产品规格；BOM 修订版 |
| `dq_bom_coverage` | material inputs | 覆盖产品质量至少 95% 的 BOM，且覆盖全部主面料、里料、衬垫、如有的电子部件和金属；解释未覆盖比例。 | BOM 覆盖率计算和供应商规格 |
| `dq_measurement` | foreground amounts | 使用适合被测量的经校准仪表或秤；保留原始读数、单位换算、抽样基准及不确定度或容差。 | 校准证书；原始仪表和称量记录；换算工作表 |
| `dq_temporal` | all foreground records | 使用代表性年度管理期，或说明较短生产期的理由；识别异常停机、启动、返工和不合格品期间。 | 生产日历；公用工程期间；批次清单；代表性评估 |
| `dq_completeness` | process and atomic flows | 将每个纳入过程与路线核对，将每项适用材料、公用工程、化学品、包装、废物和直接排放分别成行；说明每个不适用行的理由。 | 路线至清单核对表；质量和能量核对；例外日志 |
| `dq_supplier_geography` | upstream datasets | 已知时使材料、公用工程、燃料和部件数据集匹配供应商地域和制造技术；记录代理及其数据质量后果。 | 供应商声明；发票；数据集映射日志 |
| `dq_uuid_status` | non-reference flow identities | 在 hybrid search 和 state-code-100 直读确认同一原子身份前保持 UUID 为空；发布前审查 manifest `inventory_uuid_review`。 | 双重核验记录或 manifest 明确的缺省理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 若参考产品 UUID、CPC 28237 分类、Product flow 类型、Mass UUID、Units of mass UUID 或 kg 参考单位与本 PCR 不同，则失败。 | `un-cpc-3-2025` |
| `validate_reference_amount` | finished_reference_product | 必须为恰好 1 kg 合格成品净质量；包装质量不得计入参考产品质量，使用包装时必须以单独包装行存在。 | `afw-pefcr-v3-1-2025` |
| `validate_required_qualifiers` | foreground_data_package | 缺少任何适用的必需限定信息、产品规格修订、参考尺码、生产场址、期间或湿整理路线时，完整性失败。 | `afw-pefcr-v3-1-2025` |
| `validate_bom_and_losses` | material_mass_balance | 要求 BOM 质量覆盖率至少 95%，包括全部主面料、里料、衬垫和金属，并核对组装损失、退回、在制品和不合格产品。 | `afw-pefcr-v3-1-2025` |
| `validate_atomic_inventory` | process_inventory | 选定流若合并电力和热能、多种燃料、多种制冷剂、多种化学品、多种包装材料、多种废物身份或多种基本排放，则失败。 |  |
| `validate_conditional_routes` | conditional_processes | 每个条件过程和行都必须由路线记录支持，或有证据标记为不适用；不得由行业平均推断湿处理、燃料使用或制冷剂泄漏。 | `eu-jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025` |
| `validate_uuid_dual_check` | non_reference_uuid | 非参考 UUID 若无同一原子流的天工 hybrid-search 匹配结果和 state-code-100 直读两项证据，则失败。 |  |
| `validate_no_invented_quantities` | foreground_amounts | 每个数量都必须来自前景记录或已声明计算；任何无引用默认值、推理估计或 AI 生成的定量范围均失败。 |  |
| `validate_bilingual_alignment` | localized_markdown | 中英文必须具有相同顺序的 process id、row id、选定流、UUID、数值模式、基准类型、证据类型、规则 id、来源 id 和来源记录。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明 CPC 28237 用品或可识别零件的工厂门前景生产数据集 |
| downstream_use | `secondary_dataset`；经代表性产品、地域、技术、时期和数据质量审查后可作 `background_dataset` |
| allowed_use | 产品特定过程建模、供应链 LCA、生命周期模型构建、产品足迹研究；只有功能单位、产品规格、边界、地域、技术、分配和数据质量等效时才可比较 |
| excluded_use | 无单独使用阶段模型的消费者使用建模；医疗器械主张；CPC 28237 外产品；替代上游纺织品或部件生产；无条件产品比较；将候选 UUID 当作已确认身份 |
| required_metadata | PCR id 和版本；CPC 代码；用品类型；成品或零件；BOM 和覆盖率；材料组成；结构；尺码和合身；衬垫、钢圈、扣合和肩带配置；场址和地域；期间；路线；湿整理；包装；分配；数据源；天工身份状态 |
| required_quality_disclosure | 前景与上游数据占比；仪表和秤覆盖；BOM 覆盖；时间代表性；供应商地域；分配方法；质量平衡残差；不合格品和废物去向；条件行判断；未解决 UUID 和数据集代理 |
| update_trigger | 产品规格、BOM、参考尺码、制造路线、场址、供应商地域、能源系统、湿整理化学品、包装、分配方法、处理路线、参考流身份或对数据集有实质影响的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division. Central Product Classification Version 3.0, Explanatory Notes, subclass 28237, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | 精确产品类别范围和分类身份 |
| `afw-pefcr-v3-1-2025` | official_guidance | Technical Secretariat of the Product Environmental Footprint Category Rules for Apparel and Footwear. Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025. https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ (retrieved 2026-08-13) | 内衣和胸罩范围；功能单位维度；BOM 覆盖；制造过程分解；组装损失；包装；能源、分配、数据采集、质量和验证规则 |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, European Bureau for Research on Industrial Transformation and Emissions. Best Available Techniques Reference Document for the Textiles Industry, January 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf (retrieved 2026-08-13) | 在现场发生时，条件性纳入并分开记录纺织洗涤、漂白、染色、整理、水、化学品、废水和污泥 |
| `munasinghe-et-al-2016-bra-lca` | literature | Munasinghe, M.; Jayasinghe, P.; Ralapanawe, V.; Gajanayake, A. Supply/value chain analysis of carbon and energy footprint of garment manufacturing in Sri Lanka. Sustainable Production and Consumption 5 (2016) 51-64. https://doi.org/10.1016/j.spc.2015.12.001 | 胸罩 BOM 含多种花边和弹性材料，以及制造能源和过程效率属于重要前景议题的产品特定证据 |
