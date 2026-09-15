---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 珊瑚及类似产品、软体动物、甲壳动物或棘皮动物外壳和乌贼骨

## 1. 范围与适用性

本 PCR 适用于下列产品的前景数据包：未经加工或仅经简单制备、未切割成型的珊瑚及类似材料，软体动物、甲壳动物或棘皮动物外壳，以及乌贼骨；也包括在所声明产品类别内销售的碎片、粉末或废料。适用工序可包括来源资格确认、直接控制的采集或交付、接收、清洗或脱盐、去除残余有机物、干燥、分选、破碎或研磨、分级、包装、储存和出厂。

使用者应按具体路线选择过程，不得假定所有产品都经过全部制备步骤。经转化形成氧化钙、沉淀碳酸钙、甲壳素、壳聚糖、羟基磷灰石、配制型建筑产品、珠宝、雕刻或切割成型制品、食品、饲料或其他化学或功能上不同产品的路线不适用本 PCR。数据集必须识别来源材料族，不得在未披露的情况下把软体动物壳证据泛化到珊瑚、甲壳动物壳、棘皮动物壳或乌贼骨。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone |
| classification_refs | CPC 3.0 `04911`（已接受的精确映射）；HS 2022 `050800`（仅用于辅助界定范围） |
| covered_products | 未加工或仅简单制备的珊瑚及类似材料；软体动物、甲壳动物或棘皮动物外壳；乌贼骨；以及在所声明类别内销售的未成型碎片、粉末或废料。 |
| excluded_products | 活体水生生物；可食用产品；切割成型、雕刻、抛光、珠宝或其他成品；煅烧氧化钙；沉淀或化学纯化碳酸钙；甲壳素、壳聚糖、羟基磷灰石及其他化学转化衍生物；配制型建筑、农业、食品、饲料、化妆品或医疗产品。 |
| representative_product | 在制备设施门口的已清洁、干燥、未成型外壳、乌贼骨或珊瑚类材料，或其机械破碎和分级部分。 |
| production_route | 来源资格确认；有条件的采集和交付；接收；按路线进行清洗、脱盐、去除有机残留和干燥；有条件的粒径减小和分级；有条件的包装和储存；出厂。 |
| market_state | 散装或包装的完整未成型材料、碎片、颗粒、粉末或所声明废料级，且声明材料族、来源路线、含水基准、等级或粒径类别以及法律和来源证明状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制备设施门口提供本 PCR 范围内所声明的珊瑚类材料、软体动物壳、甲壳动物壳、棘皮动物壳或乌贼骨产品。 |
| How much | 1 kg 所声明产品质量。 |
| How well | 产品满足所声明的材料族、来源路线、制备状态、含水基准、等级或粒径类别以及适用的法律和来源证明要求。 |
| How long or cycle | 一个可识别的生产批次，或归一化至参考数量的所声明报告期。 |
| reference_flow_link | `reference_product_flow` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 材料族及已知分类单元；来源路线；来源地理；采集、打捞、养殖或加工残余物状态；制备状态；含水基准；等级或粒径类别；法律和来源证明状态；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失必需限定信息即表示参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品以及带质量的产品流或废物流行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所声明产品及所有可比材料输出归一化至 1 kg 参考产品，同时保留未归一化的报告期总量。 |
| `moisture_basis` | 接收、制备和最终材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明每项质量是接收态、风干态、烘干态或其他测定含水基准。仅可根据实测含水率或固含量换算。 |
| `water_record` | 清洗、脱盐和洗涤用水 | 质量或体积 | kg 或 m3 | 保留计量或发票中的原始单位。进行质量和体积换算时，记录实测或有文件依据的密度及换算过程。 |
| `energy_and_fuel_record` | 采集、搬运、干燥、研磨、分级、包装和储存能源 | 能量、质量或体积 | kWh、MJ、kg 或 L | 归一化前保留电表、发票或燃料记录的原始单位和能源载体标识。存在供应商特定值时不得采用通用换算因子。 |
| `transport_service` | 直接控制的采集和交付 | 质量-距离 | tkm | 使用实际运输质量和路线距离计算运输服务，并保留车辆或船舶方式、载荷基准和空驶处理。 |
| `particle_size_and_grade` | 机械破碎、研磨或分级产品 | 所声明粒径或等级 | mm、µm 或所声明类别 | 粒径或等级是必需限定信息，不能替代质量参考流属性。 |
| `transformation_scope` | 经热处理或化学处理的材料 | 所声明成分和工艺条件 | 按实测 | 若处理使材料转化为 CaO、沉淀碳酸钙、甲壳素、壳聚糖、羟基磷灰石或其他化学上不同的产品，本 PCR 不再提供其参考流规则。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | 来源资格确认和采集 | 声明材料是直接采集、打捞、来自养殖、从水产品加工回收、作为副产品购买，还是作为废物接收。纳入报告经营者直接控制的采集、生境相互作用和交付活动。 | `unsd-cpc3-hs-scope`; `cites-current-coral-controls` |
| `system_boundary_rule_2` | 购买或供应的来源材料 | 链接具有代表性的上游数据集，或披露来源地理、供应商过程、先前产品或废物状态以及上游负荷分配规则。仅有废物或副产品标签不能证明上游负荷为零。 | `eu-pef-method-2021` |
| `system_boundary_rule_3` | 前景制备 | 纳入经营者控制且适用的接收、清洗、脱盐、去除有机残留、干燥、分选、破碎或研磨、分级、包装、储存、内部搬运、废水管理、固体残余物管理和直接释放。 | `eu-pef-method-2021`; `shell-waste-management-2023`; `bivalve-shell-valorization-2022` |
| `system_boundary_rule_4` | 前景输出 | 识别所有共产品、副产品、废物流、废水流和直接基本流。任何排除都必须说明理由并披露其可能重要性。 | `eu-pef-method-2021` |
| `system_boundary_rule_5` | 设施门口数据集 | 从本门口参考流中排除下游分销、产品使用、并入其他产品及生命末期，除非所声明数据集范围明确延伸至门口以外。 | `eu-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | `qualified_source_material_at_collection_or_receipt` |
| starting_condition_role | 第一个前景状态为在采集或接收时已经核验材料族、来源路线、地理、先前产品或废物状态、含水基准以及法律或来源证明的来源材料。 |
| product_classification_scope | CPC 3.0 `04911`，并限定为未加工或仅简单制备、未成型材料以及所声明的粉末或废料部分。 |
| recursive_input_rule | 对已属于本产品类别的输入，按同类别产品输入记录，并声明其来源路线、质量、含水基准、等级、上游数据集和分配状态；不得隐藏为通用矿物或废物投入。 |
| upstream_dataset_requirement | 对购买或供应的材料使用供应商或路线代表性数据集。若不可得，披露数据缺口和先前负荷处理；不得默认为零负荷。 |
| disclosure | 报告纳入和排除的单元操作；采集和运输控制；材料分类单元或材料族；来源地理；珊瑚适用的许可证或 CITES 状态；先前废物或副产品状态；含水率和等级；清洗、干燥和研磨路线；包装；废水和残余物去向；直接释放；分配方法；背景数据替代。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `source_qualification_and_receipt` | 来源资格确认和接收 | `required` | 始终纳入。 | 确立产品身份、路线、来源证明、进料质量、含水率、接收质量和拒收材料。 | 进入制备或出厂处理的已接收来源材料。 |
| `controlled_collection_and_delivery` | 受控采集和交付 | `conditional` | 当采集、打捞、船舶活动、装载或交付由报告经营者控制时纳入。 | 记录路线距离、运输方式、燃料或能源以及直接控制的采集相互作用。 | 已运输接收材料及运输服务。 |
| `cleaning_drying_and_sorting` | 清洗、干燥和分选 | `conditional` | 发生洗涤、脱盐、去除有机残留、灭菌、干燥、分选或类似简单制备时纳入。 | 生产清洁制备材料并记录水、能源、试剂、残余物、废水和直接释放。 | 按所声明含水基准计的制备材料输出。 |
| `size_reduction_and_grading` | 粒径减小和分级 | `conditional` | 发生破碎、研磨、筛分、过筛或分级时纳入。 | 生产所声明的碎片、颗粒、粉末或等级，并记录能源、规格外材料和粉尘。 | 合格分级材料输出。 |
| `packaging_storage_and_gate_release` | 包装、储存和出厂 | `required` | 始终纳入出厂；仅在实际发生时纳入包装和储存行。 | 确立最终参考产品质量、包装状态、储存条件和出厂输出。 | 设施门口 1 kg 所声明产品。 |

### 过程：来源资格确认和接收（`source_qualification_and_receipt`）

#### 输入

##### 产品流

###### 接收来源材料（`source_material_received`）

本行记录接收和制备前的珊瑚类材料、外壳或乌贼骨，包括其先前产品、副产品或废物状态。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：按批次或报告期计量进料毛质量和净质量，并记录含水率或固含量基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：进料质量和接收质量归一化至 1 kg 最终参考产品。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_receipt`

##### 废物流

不规定默认废物输入。若设施接收法律上归类为废物的材料，应在来源记录中保留该状态，同时把材料作为本 PCR 选定的同类别输入建模。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 已接收来源材料（`accepted_source_material`）

已接收材料是去除接收拒收物后转入简单制备或直接转入最终出厂处理的数量。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：在相同含水基准下，用实测进料质量减去实测接收拒收物计算接收质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终参考产品的接收质量。
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_source_receipt`

##### 废物流

###### 接收拒收物（`receipt_rejects`）

记录接收时去除的非目标生物材料、沉积物、异物、受污染材料和不合格来源材料，并记录实际去向。

- 选定流：选择与材料和处理去向相匹配的路线特定 Tiangong 废物流。
- 流属性/单位：Mass / kg
- 数量规则：按批次计量拒收质量并记录再利用、回收、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终参考产品的拒收质量。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_wastewater`

##### 基本流

接收过程不规定默认基本流输出。存在直接释放时添加实测行。

### 过程：受控采集和交付（`controlled_collection_and_delivery`）

#### 输入

##### 产品流

###### 采集或交付的材料（`material_collected_or_delivered`）

对于报告经营者控制的采集或交付活动，使用已通过资格确认的来源材料记录。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：采用实测装载和交付质量，并声明含水基准和损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：与 1 kg 最终参考产品相关的运输质量。
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection_transport`

###### 采集或交付柴油（`collection_or_delivery_diesel`）

仅当柴油为实际受前景控制的能源载体时使用本行；其他载体应选择其他 Tiangong 流。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：依据加油、油箱、发票或设备日志记录燃料，并关联到采集或交付路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：与 1 kg 最终参考产品相关运输服务所用燃料。
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection_transport`

##### 废物流

不规定默认废物输入。

##### 基本流

###### 直接采集相互作用或释放（`collection_direct_releases`）

仅对受控采集造成且有实测或许可证报告的资源开采、生境相互作用或直接排放实例化本行。

- 选定流：为实测资源或排放选择适用的 Tiangong 基本流。
- 流属性/单位：使用所选 Tiangong 流属性和单位。
- 数量规则：使用直接监测、许可证记录或依据所采集活动数据的批准计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 最终参考产品的直接相互作用或释放。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_releases`

#### 输出

##### 产品流

###### 已交付来源材料（`delivered_source_material`）

本输出把实测交付质量传递至接收或制备过程，不改变材料身份。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：在相同含水基准下，用装载质量减去实测运输损失计算交付质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 最终参考产品的交付质量。
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_collection_transport`

##### 废物流

###### 采集或交付损失（`collection_or_delivery_losses`）

仅在实际发生时记录遗失、溢洒、损坏或拒收材料，并指定实际去向。

- 选定流：选择与材料和去向相匹配的路线特定 Tiangong 废物流。
- 流属性/单位：Mass / kg
- 数量规则：计量或核算装载质量与交付质量之差，排除实测含水变化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 最终参考产品的损失质量。
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_collection_transport`

##### 基本流

直接释放记录在 `collection_direct_releases` 中；不得重复计入已由燃料燃烧或运输过程表示的排放。

### 过程：清洗、干燥和分选（`cleaning_drying_and_sorting`）

#### 输入

##### 产品流

###### 进入制备的已接收材料（`material_for_preparation`）

本输入是进入适用清洗、脱盐、去除有机残留、干燥或分选步骤的已接收材料。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：使用实测接收投入质量和含水率或固含量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 制备材料输出和每 1 kg 最终参考产品的制备投入。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_material`

###### 工艺用水（`preparation_water`）

使用淡水、海水、回用水或其他水进行清洗或脱盐时分别记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg；当体积是原始记录时保留实测 m3
- 数量规则：使用水表、水箱、发票或批次记录，并区分淡水、海水和回用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨进入适用清洗步骤的壳料用水，并归一化至每 1 kg 最终参考产品。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water`
- 来源：`shell-waste-management-2023`
- 数量范围：文献报告的壳料降盐清洗用水量
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.2
  - 上限：0.8
  - 单位：m3/t 壳料
  - 基准：用于降低壳料盐含量的淡水；仅作为筛查证据，不是符合性限值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`shell-waste-management-2023`

###### 制备能源（`preparation_energy`）

记录清洗设备、加热、灭菌、干燥、通风和分选实际使用的电力、热能或燃料。

- 选定流：选择场址和载体特定的 Tiangong 电力、热力或燃料流。
- 流属性/单位：能量、质量或体积 / 按记录使用 kWh、MJ、kg 或 L
- 数量规则：使用分表、设备表、燃料、发票或经分配的公用工程记录，并保留载体和地理信息。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 制备材料输出的制备能源。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_energy_and_agents`
- 来源：`shell-waste-management-2023`

###### 清洗或加工试剂（`cleaning_agents`）

仅在实际使用时记录洗涤剂、酶、消毒剂、溶剂、酸、碱或其他试剂；形成化学上不同输出的处理不适用本 PCR。

- 选定流：为所用每种试剂选择实际 Tiangong 产品流。
- 流属性/单位：质量或体积 / 按记录使用 kg 或 L
- 数量规则：采用采购、投加或批次配方记录，并保留浓度和回收信息。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 制备材料输出的试剂用量。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_energy_and_agents`
- 来源：`shell-waste-management-2023`

##### 废物流

不规定默认废物输入。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 已清洁和干燥材料（`cleaned_and_dried_material`）

本输出是经过适用清洗、脱盐、干燥和分选后、可选粒径减小之前的简单制备材料。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：按批次计量输出质量和含水率或固含量基准；需要时计算归一化干质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终参考产品的制备输出质量。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_material`

##### 废物流

###### 清洗和分选残余物（`cleaning_and_sorting_residues`）

当处理方式不同时，分别记录去除的有机物、沉积物、盐、破碎非产品部分和分选拒收物。

- 选定流：为每种残余物和处理去向选择路线特定 Tiangong 废物流。
- 流属性/单位：Mass / kg
- 数量规则：按所声明含水基准计量残余物质量，并记录回收、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备材料输出及每 1 kg 最终参考产品的残余物质量。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_wastewater`

###### 清洗废水（`cleaning_wastewater`）

在废水或废盐水离开前景过程去往场内处理、场外处理、回用或排放的位置记录。

- 选定流：选择与废水组成及实际处理或排放去向相匹配的 Tiangong 废物流。
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：使用排放表、水箱记录或有文件依据的水平衡；在实测或法规要求时保留盐度、悬浮固体、有机负荷和处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备材料输出和每 1 kg 最终参考产品的废水量。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_wastewater`

##### 基本流

###### 制备直接释放（`preparation_direct_releases`）

对未由废物处理或能源供应过程表示的实测粉尘、挥发性释放、燃烧排放或直接水排放分别实例化行。

- 选定流：选择每个适用的 Tiangong 基本流和接收环境介质。
- 流属性/单位：使用所选 Tiangong 流属性和单位。
- 数量规则：使用直接监测，或基于采集活动数据和有引用因子的批准计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 制备材料输出及每 1 kg 最终参考产品的直接释放。
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_releases`

### 过程：粒径减小和分级（`size_reduction_and_grading`）

#### 输入

##### 产品流

###### 进入粒径减小的制备材料（`prepared_material_for_size_reduction`）

当清洁材料被破碎、研磨、筛分、过筛或分级为所声明产品形态时使用本输入。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：为每次分级作业计量制备投入质量和含水基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格分级输出的制备投入。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_and_grading`

###### 粒径减小能源（`size_reduction_energy`）

记录破碎机、磨机、筛网、除尘和物料搬运实际使用的电力或燃料。

- 选定流：选择场址和载体特定的 Tiangong 能源流。
- 流属性/单位：能量、质量或体积 / 按记录使用 kWh、MJ、kg 或 L
- 数量规则：使用设备表、公用工程表、生产日志或有文件依据的共享能源分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格分级输出的能源。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_and_grading`
- 来源：`bivalve-shell-valorization-2022`

##### 废物流

不规定默认废物输入。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 合格完整、碎片、颗粒或粉末产品（`on_spec_graded_product`）

本输出保留产品类别身份和质量参考流属性，同时携带最终机械等级。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：按所声明等级和含水基准计量合格输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：传递至最终参考流的合格输出。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_and_grading`

##### 废物流

###### 规格外分级部分（`off_spec_grading_fraction`）

按再利用或处理去向记录规格外细料、超尺寸部分、异物和控制设备收集粉尘。

- 选定流：若内部循环或作为所声明等级销售，使用同类别产品流；否则选择路线特定 Tiangong 废物流。
- 流属性/单位：Mass / kg
- 数量规则：计量每个部分，并识别内部循环、共产品销售、回收或废物去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格分级输出及每 1 kg 最终参考产品的规格外部分。
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_and_grading`

##### 基本流

###### 未捕集颗粒物释放（`uncaptured_particulate_release`）

仅当实测或批准计算的释放跨越环境边界时记录基本流输出；收集粉尘仍属于废物流或可回收产品流。

- 选定流：选择与粒径和接收环境介质相匹配的 Tiangong 颗粒物基本流。
- 流属性/单位：Mass / kg
- 数量规则：使用烟道或工作场所至环境的监测记录，或带引用计算方法的控制效率记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格分级输出的未捕集颗粒物。
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_releases`

### 过程：包装、储存和出厂（`packaging_storage_and_gate_release`）

#### 输入

##### 产品流

###### 进入出厂处理的产品（`product_entering_gate_handling`）

本输入是进入最终称量和出厂处理的所声明完整、碎片、颗粒、粉末或废料级材料。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：在增加包装皮重之前，使用所声明含水基准下的最终批次或批号质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：传递至 1 kg 最终参考产品的产品质量。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_gate_release`

###### 包装材料（`packaging_materials`）

记录随参考产品供应或为其消耗的袋、内衬、桶、纸箱、托盘、薄膜、标签和可重复使用容器。

- 选定流：选择每种实际 Tiangong 包装材料流。
- 流属性/单位：质量或数量 / 按记录使用 kg 或 item
- 数量规则：使用采购、物料清单或包装线记录，并在适用时声明可重复使用容器循环次数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 最终参考产品供应或消耗的包装材料。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_gate_release`

###### 包装和储存能源（`packaging_and_storage_energy`）

在实际发生时记录出厂搬运、通风、湿度控制、储存和包装能源。

- 选定流：选择场址和载体特定的 Tiangong 能源流。
- 流属性/单位：能量、质量或体积 / 按记录使用 kWh、MJ、kg 或 L
- 数量规则：使用电表、设备日志或在所声明储存时长内有文件依据的共享公用工程分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终参考产品的能源。
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_gate_release`

##### 废物流

不规定默认废物输入。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 设施门口所声明产品（`reference_product_flow`）

这是完成最终质量、含水率、等级、来源证明、包装和质量检查后的参考输出。

- 选定流：珊瑚及类似产品，软体动物、甲壳动物或棘皮动物的贝壳，以及墨鱼骨 `9d3c928f-f381-4d92-8452-944adaf37906`
- 流属性/单位：Mass / kg
- 数量规则：将定量参考设为 1 kg，并保留实测批次或报告期输出作为归一化分母。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 所声明出厂产品。
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装和出厂处理废物（`packaging_and_gate_handling_waste`）

按实际处理去向记录损坏包装、标签、薄膜、托盘损失、清扫物和拒收成品。

- 选定流：选择每种路线特定 Tiangong 废物流。
- 流属性/单位：Mass / kg
- 数量规则：使用报告期废物票据、数量或物料平衡记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终参考产品的废物质量。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_wastewater`

##### 基本流

仅添加未由上游能源、包装或废物处理数据集表示的实测或批准计算直接释放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_rule_1` | 可分离的单元操作和批次 | 在记录允许时，通过细分过程、计量表、批次、等级和材料族避免分配。 | `eu-pef-method-2021` |
| `allocation_rule_2` | 进入系统的加工残余物、副产品或废物 | 保留供应商所记录的产品或废物状态及上游负荷规则。不得仅因进入材料被称为废物就分配零上游负荷。 | `eu-pef-method-2021`; `oyster-shell-lca-2012` |
| `allocation_rule_3` | 生产多个可销售等级的共享制备过程 | 无法细分时，若实测干质量、设备时间或计量能源等因果物理关系能够解释资源使用，则使用该关系，并声明基准和公式。 | `eu-pef-method-2021` |
| `allocation_rule_4` | 缺少可辩护物理关系的多功能过程 | 仅在证明细分和物理分配不适用后使用其他有文件依据的关系，包括适当的经济分配；披露价格、期间、地理和敏感性结果。 | `eu-pef-method-2021` |
| `allocation_rule_5` | 回收残余物和规格外部分 | 仅当某部分具有独立参考流及有文件依据的去向或市场时，才视为共产品；否则保留为需要回收、处理或处置建模的废物。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_receipt` | `source_qualification_and_receipt` | 来源、接收材料和接收拒收物 | 批次接收与来源证明记录 | 供应商或采集 ID；分类单元或材料族；来源路线和地理；先前产品或废物状态；适用的许可证或 CITES 引用；毛质量和净质量；含水率或固含量；拒收质量和去向 | 地磅、校准秤、供应商文件、采集日志、检验和许可证检查 | kg；质量分数 | 每批次或批号 | 数据集期间代表的全部批次 | 每个纳入来源和接收场址 | 仅在统一含水基准后汇总质量；保留来源级记录 | 秤校准；供应商文件；检验记录；适用许可证或 CITES 证据 |
| `cp_collection_transport` | `controlled_collection_and_delivery` | 材料移动、燃料和损失 | 行程、船舶或设备活动日志 | 路线；方式；起点和终点；装载和交付质量；距离；燃料或能源；载荷率；空驶；损失质量 | 行程日志、GPS 或路线记录、燃料记录、发票和接收核验 | kg；km；tkm；kWh；MJ；L | 每次受控行程或作业 | 数据集代表的全部受控采集和交付 | 每条受控路线和车辆或船舶类别 | 按行程计算质量-距离；汇总燃料和损失；归一化至接收材料和最终产品 | 路线证据；燃料发票；计量记录；装载票据 |
| `cp_preparation_material` | `cleaning_drying_and_sorting` | 材料投入和制备输出 | 批次生产和含水记录 | 投入质量；输出质量；含水率或固含量；材料族；清洗路线；干燥路线；等级；时间戳 | 校准秤、含水试验、批次单和生产日志 | kg；质量分数 | 每个制备批次 | 包括正常路线变化的代表性运营期 | 每条制备线和材料族 | 合并批次前计算干质量；报告加权含水率和总输出 | 秤和含水方法记录；批次核算 |
| `cp_preparation_water` | `cleaning_drying_and_sorting` | 淡水、海水、回用水和废水 | 计量或批次用水记录 | 水源；表计起止；水箱补充；回用体积；排放体积；盐度；要求时的悬浮固体或有机负荷 | 校准水表、水箱记录、发票或有文件依据的水平衡 | kg 或 m3 | 每批次或表计区间 | 与制备生产相同期间 | 每个水源和制备线 | 分开保留水源；按水源汇总并归一化至制备和最终产品 | 水表校准；发票；实验室或排放记录 |
| `cp_preparation_energy_and_agents` | `cleaning_drying_and_sorting` | 能源载体和清洗试剂 | 计量、发票、燃料和投加记录 | 载体或试剂；Tiangong 流；数量；单位；浓度；设备；批次或期间；回收 | 分表、公用工程账单、燃料日志、采购记录和投加系统 | kWh；MJ；kg；L | 每批次或账单区间 | 与制备生产相同期间 | 每条过程线和公用工程或试剂 | 优先直接计量；否则使用有文件依据的因果驱动因素分配共享用量 | 计量校准；发票；投加日志；分配记录 |
| `cp_waste_and_wastewater` | `source_qualification_and_receipt`; `cleaning_drying_and_sorting`; `packaging_storage_and_gate_release` | 固体拒收物、残余物、废水和包装废物 | 废物票据、排放或内部回收记录 | 废物身份；质量或体积；含水率；来源过程；内部循环；运输方；处理或排放去向 | 秤、容器计数、转移联单、排放表、实验室记录或核算平衡 | kg 或 m3 | 每次运输、排放或报告区间 | 与关联生产相同期间 | 每个前景废物和废水去向 | 分开保留去向和处理路线；汇总经核验记录后归一化 | 废物联单；处理收据；排放许可或试验；平衡核算 |
| `cp_size_reduction_and_grading` | `size_reduction_and_grading` | 材料、能源、等级、规格外部分和收集粉尘 | 作业生产和设备记录 | 投入与输出质量；含水率；目标粒径；筛分结果；设备时间；能源；循环料；规格外和粉尘质量 | 秤、筛分分析、设备表和生产日志 | kg；mm 或 µm；kWh；MJ | 每次作业 | 数据集代表的全部作业 | 每条线、材料族和等级 | 核算等级部分和循环料；按因果设备记录分配共享能源 | 秤、筛网和计量校准；作业平衡 |
| `cp_packaging_and_gate_release` | `packaging_storage_and_gate_release` | 最终产品、包装、储存和出厂输出 | 批号、物料清单、公用工程和发运记录 | 产品质量和含水率；包装材料和质量；重复使用次数；储存时长；储存能源；发运 ID | 最终秤、包装 BOM、库存、计量表和发运文件 | kg；item；day；kWh；MJ | 每批号和公用工程区间 | 与最终生产相同期间 | 每种包装形式和储存条件 | 将包装和分配的储存能源归一化至发运参考产品 | 最终秤核验；BOM；计量和发运记录 |
| `cp_direct_releases` | `controlled_collection_and_delivery`; `cleaning_drying_and_sorting`; `size_reduction_and_grading` | 直接资源使用和基本流释放 | 监测、许可证或计算记录 | 流 UUID；环境介质；实测浓度或数量；气体或水体积；采样期；因子及来源；控制效率 | 直接监测或依据采集活动数据的批准计算 | 所选 Tiangong 参考单位 | 每次监测或规定报告区间 | 与产生过程相同期间 | 每个受控排放点或采集区域 | 在期间内积分实测值；避免与供应或处理数据集重复 | 校准；实验室样品链；许可证报告；有引用的因子和公式 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_mass` | 来源资格确认和接收 | 接收质量 = 进料质量 - 接收拒收物，且使用相同含水基准 | 进料质量；拒收质量；含水基准 | 已接收来源材料质量 |  |
| `calc_dry_mass` | 含水基准换算 | 干质量 = 实测质量 × 实测固体质量分数 | 实测质量；实测含水率或固体分数 | 干质量 |  |
| `calc_normalized_amount` | 每项清单数量 | 归一化数量 = 报告期数量 / 报告期参考产品质量 | 经核验的期间数量；经核验的参考输出 | 每 1 kg 参考产品的数量 | `eu-pef-method-2021` |
| `calc_transport_service` | 受控采集和交付 | 运输服务 = 运输吨数 × 路线公里数；纳入空驶时单独建模 | 行程质量；路线距离；空驶处理 | tkm |  |
| `calc_material_balance` | 接收、制备和分级 | 将干材料投入及实测添加固体与干产品、共产品、废物、收集粉尘和废水实测固体进行核算；报告未闭合差值和所用接受阈值。 | 干投入；干输出；残余物；废水固体；收集粉尘 | 质量平衡结果和闭合差值 |  |
| `calc_shared_utility` | 共享计量或公用工程 | 仅使用所声明的因果驱动因素分配共享公用工程；保留公用工程总量、驱动因素总量和分配份额。 | 公用工程总量；过程驱动因素；驱动因素总量 | 分配至过程的公用工程 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_provenance` | 每个来源批号 | 保留材料族或已知分类单元、来源路线、地理、先前产品或废物状态以及适用的法律、许可证和 CITES 证据。 | 来源和检验记录；适用时的现行 CITES 核验；`unsd-cpc3-hs-scope`; `cites-current-coral-controls` |
| `dq_measurement` | 质量、含水率、水、能源、试剂和废物 | 使用经校准或核验的计量系统，保留原始单位，并区分计算值和实测值。 | 校准、计量、发票、实验室和计算记录；`eu-pef-method-2021` |
| `dq_temporal` | 报告期 | 覆盖所声明的正常生产路线，并记录停机、异常批次、季节性和排除期间。 | 生产日历、批次清单、公用工程区间和异常日志 |
| `dq_geography_and_technology` | 前景和背景数据 | 匹配来源、采集、制备技术、能源、水、包装、废物处理和运输地理，或披露替代。 | 场址和供应商元数据；背景数据集元数据 |
| `dq_completeness` | 过程清单 | 纳入每个适用的规定行，或记录明确的不适用理由；核算产品、共产品、废物、废水和直接释放。 | 适用性矩阵及材料、水和公用工程平衡；`eu-pef-method-2021` |
| `dq_allocation` | 共享和多输出过程 | 使用分配时保留细分证据、分配驱动因素、公式、期间和敏感性信息。 | 计量和批次记录、分配工作表及 `eu-pef-method-2021` |
| `dq_traceability` | 发布数据包 | 每个归一化数值必须可追溯至原始记录、计算规则、Tiangong 身份和适用外部来源，且不得嵌入私密凭据或查询日志。 | 记录 ID、计算链接、UUID 和来源 ID |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份和范围 | 确认输出未经加工或仅简单制备且未成型，或属于类别内所声明粉末或废料部分；拒绝化学转化产品或下游成品。 | `unsd-cpc3-hs-scope` |
| `validation_rule_2` | 参考流 | 确认参考产品、质量流属性、质量单位组、1 kg 数量和所有必需限定信息。 |  |
| `validation_rule_3` | 过程适用性 | 纳入每个适用过程和流行，或提供有文件依据的不适用理由；不得在未披露的情况下把软体动物壳制备假设应用于其他材料族。 | `shell-waste-management-2023`; `bivalve-shell-valorization-2022` |
| `validation_rule_4` | 已实例化流身份 | 发布数据集前，将每个已实例化产品流、废物流和基本流解析到适用的 Tiangong UUID；路线特定占位符不构成完整流选择。 |  |
| `validation_rule_5` | 前景记录 | 核验归一化数值可追溯至所声明采集协议，并保留未归一化总量、单位、时间范围以及场址或路线范围。 | `eu-pef-method-2021` |
| `validation_rule_6` | 质量和含水平衡 | 在一致含水或干质量基准下核算接收、制备、分级和最终输出，并披露未闭合差值和接受阈值。 |  |
| `validation_rule_7` | 清洗用水筛查 | 适用淡水降盐清洗时，将记录结果与文献筛查证据 0.2–0.8 m3/t 壳料比较；超出该区间需要解释，但不会自动判定不符合。 | `shell-waste-management-2023` |
| `validation_rule_8` | 分配和先前负荷 | 核验细分或分配层级、先前产品或废物状态、公式、数据期间和敏感性；拒绝无文件依据的零负荷假设。 | `eu-pef-method-2021`; `oyster-shell-lca-2012` |
| `validation_rule_9` | 废水、残余物和直接释放 | 确认身份、数量、环境介质或去向，并确认未与能源供应或处理数据集重复计入。 | `eu-pef-method-2021` |
| `validation_rule_10` | 珊瑚合法性和来源证明 | 对珊瑚或珊瑚来源材料，核验现行适用 CITES 列名，并保留所需许可证、证书、来源和贸易术语，或有文件依据的豁免证据。 | `cites-current-coral-controls` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明 CPC 04911 制备路线的前景生产数据包；经审查后可支持 `secondary_dataset` 或 `background_dataset`。 |
| downstream_use | 为设施门口未经加工或仅简单制备的珊瑚类材料、外壳或乌贼骨构建 Tiangong `process` 数据及下游 `lifecyclemodel` 投影。 |
| allowed_use | 用于路线、地理、材料族、含水率、等级和来源证明相匹配的建模，并声明适用过程、上游负荷处理、废物路线和背景替代。 |
| excluded_use | 活体水生生物；可食用水产品；未由上游数据集覆盖的养殖或捕捞生产；化学转化衍生物；煅烧产品；配制型下游产品；切割成型、雕刻、珠宝或其他成品；未披露珊瑚来源证明。 |
| required_metadata | PCR id 和版本；Tiangong 参考流 UUID；材料族或分类单元；来源路线和地理；先前产品、副产品或废物状态；制备路线；含水基准；等级或粒径；法律和来源证明状态；过程适用性；报告期；技术和场址；分配；包装；废物和废水去向；背景数据集引用。 |
| required_quality_disclosure | 计量和校准覆盖；材料和水平衡闭合；时间、地理和技术代表性；缺失或估算记录；分配敏感性；来源和许可证限制；背景替代；校验发现。 |
| update_trigger | 产品范围、材料族、来源或 CITES 状态、采集路线、技术、清洗或干燥方法、等级、含水基准、能源或水系统、废物处理、分配、包装、场址或地理、Tiangong 身份、外部证据或适用法律要求发生变化。 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc3-hs-scope` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 以及 subclass 04911 / subheading 050800 的 HS 2022 对应，https://unstats.un.org/unsd/classifications/Family/Detail/2100 和 https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2089/050800（检索日期 2026-08-07）。 | 产品类别身份；未经加工或仅简单制备、未成型、粉末和废料范围；排除项。 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 和 https://eplca.jrc.ec.europa.eu/permalink/PEF_method.pdf（检索日期 2026-08-07）。 | 前景原始数据、系统边界、共产品和废物可见性、分配层级、数据质量和披露。 |
| `cites-current-coral-controls` | 官方指南（`official_guidance`） | CITES，现行 Appendices 和 Resolution Conf. 11.10 on trade in stony corals，https://cites.org/eng/app/appendices.php 和 https://cites.org/eng/imp/Exemptions_and_special_procedures（检索日期 2026-08-07）。 | 珊瑚分类单元、来源、法律和来源证明核验；适用时的许可证、证书、贸易术语或豁免证据。 |
| `shell-waste-management-2023` | 文献（`literature`） | Topić Popović, N. 等（2023），Shell Waste Management and Utilization: Mitigating Organic Pollution and Enhancing Sustainability，Applied Sciences 13(1), 623，https://doi.org/10.3390/app13010623。 | 清洗和制备过程分解；水和能源重要性；0.2–0.8 m3/t 壳料清洗用水筛查范围。 |
| `bivalve-shell-valorization-2022` | 文献（`literature`） | Summa, D. 等（2022），Trends and Opportunities of Bivalve Shells' Waste Valorization in a Prospect of Circular Blue Bioeconomy，Resources 11(5), 48，https://doi.org/10.3390/resources11050048。 | 洗涤、破碎、分级和路线特定制备证据；简单制备与下游增值之间的边界。 |
| `oyster-shell-lca-2012` | 文献（`literature`） | de Alvarenga, R.A.F. 等（2012），The recycling of oyster shells: an environmental analysis using Life Cycle Assessment，Journal of Environmental Management 106, 102–109，https://doi.org/10.1016/j.jenvman.2012.04.017。 | 实际采集和运输距离、上游情景以及分配或避免处置假设的重要性；未采用通用距离阈值。 |
