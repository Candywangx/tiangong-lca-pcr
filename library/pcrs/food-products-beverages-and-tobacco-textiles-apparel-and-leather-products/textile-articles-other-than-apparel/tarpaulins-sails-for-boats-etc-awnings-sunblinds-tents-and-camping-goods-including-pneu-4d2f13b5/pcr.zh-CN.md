---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tarpaulins-sails-for-boats-etc-awnings-sunblinds-tents-and-camping-goods-including-pneu-4d2f13b5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 防水帆布、船帆布、帐篷布、遮日帘、帐幕及宿营用品（包括充气床垫）

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 27160 下成品纺织制品的工厂大门前景数据包：篷布、船帆及类似帆具、遮篷、遮阳帘、帐篷，以及包括纺织物主体充气床垫在内的纺织露营用品。声明的产品子类型和物料清单决定适用的条件性路线。

产品边界包括净成品以及随成品交付的组件，例如纺织面片、接缝、闭合件、增强件、支杆、地钉、阀门和永久连接配件。包装进入清单，但不计入参考产品质量。排除按长度销售的纺织面料、服装、降落伞、睡袋及其他 CPC 27180 填充制品、单独销售的支撑五金、维修服务，以及归入 CPC 27160 以外的非纺织充气制品。

前景边界覆盖报告制造商控制的作业，自接收材料至工厂大门处合格产品。厂内织物形成、预处理、涂层、层压、印花、防水整理、阻燃整理和固化为条件性过程。若由报告制造商实施，裁剪、连接、最终装配、检验和发运准备为必需过程。采购材料必须使用上游数据集，不得在前景中重复重建其生产。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.tarpaulins-sails-for-boats-etc-awnings-sunblinds-tents-and-camping-goods-including-pneu-4d2f13b5 |
| classification_refs | CPC 3.0: 27160，精确映射 |
| covered_products | 归入 CPC 27160 的成品纺织篷布、帆具、遮篷、遮阳帘、帐篷、纺织露营用品和纺织物主体充气床垫 |
| excluded_products | 按长度销售的面料；服装；降落伞；睡袋及其他 CPC 27180 填充制品；单独销售的五金；维修服务；CPC 27160 以外的非纺织充气制品；运输和使用阶段服务 |
| representative_product | 报告制造商工厂大门处的 CPC 27160 净成品 |
| production_route | 采购或厂内形成纺织基材；条件性预处理、涂层、层压、印花或功能整理；裁剪；缝纫、胶粘或热焊接；组件装配；检验；包装和发运准备 |
| market_state | 合格成品；除非产品规范另定调湿状态，否则为干态；不含可拆卸包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合声明产品规范的成品篷布、帆具、遮篷、遮阳帘、帐篷、露营用品或纺织物主体充气床垫 |
| How much | 1 kg 净成品 |
| How well | 符合声明的子类型、尺寸或尺码等级、纺织成分、涂层或层压体系、连接路线、功能整理、随附组件规范和质量验收准则 |
| How long or cycle | 工厂大门处一个合格生产批次；下游使用可声明寿命，但不得据此改变质量参考 |
| reference_flow_link | `final_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Tarpaulins, sails for boats etc., awnings, sunblinds, tents and camping goods (including pneumatic mattresses) `176ee965-23e5-444c-8b6c-9457334cae4c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；产品型号或规范；净成品质量；尺寸或尺码等级；纺织纤维成分；纺织结构；涂层或层压聚合物及其质量占比；功能整理；连接路线；随附支杆、地钉、阀门、闭合件和配件；调湿状态；制造地理；生产期间；工厂大门点 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 净合格成品。排除可拆卸包装，但包括作为成品一部分交付的全部组件。 |
| `material_mass_basis` | 纺织基材、聚合物、缝纫线、胶粘剂、闭合件、支杆、地钉、产品和废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留报告期总质量和净质量，并仅在与合格产品输出核对后归一化。质量受影响时应声明含水或调湿基准。 |
| `coating_mass_basis` | 涂层、层压材料、胶粘剂和整理化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录供货状态质量；用于解释时，可依据供应商或实测固含量另行计算干固体或聚合物质量，但不得替代供货状态记录。 |
| `energy_measurement` | 电力和燃料 | Energy | 电力用 kWh；燃料用 MJ | 保留计量或发票单位和换算因子。共享仪表只能按与适用过程关联的、文件化物理驱动因子进行分配。 |
| `water_measurement` | 工艺水 | Mass 或 volume | kg 或 m3 | 保留实测单位。仅在声明密度和温度基准后，才可将体积换算为质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造商受控边界接收的纱线、纺织基材、涂层或整理化学品、组件、包装和公用工程；另行声明任何厂内上游纺织作业 |
| starting_condition_role | 制成纺织制品的前景生产起点 |
| product_classification_scope | 仅 CPC 3.0 代码 27160，并受声明子类型和产品规范约束 |
| recursive_input_rule | 采购且已归入 CPC 27160 的中间产品，只作为带上游数据集的供应产品输入记录一次；不得在接收过程中递归重建其生产 |
| upstream_dataset_requirement | 采购纱线、面料、涂层聚合物、整理化学品、胶粘剂、缝纫线、闭合件、金属或聚合物组件、包装、水、电力和燃料均须使用供应商或地理适配的上游数据集 |
| disclosure | 声明哪些织物形成、预处理、涂层、层压、整理、裁剪、连接、装配、废物处理和包装作业在厂内、外包或不存在，并披露全部截断和共享设施分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景产品系统 | 纳入声明接收材料状态至工厂大门处合格成品的全部制造商控制作业，包括内部管理的不合格品、废物、废水和直接大气排放。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `boundary_route_disclosure` | 条件性纺织作业 | 若在厂内实施，纳入织物生产、预处理、涂层、层压、印花、整理、干燥或固化；否则以采购处理后纺织物及其上游数据集表示，并声明从前景排除。 | `eu-textiles-bat-2022` |
| `boundary_packaging` | 发运准备 | 清单计入包装材料和包装废料，但可拆卸包装不计入 1 kg 参考产品质量。 | `iso-14044-2006` |
| `boundary_no_recursive_double_count` | 采购 CPC 27160 中间产品 | 在接收边界对供应中间产品建模一次并链接其上游数据集；不得在接收前景过程中重复重建同一上游生产。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `textile_formation_preparation` | 纺织基材形成与准备 | `conditional` | 报告制造商控制纱线转化、织造、针织、洗涤、退浆或其他基材准备作业时纳入。 | 前景中间产品生产 | 每 kg 转移至下一受控作业的准备后纺织物，并最终归一化到 1 kg 合格产品 |
| `coating_lamination_finishing` | 涂层、层压和功能整理 | `conditional` | 报告制造商控制涂层、层压、印花、防水、阻燃整理、干燥或固化时纳入。 | 前景功能处理 | 每 kg 转移至装配的整理后纺织物，并最终归一化到 1 kg 合格产品 |
| `cutting_joining_assembly` | 裁剪、连接和组件装配 | `required` | 始终纳入制造商控制的纺织面片和组件向声明制品的转化。 | 前景制品制造 | 每 1 kg 转移至检验的装配制品 |
| `inspection_packaging_dispatch` | 检验、包装和工厂大门发运准备 | `required` | 始终纳入最终验收；工厂大门发运使用包装时纳入包装。 | 前景最终产品生产 | 恰好 1 kg 净合格成品 |

### 过程：纺织基材形成与准备（`textile_formation_preparation`）

#### 输入

##### 产品流

###### 涤纶长丝纱（`tf_polyester_yarn`）

仅当涤纶长丝纱在前景边界内被实际转化为声明的纺织基材时记录。

- 选定流：Polyester filament yarn
- 流属性/单位：Mass / kg
- 数量规则：报告期内发往本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-textiles-bat-2022`

###### 聚酰胺长丝纱（`tf_polyamide_yarn`）

聚酰胺或尼龙基材路线中的聚酰胺长丝纱作为独立交换记录。

- 选定流：Polyamide filament yarn
- 流属性/单位：Mass / kg
- 数量规则：报告期内发往本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-textiles-bat-2022`

###### 棉纱（`tf_cotton_yarn`）

厂内形成棉或棉混纺基材时单独记录棉纱。

- 选定流：Cotton yarn
- 流属性/单位：Mass / kg
- 数量规则：报告期内发往本过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-textiles-bat-2022`

###### 低压电力（`tf_electricity`）

织造、准备、物料搬运和相关控制使用的电力，按适用仪表或发票记录。

- 选定流：Alternating-current electricity, low voltage, consumption mix
- 流属性/单位：Energy / kWh
- 数量规则：可归因于本过程的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-textiles-bat-2022`

###### 工艺水（`tf_process_water`）

厂内洗涤、退浆或其他湿法准备使用的供水，与采购化学品内含水分开记录。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

不规定通用废物输入。仅当一种具体外来废物实际跨越本过程边界时才记录。

##### 基本流

本过程不规定通用基本流输入。未由供应产品流表示的资源取用必须新增为环境区室特定的原子交换。

#### 输出

##### 产品流

###### 准备后纺织基材（`tf_prepared_textile`）

转移至下一受控作业的准备后机织纺织物作为前景中间产品记录，并与纱线输入和废料核对。

- 选定流：Prepared woven textile substrate
- 流属性/单位：Mass / kg
- 数量规则：转移的实测干态质量或声明调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`eu-textiles-bat-2022`

##### 废物流

###### 纺织生产废料（`tf_textile_scrap`）

离开准备过程的纱线和织物废料作为独立废物流计量，不得从材料输入中净扣除。

- 选定流：Textile production scrap
- 流属性/单位：Mass / kg
- 数量规则：转移至再使用、回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

###### 纺织预处理废水（`tf_pretreatment_wastewater`）

离开厂内洗涤或预处理并进入内部或外部处理的废水，作为一股路线特定废物流记录。

- 选定流：Textile pretreatment wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或用声明密度换算的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

监测或许可证识别的厂内预处理直接基本流排放，必须新增为物质和环境区室均特定的独立卡片。

### 过程：涂层、层压和功能整理（`coating_lamination_finishing`）

#### 输入

##### 产品流

###### 准备后纺织基材（`cf_prepared_textile`）

进入涂层、层压或整理的纺织基材按实际调湿状态记录。

- 选定流：Prepared woven textile substrate
- 流属性/单位：Mass / kg
- 数量规则：投入处理线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-textiles-bat-2022`

###### 聚氯乙烯树脂（`cf_pvc_resin`）

仅对声明的 PVC 涂层或薄膜层压路线记录 PVC 树脂；增塑剂和其他添加剂如使用，必须另设卡片。

- 选定流：Polyvinyl chloride resin
- 流属性/单位：Mass / kg
- 数量规则：发往该路线的实测供货状态树脂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-textiles-bat-2022`

###### 聚氨酯涂层树脂（`cf_polyurethane_resin`）

仅对声明的聚氨酯涂层或层压路线记录聚氨酯涂层树脂，不得与溶剂、催化剂或交联剂合并。

- 选定流：Polyurethane coating resin
- 流属性/单位：Mass / kg
- 数量规则：发往该路线的实测供货状态树脂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-textiles-bat-2022`

###### 合成橡胶胶乳（`cf_synthetic_rubber_latex`）

仅对声明的涂胶纺织物路线记录合成橡胶胶乳，并在产品规范中识别聚合物化学组成。

- 选定流：Synthetic rubber latex
- 流属性/单位：Mass / kg
- 数量规则：发往该路线的实测供货状态胶乳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-textiles-bat-2022`

###### 工艺水（`cf_process_water`）

涂层配制、洗涤、漂洗或整理用水按路线特定仪表或批次记录采集。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-textiles-bat-2022`

###### 低压电力（`cf_electricity`）

涂层、层压、整理、泵送、通风、干燥控制和治理设备用电，与热燃料分开记录。

- 选定流：Alternating-current electricity, low voltage, consumption mix
- 流属性/单位：Energy / kWh
- 数量规则：可归因于该路线的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-textiles-bat-2022`

###### 天然气（`cf_natural_gas`）

仅当声明路线使用天然气直接或间接干燥和固化时记录。

- 选定流：Natural gas
- 流属性/单位：Net calorific energy / MJ
- 数量规则：使用供应商低位热值换算的计量或发票燃料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

不规定通用废物输入。回用于本过程的回收涂层材料必须使用自身的具体材料卡片并保留来源。

##### 基本流

不规定通用基本流输入。适用时，直接资源取用必须新增为环境区室特定的原子交换。

#### 输出

##### 产品流

###### 涂层或层压纺织基材（`cf_finished_textile`）

转移至裁剪和装配的处理后纺织物，应记录涂层或层压化学组成、干增重和调湿状态。

- 选定流：Coated or laminated textile substrate
- 流属性/单位：Mass / kg
- 数量规则：转移的实测整理后纺织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`eu-textiles-bat-2022`

##### 废物流

###### 废纺织涂层浆料（`cf_spent_coating_paste`）

送往回收、处理或处置的未使用或废涂层浆料应记录，且不得与废水合并。

- 选定流：Spent textile coating paste
- 流属性/单位：Mass / kg
- 数量规则：从该路线移出的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

###### 纺织涂层废水（`cf_coating_wastewater`）

涂层和整理产生的废水或单独收集液体，在其离开过程进入处理之处记录。

- 选定流：Textile coating wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或用声明密度换算的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 排放至空气的总挥发性有机碳（`cf_tvoc_air`）

路线使用有机化合物且监测识别排放时，记录涂层、层压、干燥、固化或整理产生的 TVOC。

- 选定流：Total volatile organic carbon to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或由监测浓度与排气流量计算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：`eu-textiles-bat-2022`

###### 排放至空气的甲醛（`cf_formaldehyde_air`）

适用的涂层、印花、层压、整理或热处理产生的甲醛，应作为独立的物质特定交换记录。

- 选定流：Formaldehyde to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或由监测浓度与排气流量计算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：`eu-textiles-bat-2022`

###### 排放至空气的氨（`cf_ammonia_air`）

适用的涂层、印花、整理或热处理产生的氨，与 TVOC 和甲醛分别记录。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或由监测浓度与排气流量计算的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 整理后纺织物输出，并核对至 1 kg 合格产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air_emission_records`
- 来源：`eu-textiles-bat-2022`

### 过程：裁剪、连接和组件装配（`cutting_joining_assembly`）

#### 输入

##### 产品流

###### 整理后纺织基材（`as_finished_textile`）

进入面片裁剪的实际整理后纺织物，应记录其成分、涂层或层压材料、单位面积质量以及供应商或内部批次标识。

- 选定流：Finished textile substrate
- 流属性/单位：Mass / kg
- 数量规则：发往裁剪的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`unstats-cpc-3-0-2025`

###### 涤纶缝纫线（`as_sewing_thread`）

涤纶缝纫线仅对缝制接缝记录，不得与拉链、织带或其他辅料合并。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量，或与生产核对的线轴库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`unstats-cpc-3-0-2025`

###### 聚氨酯胶粘剂（`as_adhesive`）

聚氨酯胶粘剂仅对胶粘路线记录；其他胶粘剂化学品必须分别设卡。

- 选定流：Polyurethane adhesive
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的供货状态胶粘剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-textiles-bat-2022`

###### 涤纶线圈拉链（`as_zipper`）

作为成品组成部分交付的涤纶线圈拉链，应作为自身的组件交换记录。

- 选定流：Polyester coil zipper
- 流属性/单位：Mass / kg
- 数量规则：发往合格生产的实测组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_records`
- 来源：`unstats-cpc-3-0-2025`

###### 铝合金帐篷支杆（`as_aluminium_pole`）

铝合金帐篷支杆仅在随声明产品交付时记录，且不得代表其他框架或配件。

- 选定流：Aluminium alloy tent pole
- 流属性/单位：Mass / kg
- 数量规则：发往合格生产的实测组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_records`
- 来源：`unstats-cpc-3-0-2025`

###### 钢制帐篷地钉（`as_steel_fastener`）

钢制帐篷地钉随声明帐篷或露营产品交付时单独记录。

- 选定流：Steel tent stake
- 流属性/单位：Mass / kg
- 数量规则：发往合格生产的实测组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_records`
- 来源：`unstats-cpc-3-0-2025`

###### 低压电力（`as_electricity`）

裁剪、缝纫、焊接、胶粘固化、通风和装配设备用电应尽可能独立计量。

- 选定流：Alternating-current electricity, low voltage, consumption mix
- 流属性/单位：Energy / kWh
- 数量规则：可归因于裁剪、连接和装配的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

裁剪和装配过程不规定通用废物输入。

##### 基本流

不规定通用基本流输入。如有直接资源取用，应逐项单独新增。

#### 输出

##### 产品流

###### 已装配 CPC 27160 纺织制品（`as_assembled_product`）

转移至最终检验的装配制品，在加入可拆卸发运包装前记录。

- 选定流：Assembled CPC 27160 textile article
- 流属性/单位：Mass / kg
- 数量规则：转移至检验的实测装配净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`unstats-cpc-3-0-2025`

##### 废物流

###### 纺织裁剪边角料（`as_textile_offcuts`）

纺织边角料作为独立废物流记录，并在支持记录中按基材和处理路线区分。

- 选定流：Textile cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：送往再使用、回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

###### 固化聚氨酯胶粘剂废物（`as_adhesive_waste`）

固化聚氨酯胶粘剂废物仅对聚氨酯胶粘路线记录，且不包括未固化危险残余物。

- 选定流：Cured polyurethane adhesive waste
- 流属性/单位：Mass / kg
- 数量规则：转移至处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 装配制品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-textiles-bat-2022`

##### 基本流

直接连接排放在实测或许可证相关时，必须按物质和环境区室分别设卡；不得使用合并的大气排放卡片。

### 过程：检验、包装和工厂大门发运准备（`inspection_packaging_dispatch`）

#### 输入

##### 产品流

###### 已装配 CPC 27160 纺织制品（`pk_assembled_product`）

进入最终检验的装配制品按加入可拆卸包装前的净质量记录。

- 选定流：Assembled CPC 27160 textile article
- 流属性/单位：Mass / kg
- 数量规则：进入最终检验的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`unstats-cpc-3-0-2025`

###### 瓦楞纸箱（`pk_corrugated_box`）

工厂大门发运所用瓦楞纸箱单独进入清单，并排除在参考产品质量之外。

- 选定流：Corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：发往合格生产的实测包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`

###### 低密度聚乙烯包装膜（`pk_polyethylene_film`）

用于包裹或装袋的 LDPE 薄膜与瓦楞纸箱分别记录。

- 选定流：Low-density polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：发往合格生产的实测包装膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iso-14044-2006`

###### 低压电力（`pk_electricity`）

检验、气密或强度测试、折叠、包装和发运准备使用的电力按适用仪表记录。

- 选定流：Alternating-current electricity, low voltage, consumption mix
- 流属性/单位：Energy / kWh
- 数量规则：可归因于最终检验和包装的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 来源：`eu-textiles-bat-2022`

##### 废物流

本过程不规定通用废物输入。

##### 基本流

本过程不规定通用基本流输入。

#### 输出

##### 产品流

###### 合格 CPC 27160 成品（`final_product_output`）

定量参考为工厂大门处合格净成品，不含可拆卸包装，但包括作为制品一部分交付的全部组件。

- 选定流：Tarpaulins, sails for boats etc., awnings, sunblinds, tents and camping goods (including pneumatic mattresses) `176ee965-23e5-444c-8b6c-9457334cae4c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg，单位组为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：归一化后恰好 1 kg 合格净成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：`unstats-cpc-3-0-2025`

##### 废物流

###### 不合格 CPC 27160 纺织制品（`pk_rejected_product`）

最终检验中不合格的成品与裁剪废料分别记录，不得从合格输出中净扣除。

- 选定流：Rejected CPC 27160 textile article
- 流属性/单位：Mass / kg
- 数量规则：不合格并转移至返工、回收、处理或处置的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iso-14048-2002`

###### 瓦楞纸包装废料（`pk_packaging_scrap`）

包装过程中损坏或裁切的瓦楞纸板作为独立废物流记录。

- 选定流：Corrugated board packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：转移至再使用、回收、处理或处置的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iso-14048-2002`

##### 基本流

如存在直接测试或包装排放，必须新增为物质和环境区室均特定的独立卡片。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出或共享作业 | 首先通过过程细分，或使用过程特定仪表、材料领用和生产记录来避免分配。 | `iso-14044-2006` |
| `allocation_physical` | 无法避免的共享公用工程或作业 | 无法细分时，使用反映资源使用或排放驱动因素的文件化物理关系，例如机器时间、处理纺织物质量、排气流量或计量能源。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的可销售次级输出 | 仅将经济分配作为披露的后备方法，并提供报告期价格、币种、地理、价格日期和敏感性分析。 | `iso-14044-2006` |
| `allocation_waste_no_credit` | 纺织边角料、涂层废物、废水、不合格制品和包装废料 | 在前景边界按总量报告产生的废物。除非明确声明并一致应用下游建模惯例，不得在前景清单内扣除替代产品或回收收益。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly` | 纱线、纺织物和聚合物材料输入 | 地磅、台秤、仓库领用和库存记录 | material identity; supplier; batch; opening stock; receipts; issues; returns; closing stock; measured mass; conditioning basis | 校准秤和库存核对 | kg | 每批次采集并每月核对 | 至少一个有代表性的生产年度，或批次生产的完整生产期 | 数据集内全部受控生产线 | 按精确材料身份汇总净领用；核对期初加收货减退回和期末；除以合格参考产品质量 | 校准记录；库存核对；供应商规范；异常日志 |
| `cp_chemical_records` | `coating_lamination_finishing`; `cutting_joining_assembly` | 涂层树脂、胶乳和胶粘剂输入 | 批次配方和化学品领用记录 | chemical identity; formulation; batch; as-supplied mass; solids content; returned amount; retained waste | 校准批次秤和签批配方记录 | kg | 每批次 | 与产品输出相同期间 | 每条适用的涂层、层压、整理或胶粘生产线 | 按精确化学品汇总供货状态净用量；固含计算单独保留；按合格参考产品质量归一化 | 秤校准；安全或技术数据表；配方批准；质量核对 |
| `cp_component_records` | `cutting_joining_assembly` | 闭合件、支杆和地钉输入 | 物料清单、领用数量和抽样质量 | component identity; specification; count issued; count returned; sample mass; batch | 数量核对与校准抽样称量，或直接总质量称量 | kg | 每生产批次 | 与产品输出相同期间 | 数据集内全部装配线及受控外包装配 | 仅由实测代表组件质量换算数量；核对领用、退回和不合格品；按合格参考产品质量归一化 | 批准的物料清单；秤校准；抽样记录；供应商规范 |
| `cp_utility_records` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly`; `inspection_packaging_dispatch` | 电力、燃料和供水 | 仪表、发票和生产时间记录 | meter id; opening reading; closing reading; unit; fuel calorific value; process runtime; production mass | 优先直接分表；否则使用文件化共享仪表分配 | kWh; MJ; kg; m3 | 仪表间隔或发票期间，每月核对 | 至少一个有代表性的生产年度，或完整生产期 | 全部受控设施和相关共享公用工程 | 读数差；扣除有记录的非生产使用；按物理驱动分配共享量；按合格参考产品质量归一化 | 仪表校准；发票；燃料证书；分配工作表；异常调查 |
| `cp_output_mass` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly`; `inspection_packaging_dispatch` | 中间产品和合格产品输出 | 校准秤、生产和质量记录 | batch; product subtype; gross mass; tare; net mass; accepted mass; rejected mass; conditioning state | 与生产和质量处置关联的校准称量 | kg | 每批次或批号 | 与全部输入输出相同期间 | 每条纳入的生产线 | 按子类型汇总合格净输出；不合格和返工量分别保留；以合格净质量作为归一化分母 | 秤校准；批次谱系；质量放行；物料衡算核对 |
| `cp_packaging_records` | `inspection_packaging_dispatch` | 发运包装输入 | 包装领用、数量和抽样质量记录 | packaging identity; count; sample mass; issues; returns; damaged units | 直接称量或数量乘实测单件质量 | kg | 每批次采集并每月核对 | 与产品输出相同期间 | 数据集内全部发运包装 | 按精确材料汇总包装净用量并按合格产品质量归一化；不计入参考产品质量 | 物料清单；秤校准；库存核对 |
| `cp_waste_records` | `textile_formation_preparation`; `coating_lamination_finishing`; `cutting_joining_assembly`; `inspection_packaging_dispatch` | 具体固体或浆状废物输出 | 容器称量、转移联单和处理记录 | waste identity; source process; container tare; gross mass; destination; treatment route; hazardous status | 产生或发运处校准称量，并与转移文件核对 | kg | 每容器或每次发运 | 与产品输出相同期间 | 全部纳入过程和受控废物储存 | 按精确身份和路线汇总净废物；返工、回收、处理和处置去向分别保留；按合格产品质量归一化 | 秤校准；转移联单；废物代码；承包商回执；质量核对 |
| `cp_wastewater_records` | `textile_formation_preparation`; `coating_lamination_finishing` | 路线特定废水输出 | 流量计和废水监测记录 | stream identity; flow; pH; temperature; concentration; sampling time; treatment route | 连续或批次流量计量与代表性采样 | kg; m3 | 连续或每次排放，并定期监测组成 | 与产品输出相同期间，并足以覆盖配方变化 | 可行时在混流前的每个相关排放点 | 汇总路线特定排放；仅以时间对齐的流量和浓度记录计算污染物质量；按合格产品质量归一化 | 仪表和实验室 QA；采样方案；样品流转；处理记录 |
| `cp_air_emission_records` | `coating_lamination_finishing` | 物质特定直接大气排放 | 烟道或捕集系统监测记录 | substance; emission point; concentration; exhaust flow; operating time; method; below-detection treatment | 使用适用的文件化方法直接测量；监测与生产对齐 | kg | 频率由许可证和路线相关性确定；连续记录运行时间 | 与产品输出相同期间，并代表配方和运行状态 | 数据集内每个相关受控和无组织源 | 由对齐的浓度、流量和运行时间分别计算每种物质质量；按合格产品质量归一化 | 实验室报告；仪器校准；方法；排放点图；运行日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个非参考数量 | 归一化数量 = 报告期交换量 / 报告期合格产品净质量 | 相应采集协议的交换总量；`cp_output_mass` 的合格产品净质量 | 每 1 kg 合格参考产品的数量 | `iso-14044-2006`; `iso-14048-2002` |
| `calc_material_balance` | 每个纳入过程 | 输入质量 = 转移产品质量 + 单独记录的废物质量 + 实测排放 + 文件化库存变化；任何残差均须调查，不得强制归零 | 材料收货；中间输出；废物记录；排放记录；期初和期末在制品 | 过程物料衡算核对和残差 | `eu-textiles-bat-2022`; `iso-14048-2002` |
| `calc_count_to_mass` | 支杆、地钉、拉链及其他计件组件 | 组件质量 = 合格组件数量 × 实测代表单件质量，并保留抽样不确定性 | 数量记录；校准单件质量样本；退回和不合格品 | 组件输入质量 | `iso-14048-2002` |
| `calc_air_emission_mass` | 每种监测大气物质 | 排放质量 = 同一基准的对齐浓度 × 干态或湿态排气流量 × 运行时间；明确应用单位和标准状态换算 | 物质浓度；排气流量；运行时间；测量基准元数据 | 物质特定排放质量 | `eu-textiles-bat-2022` |
| `calc_shared_utility` | 共享水、电或燃料仪表 | 分配量 = 共享仪表量 × 文件化物理驱动因子占比；驱动因子必须反映因果使用且占比合计为一 | 共享读数；过程运行时间、处理质量或其他物理驱动因子 | 过程特定公用工程量 | `iso-14044-2006`; `eu-textiles-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和每个清单行 | 保留精确产品子类型、材料或物质身份、路线适用性、流类型、属性、单位和 Tiangong UUID 审查状态。不得使用集合标签或相邻分类流替代。 | 产品规范；物料清单；PCR 内容外保留的 direct-read 证据；`unstats-cpc-3-0-2025` |
| `dq_temporal` | 全部前景记录 | 使用覆盖代表性运行、季节或配方变化、维护以及异常排除的内部一致期间。披露非完整年度或生产期覆盖。 | 仪表期间；生产日历；批次谱系；维护和异常日志 |
| `dq_geography_technology` | 材料、公用工程和过程 | 供应商、电力地理和电压、燃料供应、纺织结构、涂层化学品、连接技术、治理和废物路线必须与所代表设施匹配。 | 供应商记录；过程图；设备清单；公用工程合同；处理记录 |
| `dq_completeness` | 输入输出清单 | 按过程核对材料、水、能源、废水、废物和相关直接排放。调查缺失量或残差并披露获准截断。 | 输入输出清单；物料衡算；水衡算；能源记录；废物和排放记录；`eu-textiles-bat-2022` |
| `dq_measurement` | 实测数量 | 保留仪表或秤标识、校准状态、单位、读数间隔、采样方法、检出限处理和计算工作簿。 | 校准证书；实验室 QA；发票；签批批次表；`iso-14048-2002` |
| `dq_no_ai_quantities` | 清单数量和范围 | 本候选 PCR 禁止使用 AI 生成或推理估算的数量和范围。缺失数量保留为前景采集要求。 | 采集协议覆盖和审查者确认 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 Product flow UUID `176ee965-23e5-444c-8b6c-9457334cae4c`、精确 CPC 27160 语义、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`、kg、数量 1 以及全部必需限定信息。 | `unstats-cpc-3-0-2025` |
| `validate_reference_mass` | 合格产品 | 要求净成品质量排除可拆卸包装并包括随制品交付的全部组件；记录包装总质量时应另行核对。 | `iso-14044-2006` |
| `validate_route_coverage` | 过程图 | 厂内或受控的织物、预处理、涂层、层压、整理、固化、连接、装配或废物处理作业被遗漏，或不存在的作业未提供采购上游数据集和披露时失败。 | `eu-textiles-bat-2022` |
| `validate_atomic_flows` | 过程清单 | 每张卡片必须只含一个具体交换。拒绝合并的公用工程、材料、包装、废物、排放、选择器或未解决集合标签。 |  |
| `validate_uuid_gate` | 含 UUID 的行 | 仅当 hybrid search 和公开 state-100 direct read 确认精确语义、流类型、属性和单位支持后，才接受 Tiangong UUID；否则必须在 manifest 审查元数据中提供逐行未解决记录。 |  |
| `validate_foreground_evidence` | 非参考数量 | 每个引用协议均须有采集记录，并禁止 AI 生成或推理估算的数量和范围。 | `iso-14048-2002`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | 每个纳入过程 | 要求核对输入、转移输出、废物、实测排放和库存变化；调查并披露残差，不得静默计入产品。 | `eu-textiles-bat-2022`; `iso-14048-2002` |
| `validate_emission_specificity` | 直接排放和废水 | 要求物质特定基本流排放和路线特定废水；拒绝合并的大气排放或废水污染物选择器。 | `eu-textiles-bat-2022` |
| `validate_bilingual_alignment` | 中英文 PCR | 要求两个语言版本的 rule id、process id、row id、UUID、受控词汇 token、source id 和数值按相同顺序完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 指定 CPC 27160 成品的前景生产数据包 |
| downstream_use | 经审查和发布后可作 `secondary_dataset`；`background_dataset` |
| allowed_use | 当子类型、规范、材料体系、随附组件、路线、地理、技术、期间和工厂大门边界匹配时，用于产品特定 process 或 lifecyclemodel 构建 |
| excluded_use | 作为全部 CPC 27160 产品的无限定平均；声明路线以外的纺织面料生产；非纺织充气制品；使用阶段耐久性声明；寿命终止情景；直接替代不同子类型、涂层体系或组件配置 |
| required_metadata | PCR id 和版本；CPC 27160；产品子类型和规范；参考流限定信息；设施地理；报告期；产量；纳入和外包作业；物料清单；涂层和整理化学组成；连接路线；分配；截断；上游数据集引用；UUID 审查状态 |
| required_quality_disclosure | 记录覆盖；校准和采样状态；物料、水和能源衡算残差；共享仪表分配；废水和大气监测覆盖；缺失 UUID；排除的异常运行；数据缺口和限制 |
| update_trigger | 产品子类型或规范、纺织结构、涂层或整理化学组成、组件物料清单、连接技术、设施地理、能源或水系统、治理、废物路线、分配方法、参考身份发生变化，或生产绩效发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, code 27160, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确产品类别范围和分类身份 |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508 | 纺织过程分解；输入输出清单；水、能源、化学品、废物、废水和大气排放记录；涂层、层压和整理控制 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022. https://www.iso.org/standard/38498.html | 目标和范围、生命周期清单、分配、报告和审查原则 |
| `iso-14048-2002` | `standard` | ISO/TS 14048:2002, Environmental management — Life cycle assessment — Data documentation format, confirmed current in 2025. https://www.iso.org/standard/29872.html | 透明且无歧义的数据采集、计算、质量和文档记录 |
