---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-petticoats-panties-nightdresses-dressing-gowns-and-simi-5803f0c3
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 针织或钩编的女式或女童衬衫、女衬衫、衬裙、内裤、睡衣、晨衣及类似品

## 1. 范围与适用性

本 PCR 适用于生产可销售的针织或钩编女式或女童衬衫、女衬衫、衬裙、内裤、睡衣、晨衣及类似品的前景数据包。边界始于针织或钩编面料、辅料、助剂和包装材料进入报告制造场址，止于成品离开场址大门，涵盖产品特定的裁剪、缝制与组装、条件性成衣湿处理、整烫与整理、检验和销售包装。

纤维生产、纱线制造、面料针织或钩编、上游面料染整、配送、零售、消费者使用、维修和报废处理不作为前景操作；扩大研究范围时应通过相应上游或下游数据集保持这些阶段可见。非针织的机织服装、男式或男童服装、袜类、T 恤、毛衫、外衣及 CPC 28224 之外的产品不适用。

本规则是以质量为基础的制造数据生产规则，不是用于服装比较的全生命周期功能单位，不得单独用于面向消费者的产品比较。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-blouses-shirts-petticoats-panties-nightdresses-dressing-gowns-and-simi-5803f0c3 |
| classification_refs | CPC 3.0: 28224 |
| covered_products | 以针织或钩编方式制成的女式或女童衬衫、女衬衫、衬裙、内裤、睡衣、晨衣及类似品 |
| excluded_products | 机织或其他非针织服装；男式或男童服装；T 恤；毛衫；袜类；套装、大衣、夹克、连衣裙、裙子、裤子和短裤；作为面料销售而非作为成衣销售的产品 |
| representative_product | 以购入针织面料经裁剪、缝制、可选湿处理、整烫和包装制成并检验合格、完成销售包装的女式针织衬衫 |
| production_route | 以购入针织或钩编面料进行裁剪缝制，使用产品特定辅料并可在组装后进行条件性湿处理 |
| market_state | 制造场址门口的可销售成品；成衣净质量与包装质量分别报告 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明 CPC 28224 产品规格的针织或钩编女式或女童成品 |
| How much | 制造场址门口 1 kg 可销售成品净质量，不含销售包装 |
| How well | 符合所声明的款式、纤维组成、尺码范围、物料清单、质量等级、整理、颜色、洗护说明及适用耐久性或性能规格 |
| How long or cycle | 一个已声明的生产批次或生产活动；使用阶段寿命不在本前景参考范围内 |
| reference_flow_link | 参考数量为 `sale_packaging` 的成品净质量输出，在检验后确定，包装质量不得计入成衣质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | Women's or girls' blouses, shirts, petticoats, panties, nightdresses, dressing gowns and similar articles, knitted or crocheted `b7c07ef2-cdde-46c1-88df-c1e4d030520e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；女式或女童目标人群；针织或钩编结构；按质量计的纤维组成；款式或 SKU；参考尺码及尺码范围；成衣净质量；物料清单；颜色和整理；湿处理路线；辅料规格；生产地域；报告期；销售包装配置；质量等级 |

构建前景数据包时，全部必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量或计算不含塑料袋、纸箱、吊牌、插页及其他销售包装的可销售成衣净质量；全部清单数量归一化至 1 kg 成品净质量。 |
| `bom_mass_basis` | 留在产品中的面料、辅料和助剂 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按具体材料记录采购和领用质量；在物料清单可得时，不得以产品毛重替代物料清单。 |
| `packaging_separation` | 销售包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别计量每种包装材料并从参考产品质量中排除，同时作为归一化至参考流的投入保留。 |
| `energy_carrier_separation` | 电力、外购蒸汽、天然气和 LPG | 能源载体特定属性 | 按计量记录使用 kWh、MJ、kg 或 m3 | 保留原始能源载体和单位；不得把电力、蒸汽、天然气或 LPG 合并成一个能源数量，并应披露转换因子与热值基准。 |
| `water_mass_volume` | 工艺水和纺织废水 | 质量或体积 | kg 或 m3 | 保留水和废水的实测单位；进行转换时应报告密度、重要时的温度基准及确切转换方法。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate_to_gate` | 前景制造 | 纳入材料进入报告场址、裁剪、缝制与组装、适用的成衣湿处理、整烫与整理、检验、制造损失处理以及制造场址门口前的销售包装。 | `pefcr-apparel-footwear-2025`; `sandin-knitted-garment-2024` |
| `boundary_upstream_links` | 购入面料、辅料、化学品、能源、水和包装 | 每种购入投入均保持可见并链接具有地域、技术和时间代表性的上游数据集；不得把上游纤维、纱线和面料生产吸收到前景成衣操作中。 | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |
| `boundary_conditional_routes` | 湿处理和场内热能 | 仅在记录证明所声明产品实际发生相应活动时纳入每个条件性过程及其原子投入、废水、废物和直接排放；否则记录明确的不适用判定。 | `eu-textiles-bref-2023`; `pefcr-apparel-footwear-2025` |
| `boundary_losses` | 裁剪废料、组装损失、不合格品和包装废料 | 按材料和处理路线将制造损失及剩余物作为独立废物输出报告；不得用可回收废料抵减原生材料投入或成品输出。 | `pefcr-apparel-footwear-2025` |
| `boundary_exclusions` | 配送、零售、使用、维修和报废 | 从前景数据包中排除这些阶段并披露排除事项；仅在更宽的生命周期模型中加入相应下游情景。 | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入针织或钩编面料、辅料、工艺助剂和包装进入报告制造场址，且其身份、质量、供应商和上游数据集引用可得 |
| starting_condition_role | 门到门前景成衣制造起点 |
| product_classification_scope | CPC 28224 内的针织或钩编女式或女童成品；裁片和已组装成衣是制造中间状态，不构成独立分类声明 |
| recursive_input_rule | 已完成的 CPC 28224 成衣因委外整理、返工或重新包装而进入时，将其作为带上游数据集的同类别产品投入记录一次，仅建模新增前景操作，不递归重建其既往制造清单 |
| upstream_dataset_requirement | 每种购入面料、辅料、化学品、能源载体、水供应和包装材料均需代表性上游数据集，或披露未解决的数据缺口 |
| disclosure | 披露产品子类型、BOM 覆盖率、纤维组成、参考尺码、场址与期间、纳入过程、委外操作、湿处理配方、能源供应、损失去向、包装配置及全部排除项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | 材料准备与裁剪 | required | 采用针织或钩编面料进行裁剪缝制时始终纳入 | 将领用面料及适用衬料转化为成衣裁片并记录裁剪损失 | kg 裁片 |
| `sewing_assembly` | 缝制、辅料安装与组装 | required | 裁剪缝制制造始终纳入 | 将裁片和产品特定辅料组装为成衣 | kg 已组装成衣 |
| `garment_wet_processing` | 成衣湿处理 | conditional | 仅在已组装产品进行水洗、成衣染色、漂白、中和、柔软或其他湿处理时纳入 | 应用已声明湿处理配方并记录水、单项化学品、热能、废水和直接排放 | kg 湿处理后成衣 |
| `finishing_pressing` | 整烫、干整理、检验与修复 | required | 纳入销售包装前适用的整烫、干整理、终检和在线修复 | 生产合格成品并分离不合格品 | kg 成品 |
| `sale_packaging` | 销售包装与场址门口放行 | required | 纳入制造场址门口前施加的全部一级、二级和三级包装 | 包装并放行参考产品，同时分离成衣净质量与包装质量 | 1 kg 成品净质量 |

### 过程：材料准备与裁剪（`material_cutting`）

#### 输入

##### 产品流

###### 针织或钩编面料（`knitted_fabric_input`）

每种产品特定面料组成和整理应作为独立交换记录；仅当供应商数据集代表所声明混纺时，混纺面料才作为一个购入材料。

- 选定流：Knitted or crocheted fabric, product-specific fibre blend and finish
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：所声明产品领用于裁剪的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`pefcr-apparel-footwear-2025`

###### 针织里料（`lining_fabric_input`）

仅在产品具有独立里料时纳入，并记录实际纤维组成。

- 选定流：Knitted lining fabric, product-specific composition
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用于裁剪的里料实测质量；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

###### 粘合衬（`fusible_interlining_input`）

仅在使用粘合衬时纳入，并在元数据中保留其纺织和胶黏剂组成。

- 选定流：Fusible textile interlining, product-specific composition
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：衬料实测领用质量；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

###### 排料用纸（`marker_paper_input`）

纳入实体排料或样板处理所耗纸张；完全数字化且不耗纸的路线不纳入。

- 选定流：Paper for garment cutting markers
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于产品的采购或领用排料纸质量；无纸裁剪时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

###### 裁剪用电（`cutting_electricity_input`）

记录铺布、裁剪、粘合及本过程直接相关抽排设备的电力。

- 选定流：Electricity supplied to garment cutting equipment
- 流属性/单位：Energy / kWh
- 数量规则：分表实测，或由设备功率和运行时间计算分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成衣裁片（`cut_components_output`）

记录裁剪和粘合后转入缝制工序的成衣裁片质量。

- 选定流：Cut knitted garment components
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，或与裁剪投入和废物核对的 BOM 部件计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁片
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_cutting_records`

##### 废物流

###### 消费前针织裁剪废料（`cutting_textile_scrap_output`）

该废物流仅表示按纤维混纺成分和申报处理去向分别记录的针织裁剪废料。

- 选定流：Pre-consumer knitted textile cutting scrap
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量从裁剪移出的废料并校正库存变化，按纤维组成和去向分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`
- 来源：`pefcr-apparel-footwear-2025`

###### 废排料纸（`marker_paper_waste_output`）

该废物流仅表示裁剪工序废弃的排料纸，不与纺织废料合并。

- 选定流：Waste garment marker paper
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废弃排料纸；无纸路线不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_cutting_records`

##### 基本流

### 过程：缝制、辅料安装与组装（`sewing_assembly`）

#### 输入

##### 产品流

###### 成衣裁片（`cut_components_input`）

该中间投入仅表示转入缝制和组装工序的针织成衣裁片。

- 选定流：Cut knitted garment components
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测从 `material_cutting` 转入的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`

###### 缝纫线（`sewing_thread_input`）

该投入仅表示按实际纤维成分和线密度规格记录的缝纫线。

- 选定流：Sewing thread, product-specific fibre composition
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用质量减退回可用库存，并与线头废物核对；记录实际纤维组成和线密度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`
- 来源：`sandin-knitted-garment-2024`

###### 纽扣（`buttons_input`）

该投入仅表示物料清单中的纽扣，并保留纽扣材质及数量换算质量的证据。

- 选定流：Garment button, product-specific material
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用数量乘以每颗实测或供应商声明质量；BOM 中不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_assembly_records`

###### 拉链（`zipper_input`）

该投入仅表示物料清单中的拉链，并记录其申报材质、结构和长度。

- 选定流：Garment zipper, product-specific material and length
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用数量乘以每条实测或供应商声明质量；BOM 中不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_assembly_records`

###### 松紧带（`elastic_tape_input`）

该投入仅表示物料清单中的成衣松紧带，并记录其成分和宽度。

- 选定流：Garment elastic tape, product-specific composition
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用质量减退回可用库存；BOM 中不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`

###### 织物成衣标签（`textile_label_input`）

该投入仅表示缝入成衣的织物标签，不与纸质销售包装标签合并。

- 选定流：Woven textile garment label
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用数量乘以每枚实测或供应商声明质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sewing_assembly_records`

###### 缝制和辅料安装用电（`sewing_electricity_input`）

该交换仅表示申报成衣的缝纫机和辅料安装设备所消耗的电力。

- 选定流：Electricity supplied to sewing equipment
- 流属性/单位：Energy / kWh
- 数量规则：分表实测，或由设备功率和运行时间计算分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已组装针织成衣（`assembled_garment_output`）

该中间产出表示离开缝制工序、尚未进行可选湿处理或整烫的已组装针织成衣。

- 选定流：Assembled knitted garment before wet processing and pressing
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量转入下一适用过程的合格组装输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已组装成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`

##### 废物流

###### 不合格已组装针织成衣（`defective_assembly_output`）

该废物产出仅表示从生产中剔除并送往申报处理路线的不合格已组装针织成衣。

- 选定流：Defective assembled knitted garment for treatment
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量组装中判废且未在批次内修复的产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`

###### 缝纫线边角料（`sewing_thread_offcuts_output`）

该废物产出仅包含申报纤维成分的废弃缝纫线。

- 选定流：Sewing thread offcuts, product-specific fibre composition
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量所声明纤维组成的缝纫线边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`

###### 成衣松紧带边角料（`elastic_tape_offcuts_output`）

该废物产出仅包含申报成分的废弃成衣松紧带。

- 选定流：Garment elastic tape offcuts, product-specific composition
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量所声明组成的松紧带边角料；不使用松紧带时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_assembly_records`

##### 基本流

### 过程：成衣湿处理（`garment_wet_processing`）

#### 输入

##### 产品流

###### 待湿处理的已组装成衣（`assembled_garment_wet_input`）

该中间投入表示进入可选成衣湿处理工序的已组装针织成衣。

- 选定流：Assembled knitted garment before wet processing
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量批次装载量；不进行成衣湿处理时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 工艺水（`process_water_input`）

该交换表示专用于成衣洗涤、染色、漂白或漂洗工序的供水。

- 选定流：Process water for garment wet processing
- 流属性/单位：Volume / m3
- 数量规则：进入所声明成衣湿处理批次的水表计量量或槽体体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`eu-textiles-bref-2023`

###### 非离子纺织洗涤剂（`nonionic_detergent_input`）

该交换表示加入成衣湿处理浴液的一种具体非离子洗涤剂。

- 选定流：Nonionic textile detergent
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量加入批次的配制产品并披露有效成分；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 活性染料（`reactive_dye_input`）

该交换表示加入成衣染色工序的一种申报配方和颜色的活性染料。

- 选定流：Reactive textile dye, declared colour and active content
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量加入批次的配制染料；仅在活性成衣染色时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 氯化钠（`sodium_chloride_input`）

该交换表示在成衣活性染色中专门作为电解质加入的氯化钠。

- 选定流：Sodium chloride for reactive dyeing
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量加入批次的盐；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 碳酸钠（`sodium_carbonate_input`）

该交换表示为活性染料固色建立碱性条件而专门加入的碳酸钠。

- 选定流：Sodium carbonate for reactive dye fixation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量加入批次的碱；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 过氧化氢溶液（`hydrogen_peroxide_input`）

该交换表示专用于成衣漂白的过氧化氢溶液。

- 选定流：Hydrogen peroxide solution for garment bleaching
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量溶液并记录浓度；仅在过氧化物漂白时适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 乙酸溶液（`acetic_acid_input`）

该交换表示专用于纺织浴液中和的乙酸溶液。

- 选定流：Acetic acid solution for textile neutralisation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量溶液并记录浓度；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 湿处理用电（`wet_processing_electricity_input`）

该交换仅表示成衣湿处理设备所消耗的电力。

- 选定流：Electricity supplied to garment wet-processing equipment
- 流属性/单位：Energy / kWh
- 数量规则：水洗、染色、脱水、滚筒处理和适用干燥的分表电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

###### 湿处理外购蒸汽（`wet_processing_steam_input`）

该交换仅表示从场址外购入并供应成衣湿处理的蒸汽。

- 选定流：Purchased steam supplied to garment wet processing
- 流属性/单位：Energy / MJ
- 数量规则：实测蒸汽，或由实测质量、压力和冷凝水回流计算焓差；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_records`

###### 湿处理天然气（`wet_processing_natural_gas_input`）

该交换仅表示在场内燃烧、为成衣湿处理供热的天然气。

- 选定流：Natural gas combusted on site for garment wet processing
- 流属性/单位：Energy / MJ
- 数量规则：实测天然气并按披露的热值基准转换；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_records`

###### 湿处理 LPG（`wet_processing_lpg_input`）

该交换仅表示在场内燃烧、为成衣湿处理供热的液化石油气。

- 选定流：Liquefied petroleum gas combusted on site for garment wet processing
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于本过程的称量或发票 LPG；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿处理后针织成衣（`wet_processed_garment_output`）

该中间产出表示离开可选湿处理工序、尚未整烫的针织成衣。

- 选定流：Wet-processed knitted garment before pressing
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量湿处理和干燥后的合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`

##### 废物流

###### 纺织湿处理废水（`textile_wastewater_output`）

该废物产出仅表示成衣湿处理排出的、进入申报处理前的水性废液。

- 选定流：Wastewater from garment wet processing
- 流属性/单位：Volume / m3
- 数量规则：实测排放或水量平衡结果，并声明去向和处理状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_records`
- 来源：`eu-textiles-bref-2023`

##### 基本流

###### 天然气化石二氧化碳（`natural_gas_co2_output`）

该基本流产出仅表示湿处理现场燃烧天然气释放的化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air from on-site natural gas combustion
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测燃料及场址特定碳平衡或有引用的管辖区因子计算；无场内天然气燃烧时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_records`

###### LPG 化石二氧化碳（`lpg_co2_output`）

该基本流产出仅表示湿处理现场燃烧液化石油气释放的化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air from on-site LPG combustion
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测 LPG 及场址特定碳平衡或有引用的管辖区因子计算；无场内 LPG 燃烧时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 湿处理后成衣
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_processing_records`

### 过程：整烫、干整理、检验与修复（`finishing_pressing`）

#### 输入

##### 产品流

###### 待整烫成衣（`garment_before_pressing_input`）

未进行湿处理时使用合格已组装成衣，进行湿处理时使用湿处理后成衣；同一产品不得重复计入两者。

- 选定流：Knitted garment before pressing and final inspection
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量从前一适用过程转入的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_pressing_records`

###### 整烫与整理用电（`pressing_electricity_input`）

该交换仅表示成衣整烫与整理设备所消耗的电力。

- 选定流：Electricity supplied to pressing and finishing equipment
- 流属性/单位：Energy / kWh
- 数量规则：分表实测，或由设备功率和运行时间计算分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_pressing_records`

###### 整烫外购蒸汽（`pressing_steam_input`）

该交换仅表示从场址外购入并供应成衣整烫的蒸汽。

- 选定流：Purchased steam supplied to garment pressing
- 流属性/单位：Energy / MJ
- 数量规则：实测蒸汽，或由实测质量、压力和冷凝水回流计算焓差；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_pressing_records`

###### 整烫天然气（`pressing_natural_gas_input`）

该交换仅表示在场内燃烧、为成衣整烫供热的天然气。

- 选定流：Natural gas combusted on site for garment pressing
- 流属性/单位：Energy / MJ
- 数量规则：实测天然气并按披露热值转换；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_pressing_records`

###### 整烫 LPG（`pressing_lpg_input`）

该交换仅表示在场内燃烧、为成衣整烫供热的液化石油气。

- 选定流：Liquefied petroleum gas combusted on site for garment pressing
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于整烫的称量或发票 LPG；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_pressing_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 销售包装前成衣（`finished_garment_output`）

该中间产出表示整烫后、销售包装前符合要求的 CPC 28224 针织成衣。

- 选定流：Finished CPC 28224 knitted garment before sale packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量检验和在线修复后的可销售输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_pressing_records`

##### 废物流

###### 不合格针织成衣（`rejected_finished_garment_output`）

该废物产出仅表示检验后被拒收并送往申报处理路线的针织成衣。

- 选定流：Rejected finished knitted garment for treatment
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量经检验判废且未在报告批次内修复的产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_pressing_records`

##### 基本流

###### 整烫天然气化石二氧化碳（`pressing_natural_gas_co2_output`）

该基本流产出仅表示整烫现场燃烧天然气释放的化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air from on-site natural gas combustion
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测燃料及场址特定碳平衡或有引用的管辖区因子计算；无场内天然气燃烧时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_pressing_records`

###### 整烫 LPG 化石二氧化碳（`pressing_lpg_co2_output`）

该基本流产出仅表示整烫现场燃烧液化石油气释放的化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air from on-site LPG combustion
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测 LPG 及场址特定碳平衡或有引用的管辖区因子计算；无场内 LPG 燃烧时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_pressing_records`

### 过程：销售包装与场址门口放行（`sale_packaging`）

#### 输入

##### 产品流

###### 待包装成衣（`finished_garment_packaging_input`）

该中间投入表示进入销售包装工序的合格 CPC 28224 针织成衣。

- 选定流：Finished CPC 28224 knitted garment before sale packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测从 `finishing_pressing` 转入的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sale_packaging_records`

###### 低密度聚乙烯成衣袋（`polyethylene_polybag_input`）

该交换仅表示用于容纳一件或多件申报成衣的低密度聚乙烯袋。

- 选定流：Low-density polyethylene garment polybag
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用数量乘以每个实测或供应商声明质量；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sale_packaging_records`
- 来源：`pefcr-apparel-footwear-2025`

###### 瓦楞纸板运输箱（`corrugated_carton_input`）

该交换仅表示用于运输申报成衣的瓦楞纸板箱。

- 选定流：Corrugated cardboard shipping carton
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属批次的纸箱数量乘以空箱实测或供应商声明质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sale_packaging_records`
- 来源：`pefcr-apparel-footwear-2025`

###### 纸质成衣吊牌（`paper_hangtag_input`）

该交换仅表示附着于申报成衣的纸质吊牌。

- 选定流：Paper garment hangtag
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用数量乘以每张实测或供应商声明质量；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sale_packaging_records`
- 来源：`pefcr-apparel-footwear-2025`

###### 胶黏纸质包装标签（`adhesive_paper_label_input`）

该交换仅表示在申报成衣包装期间贴附的胶黏纸质标签。

- 选定流：Adhesive paper packaging label
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用数量乘以每张标签的实测或供应商声明质量；不存在时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sale_packaging_records`

###### 包装用电（`packaging_electricity_input`）

该交换仅表示成衣装袋、封口、贴标和纸箱搬运设备所消耗的电力。

- 选定流：Electricity supplied to garment packaging equipment
- 流属性/单位：Energy / kWh
- 数量规则：分表实测，或设备功率乘运行时间；完全手工且无动力设备时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sale_packaging_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考成品（`reference_finished_article_output`）

这是唯一写入经核验 CPC 28224 参考产品 UUID 的清单行。数量为成衣净质量，包装仍保留为独立投入和废物行。

- 选定流：Women's or girls' blouses, shirts, petticoats, panties, nightdresses, dressing gowns and similar articles, knitted or crocheted `b7c07ef2-cdde-46c1-88df-c1e4d030520e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰为 1 kg 可销售成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 废聚乙烯包装膜（`polyethylene_film_scrap_output`）

该废物产出仅包含成衣包装期间废弃的低密度聚乙烯薄膜。

- 选定流：Waste low-density polyethylene film from garment packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量报告场址产生的薄膜废料；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sale_packaging_records`

###### 废瓦楞纸板（`corrugated_cardboard_scrap_output`）

该废物产出仅包含成衣包装期间废弃的瓦楞纸板。

- 选定流：Waste corrugated cardboard from garment packaging
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量报告场址产生的纸箱废料；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sale_packaging_records`

###### 废纸质成衣吊牌（`paper_hangtag_scrap_output`）

该废物产出仅包含包装期间废弃的纸质成衣吊牌。

- 选定流：Waste paper garment hangtags
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量报告场址产生的纸质吊牌废料；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sale_packaging_records`

###### 废胶黏纸质包装标签（`adhesive_paper_label_scrap_output`）

该废物产出仅包含包装期间废弃的胶黏纸质包装标签。

- 选定流：Waste adhesive paper packaging labels
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量报告场址产生的胶黏纸质标签废料；不存在时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sale_packaging_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 产品专用及共享制造操作 | 在能够直接归属投入或排放时，优先通过产品特定计量、批次隔离、设备时间记录或单元过程细分避免分配。 | `eu-pef-method-2021` |
| `allocation_physical_causality` | 无法细分的共享公用工程和共同操作 | 使用导致负荷的有文件依据的物理驱动因子，如机器运行时间、蒸汽需求、处理质量或设备占用时间；质量并非因果驱动时不得默认按成品质量分配。 | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | 不存在可辩护物理关系的多输出操作 | 仅在记录无法采用细分、系统扩展和物理分配的原因后采用经济分配；使用同期净出厂价值并披露结果敏感性。 | `eu-pef-method-2021` |
| `allocation_scrap_no_credit` | 可回收制造废料和包装废物 | 报告废料全部质量和去向；不得从前景清单中扣除销售收入或避免的原生材料生产。回收收益或负荷属于明确选择的背景或生命周期模型约定。 | `pefcr-apparel-footwear-2025`; `eu-pef-method-2021` |
| `allocation_rework` | 在线修复和返工 | 将返工材料和能源保留在生产批次内；返工跨报告期时核对期初和期末在制品并披露方法。 | `pefcr-apparel-footwear-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_cutting_records` | `material_cutting` | 面料、衬料、排料纸、电力、裁片输出和拆分的裁剪废物 | BOM 领料记录、秤、废料票据、电表或设备日志 | batch_id; SKU; material_id; composition; opening_stock; issued_mass; returned_mass; cut_output_mass; scrap_mass; meter_start; meter_end; machine_power; operating_time; destination | 逐批采集并核对领用材料与输出、废物和库存变化 | kg; kWh | 每批；共享计量至少每班读数 | 连续至少一个代表性生产年度，或较短声明生产活动的全部批次 | 报告场址生产所声明产品的全部裁剪线 | 按材料和批次汇总合格记录，扣除退回可用库存，按因果机器时间分配共享电力，再除以成品净输出 | 经校准秤和电表记录；BOM 版本；库存台账；废料去向凭证 |
| `cp_sewing_assembly_records` | `sewing_assembly` | 裁片、各项辅料、电力、组装输出、不合格品和边角料 | BOM 领退料记录、组件计数与质量、生产日志、秤、电表或设备日志 | batch_id; SKU; trim_id; composition; count_used; mass_per_item; issued_mass; returned_mass; assembled_output_mass; defect_mass; offcut_mass; meter_start; meter_end; operating_time | 每批分别采集各种不同辅料和材料 | item; kg; kWh | 每批 | 连续至少一个代表性生产年度，或较短声明生产活动的全部批次 | 范围内全部缝制和辅料安装线 | 以留存测量把件数转为质量，核对投入和输出，按机器运行时间分配共享电力，并按成品净输出归一化 | BOM 和辅料规格；经校准秤；生产和拒收日志；电表记录 |
| `cp_wet_processing_records` | `garment_wet_processing` | 批次装载、水、各命名化学品、电力、蒸汽、天然气、LPG、废水、输出和直接燃烧 CO2 | 配方单、加料记录、仪表、槽位、燃料发票、批次日志、废水仪表与分析 | batch_id; recipe_id; chemical_id; concentration; dose_mass; load_mass; output_mass; water_in; wastewater_out; electricity; steam_mass; steam_pressure; condensate_return; fuel_quantity; calorific_value; emission_factor_id; treatment_destination | 每批采集并保留准确配方和能源载体特定计量基准 | kg; m3; kWh; MJ | 每个湿处理批次 | 连续至少一个代表性生产年度，或较短声明生产活动的全部批次 | 每个范围内湿处理单元和场内热源 | 汇总各原子交换，仅用披露因子计算蒸汽能量和直接 CO2，核对水与产品质量，并按合格湿处理输出和参考输出归一化 | 经校准仪表和加料装置；化学品 SDS/规格；配方批准；燃料和废水记录；有引用的排放因子记录 |
| `cp_finishing_pressing_records` | `finishing_pressing` | 成衣投入、电力、蒸汽、天然气、LPG、合格输出、不合格品和直接燃烧 CO2 | 转移称量、仪表、燃料发票、设备日志、检验与修复记录 | batch_id; input_mass; output_mass; rejected_mass; repaired_mass; meter_start; meter_end; steam_mass; steam_pressure; condensate_return; fuel_quantity; calorific_value; operating_time; emission_factor_id | 按批次采集并分离各能源载体 | kg; kWh; MJ | 每批；共享计量至少每班读数 | 连续至少一个代表性生产年度，或较短声明生产活动的全部批次 | 范围内每条整理、整烫、检验和修复线 | 核对成衣质量，按因果运行时间或处理量分配共享能源，以披露因子计算直接 CO2，并除以合格输出 | 经校准秤和仪表；燃料发票；检验和修复日志；有引用的排放因子记录 |
| `cp_sale_packaging_records` | `sale_packaging` | 成衣、各包装材料、电力、参考输出和拆分的包装废料 | 包装 BOM、件数、单件抽样质量、领退料记录、秤、生产日志 | batch_id; packaging_material_id; material_specification; count_used; sampled_mass_per_item; issued_mass; returned_mass; packaging_scrap_mass; net_garment_mass; packaged_units; electricity | 各包装材料分别采集，并独立核验成衣净质量 | item; kg; kWh | 每个包装批次 | 连续至少一个代表性生产年度，或较短声明生产活动的全部批次 | 范围内全部销售包装线 | 将件数转为质量，扣除退回库存，将包装排除在参考质量外，分配适用电力，并归一化至 1 kg 成衣净质量 | 包装规格和发票；经校准秤；件数转质量样本；批次放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单交换 | 归一化数量 = 归属于合格输出的交换数量 / 合格成品净质量 kg | 可归属交换数量；合格成品净质量 | 每 1 kg 成品净质量的交换数量 | `eu-pef-method-2021` |
| `calc_material_reconciliation` | 各过程和材料 | 期初库存 + 接收量或转入量 = 转出量 + 产品保留质量 + 各项废物质量 + 期末库存；调查而非静默分摊不明差异 | 期初库存；接收量；转移量；产品质量；各废物质量；期末库存 | 经核对的物料平衡及披露差异 | `pefcr-apparel-footwear-2025` |
| `calc_count_to_mass` | 纽扣、拉链、标签、吊牌、塑料袋和纸箱 | 材料质量 = 合格件数 × 有代表性的实测或供应商声明单件质量 | 件数；单件质量；抽样基准 | 材料特定投入质量 | `pefcr-apparel-footwear-2025` |
| `calc_shared_electricity` | 共享用电设备 | 可归属电力 = 计量期间电力 × 所声明产品因果驱动量 / 计量期间全部产品因果驱动总量 | 电表差值；按产品的机器时间或其他有依据的因果驱动量 | 产品可归属 kWh | `eu-pef-method-2021` |
| `calc_steam_energy` | 外购蒸汽 | 蒸汽能量 = 蒸汽质量 ×（供汽比焓 − 计入的冷凝水回流比焓）；保留压力、温度和回流假设 | 蒸汽质量；压力或温度；冷凝水回流；焓值来源 | 归属于产品的 MJ 蒸汽 | `eu-pef-method-2021` |
| `calc_direct_combustion_co2` | 场内天然气或 LPG 燃烧 | 直接化石 CO2 = 实测能源载体数量 × 有引用的场址特定碳平衡或管辖区因子；在所产数据集中记录因子身份和基准 | 燃料数量；适用时热值；排放因子 | 排入空气的 kg 化石 CO2 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和 BOM | 保留款式或 SKU、产品子类型、目标人群、结构、参考尺码、纤维组成、整理、净质量和 BOM 版本；BOM 覆盖全部留在产品中的材料。 | 批准的产品规格、BOM、技术包和放行记录 |
| `dq_primary_data` | 前景操作 | 对全部范围内过程使用企业特定记录；披露任何代理、分配、缺失仪表或排除生产线及其对完整性的影响。 | 仪表、秤、配方、发票、生产、检验和废物记录；数据缺口登记 |
| `dq_temporal` | 报告期 | 重复生产时覆盖有代表性的连续 12 个月，较短生产活动则覆盖全部批次；声明季节性、停机和异常批次。 | 生产日历和批次总体核对 |
| `dq_technology_geography` | 场址和过程代表性 | 识别场址、生产线、设备、湿处理技术、能源供应、水源、废水处理去向和废物处理路线。 | 场址登记、设备清单、公用工程合同、许可和处理凭证 |
| `dq_completeness` | 清单 | 证明已评估 BOM、按载体拆分的能源、水、命名工艺化学品、包装材料、拆分废物流和场内直接排放，且未使用集合选择流。 | 与采购、公用工程、生产和废物台账核对的签字完整性检查表 |
| `dq_measurement` | 仪表、秤和件数转质量 | 保留各材料测量的校准状态、分辨率、读数频率、抽样基准及不确定性或限制。 | 校准证书、抽样表和仪表登记 |
| `dq_source_traceability` | 外部和背景证据 | 对每个链接上游流记录数据集身份、地域、技术、参考年、版本及替代或代理决定。 | 数据集登记和有文件依据的选择理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认参考流是经核验的 CPC 28224 公开 Product flow，使用 Mass 和 kg，并携带全部产品必需限定信息。 | `un-cpc-v3`; `pefcr-apparel-footwear-2025` |
| `validate_reference_mass` | 归一化 | 确认归一化后参考输出恰为 1 kg 合格成品净质量，且销售包装不计入该质量。 | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |
| `validate_atomic_inventory` | 清单行 | 拒绝合并材料、能源载体、化学品、废物流、排放或路线选项的任何行；每个选定流仅表示一个具体交换。 | `pefcr-apparel-footwear-2025` |
| `validate_process_route` | 过程图 | 确认每个必需过程具有详细清单，每个条件性湿处理或能源路线均有记录支持或明确的不适用判定。 | `pefcr-apparel-footwear-2025`; `sandin-knitted-garment-2024` |
| `validate_mass_balance` | 裁剪、组装、湿处理、整理和包装 | 按材料核对投入、输出、废物和库存变化并调查不明差异；不得通过修改参考输出来强制平衡。 | `pefcr-apparel-footwear-2025` |
| `validate_energy_separation` | 公用工程 | 确认电力、外购蒸汽、天然气和 LPG 保持分离，且共享公用工程分配使用披露的因果驱动量。 | `eu-pef-method-2021` |
| `validate_wet_processing` | 成衣湿处理 | 发生湿处理时，要求准确配方、每种命名化学品、水、按载体拆分的能源、废水去向及适用直接燃烧排放；拒绝通用化学品或能源集合。 | `eu-textiles-bref-2023`; `pefcr-apparel-footwear-2025` |
| `validate_packaging` | 销售包装 | 确认塑料袋、纸箱、吊牌、胶黏纸质标签及任何额外包装材料分别计量，并排除在成衣净质量之外。 | `pefcr-apparel-footwear-2025` |
| `validate_uuid_evidence` | 带 UUID 的行 | 仅接受经 hybrid 搜索和公开 state100 直读确认的 Tiangong UUID；其他 UUID 保持空白并保留逐行审查记录。 |  |
| `validate_data_quality` | 所产前景数据集 | 确认时间覆盖、场址范围、校准、BOM 覆盖、分配、数据缺口、链接数据集元数据和完整性披露均已提供。 | `eu-pef-method-2021`; `pefcr-apparel-footwear-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 28224 针织或钩编女式或女童成品的产品特定前景制造数据集 |
| downstream_use | `secondary_dataset`；经独立评审且具有地域和技术代表性并链接所声明产品限定信息时，可作为 `background_dataset` |
| allowed_use | 前景过程构建、供应商特定产品足迹研究，以及明确加入上游面料生产和适用下游阶段的生命周期模型 |
| excluded_use | 直接比较服装产品；用于机织服装或其他 CPC 类别声明；替代缺失的纤维、纱线、面料、配送、使用或报废清单；在无产品和路线限定信息情况下使用 |
| required_metadata | PCR id 和版本；CPC 28224；款式或 SKU；子类型和目标人群；纤维组成和 BOM；尺码基准；产品净质量；纳入过程；湿处理路线；场址和地域；技术；报告期；能源供应；包装配置；分配；上游数据集身份；废物去向 |
| required_quality_disclosure | 一手数据占比；BOM 覆盖率；测量和校准基准；时间、地域和技术代表性；分配驱动量；物料平衡结果；未解决 UUID；代理；排除项；缺失数据；不确定性和评审状态 |
| update_trigger | 产品结构或 BOM、纤维组成、尺码基准、制造场址或生产线、湿处理配方、能源或水供应、废水或废物处理、包装配置、分配方法、参考流身份发生变化，或证据和数据超出所声明代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0 resources，https://unstats.un.org/unsd/classifications/Econ/CPC（检索日期 2026-08-13） | 官方分类体系背景和 CPC 28224 范围 |
| `pefcr-apparel-footwear-2025` | 标准（`standard`） | Technical Secretariat，Product Environmental Footprint Category Rules: Apparel and Footwear，Version 3.1，2025-04-29，有效期至 2027-12-31，https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf（检索日期 2026-08-13） | 服装制造边界与过程分解；BOM 和组装损失记录；包装拆分；企业特定数据和质量规则 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，http://data.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-13） | 功能单位与参考流、完整性、前景数据、分配层级、能源建模、数据质量和报告 |
| `eu-textiles-bref-2023` | 官方指南（`official_guidance`） | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Textiles Industry，2023，DOI 10.2760/355887，https://doi.org/10.2760/355887（检索日期 2026-08-13） | 条件性纺织湿处理操作、水和化学品记录范围、废水与环境控制披露 |
| `sandin-knitted-garment-2024` | 文献（`literature`） | Sandin et al.，Life cycle assessment of a circular textile value chain: the case of a garment made from chemically recycled cotton，The International Journal of Life Cycle Assessment，2024，https://doi.org/10.1007/s11367-024-02346-2（检索日期 2026-08-13） | 针织成衣裁剪、缝制、辅料安装、整烫、印花或干燥及塑料袋和纸箱包装的独立过程证据 |
