---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-including-narrow-fabrics-of-glass-fibres
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 玻璃纤维机织物（包括窄幅织物）

## 1. 范围与适用性

本 PCR 适用于以外购玻璃连续纤维纱或粗纱制造玻璃纤维机织物（包括机织窄幅织物）的前景数据包。前景范围涵盖整经、厂内实施时的经纱上浆、织机织造、检验、分切或切边、卷绕及至工厂大门的包装。

本类别包括以经纬纱在织机上交织为主要成形方式的玻璃纤维坯布、方格布、机织网格布、带材及其他窄幅机织结构。生产者必须声明织物组织、名义幅宽、名义面密度、玻璃类型、纱或粗纱规格、上浆或整理状态，以及产品属于宽幅还是窄幅织物。

本类别不包括织造前销售的玻璃纤维条、粗纱和纱；短切原丝毡或连续原丝毡；薄毡、表面毡和非织造布；针织物、缝编物或多轴向非卷曲织物；玻璃棉；按涂层或复合状态分类的聚合物浸渍或涂覆织物；以及玻璃纤维增强塑料制品。玻璃配料、熔化、拉丝及上游制纱不属于前景边界，必须连接上游数据集。织造后的湿整理、涂覆、浸渍、热清洗和偶联剂处理均排除，除非后续产品专用 PCR 明确将其纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-including-narrow-fabrics-of-glass-fibres` |
| classification_refs | CPC 3.0 `26890`，精确映射 |
| covered_products | 玻璃纤维机织布、方格布、机织网格布、机织带材和玻璃纤维窄幅机织物 |
| excluded_products | 作为产品销售的玻璃纤维纱和粗纱；毡、薄毡、表面毡、非织造布、针织或缝编多轴向织物、玻璃棉、涂覆或浸渍织物、复合材料及其制品 |
| representative_product | 卷绕在纸管上、在生产工厂大门处可交付的合格玻璃纤维机织坯布 |
| production_route | 外购连续玻璃纤维纱或粗纱；整经；条件性厂内上浆；织机织造；检验或分切；卷绕和包装 |
| market_state | 工厂大门处合格织物，已声明织物组织、幅宽、面密度、玻璃类型、纱线规格及上浆或整理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合所声明结构和规格的合格玻璃纤维机织物 |
| How much | 1 kg 织物净质量，不含可移除运输包装 |
| How well | 符合生产者声明的织物组织、名义幅宽、名义面密度、玻璃类型、纱线规格、上浆或整理状态及验收标准 |
| How long or cycle | 工厂大门处一个生产批次或其他已声明的代表性生产期间 |
| reference_flow_link | 功能单位由下列 UUID 参考产品流实现，并按其 Mass 属性以 kg 归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品净质量 |
| 参考产品流 | Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 织物组织；宽幅或窄幅结构；名义幅宽；名义面密度；玻璃类型；经纬纱或粗纱规格；上浆或整理状态；工厂地理位置；生产期间；工厂大门状态 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息即视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤确定合格织物净质量；排除可移除的纸管、薄膜、托盘和其他运输包装。 |
| `mass_conversion` | 纱线、织物、化学品和固体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有质量记录换算为 kg，并在相关时保留原单位、换算因子及水分或固含量基准。 |
| `water_mass` | 工艺水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 密度影响显著时使用实测密度换算计量体积；否则记录所用水密度约定。 |
| `electricity_measurement` | 各前景过程用电 | Net calorific value | kWh | 优先使用分表计量；否则采用有记录的电表差值或可辩护的设备时间分配。 |
| `areal_mass_check` | 参考产品一致性 | Mass per area | g/m2 | 将名义和实测面密度作为产品限定信息记录；不得以面积替代 kg 参考数量。 |
| `dry_solids_basis` | 上浆剂和上浆废水 | Mass | kg | 分别记录供应溶液质量和干固含量，以核对纱线保留浆料与排放固体。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购玻璃连续纤维纱或粗纱进入织造工厂，包括其继承的上浆状态 |
| starting_condition_role | 前景织物成形的上游材料投入和物理起始状态 |
| product_classification_scope | CPC 3.0 代码 26890 范围内的玻璃纤维机织物 |
| recursive_input_rule | 仅用于检验、分切或重新包装的外购 CPC 26890 织物应作为明确的背景产品投入，不得递归表示为纱线到织物制造 |
| upstream_dataset_requirement | 连接在地理和技术上有代表性的玻璃原料制备、熔化、拉丝、纱或粗纱制造、外购上浆化学品、电力、水和包装数据集 |
| disclosure | 声明工厂地理位置、生产期间、织机技术、产品结构、继承和厂内上浆、纳入的整理、截断决定、公用工程供应及处理路线 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_yarn` | foreground_system_boundary | 当前景收集以外购玻璃连续纤维纱或粗纱跨越织造工厂大门时开始；上游玻璃熔化、拉丝及制纱作为连接的上游数据集。 | `un-cpc-3-2025`, `ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023` |
| `boundary_required_operations` | foreground_system_boundary | 纳入整经、织机织造、检验、分切或切边、卷绕、包装、内部物料搬运、直接归属的公用工程、过程废物和直接排放。 | `ec-jrc-textiles-bref-2023` |
| `boundary_conditional_sizing` | foreground_system_boundary | 仅当工厂制备或施加经纱浆料时纳入厂内上浆、配浆及相关废水；否则声明继承的纱线上浆状态，并将上游上浆留在纱线数据集中。 | `ec-jrc-textiles-bref-2023` |
| `boundary_excluded_finishing` | foreground_system_boundary | 排除织造后涂覆、聚合物浸渍、湿整理、热清洗和偶联剂处理，除非明确纳入且所得产品仍符合所声明 CPC 26890 范围。 | `un-cpc-3-2025`, `ec-jrc-textiles-bref-2023` |
| `boundary_downstream` | foreground_system_boundary | 本门到门前景数据包排除工厂大门后的配送、复合部件制造、使用、维护和寿命终结。 | `ec-jrc-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `warping` | 纱线接收与整经 | required | 纱线到机织物生产始终适用 | 前景纱线准备 | 送至经轴的整经玻璃纤维纱 kg |
| `sizing` | 厂内经纱上浆 | conditional | 织造工厂制备或施加浆料时纳入 | 前景纱线调理 | 送至经轴的上浆经纱 kg |
| `weaving` | 织机织造 | required | 本范围产品始终适用 | 前景织物成形 | 玻璃纤维机织坯布 kg |
| `inspection_packaging` | 检验、分切、卷绕与包装 | required | 工厂大门参考产品始终适用 | 不含涂覆的前景产品整理 | 合格玻璃纤维机织物净质量 kg |

### 过程：纱线接收与整经（`warping`）

#### 输入

##### 产品流

###### 玻璃纤维经纱（`warping_glass_warp_yarn`）

外购连续玻璃纤维纱或粗纱跨越工厂边界并组成经纱。接收质量、退料和期初库存必须可追溯至供应商及仓库记录。

- 选定流：Glass fiber yarn `52480783-8003-4f68-9f65-0c61335127d8`
- 流属性/单位：Mass / kg
- 数量规则：库存核对后，记录整经批次消耗的合格投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 送至经轴的整经玻璃纤维纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warping_mass_balance`
- 来源：`ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023`

###### 整经用电（`warping_electricity`）

电力驱动筒子架、张力控制、整经机和直接归属的物料搬运。最终 UUID 必须匹配工厂地理位置、电压等级和供电组合。

- 选定流：供应至整经线的交流电
- 流属性/单位：Net calorific value / kWh
- 数量规则：记录分表用量或可归属于该批次且有记录的电表差值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送至经轴的整经玻璃纤维纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warping_electricity`
- 来源：`ec-jrc-textiles-bref-2023`, `toffe-et-al-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经轴上的整经玻璃纤维纱（`warped_glass_warp_on_beam`）

该中间产品是转入上浆或直接转入织造的实测经纱输出；它不是成品，必须作为独立前景中间产品记录。

- 选定流：经轴上的整经玻璃纤维纱
- 流属性/单位：Mass / kg
- 数量规则：记录经轴毛质量减去经核实的空轴皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个整经批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warping_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

###### 整经玻璃纤维纱废料（`warping_glass_yarn_waste`）

断头、缠结纱及离开过程且不可回收的经纱损失应与内部回用材料分开记录。

- 选定流：整经产生的废玻璃纤维纱
- 流属性/单位：Mass / kg
- 数量规则：按去向称量收集废物，并与纱线投入、输出和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送至经轴的整经玻璃纤维纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_warping_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

### 过程：厂内经纱上浆（`sizing`）

#### 输入

##### 产品流

###### 进入上浆的整经玻璃纤维纱（`sizing_warped_glass_yarn`）

仅在工厂制备或施加浆料时，整经纱才进入该条件性过程。外购预上浆纱跳过此过程，并在上游声明继承的浆料状态。

- 选定流：进入上浆的经轴整经玻璃纤维纱
- 流属性/单位：Mass / kg
- 数量规则：经空轴皮重修正后，记录进入上浆批次的经轴净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 送至经轴的上浆玻璃纤维经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

###### 上浆工艺水（`sizing_process_water`）

配制或稀释浆液的水作为一个原子投入跨越过程边界。可归属于上浆批次的清洗水在使用时另增独立原子卡。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：记录加入配浆过程的计量水量或批次配方水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送至经轴的上浆玻璃纤维经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

###### 聚乙烯醇上浆剂（`sizing_polyvinyl_alcohol`）

仅当现场配方含聚乙烯醇时记录该流。实际使用的其他淀粉、聚合物、润滑剂、抗静电剂或添加剂必须分别新增原子交换。

- 选定流：Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- 流属性/单位：Mass / kg
- 数量规则：依据批次单和供应商规格记录供应产品质量及干固含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 送至经轴的上浆玻璃纤维经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

###### 上浆用电（`sizing_electricity`）

电力驱动上浆过程使用的制备、泵送、施加及干燥设备，其 UUID 取决于现场条件。

- 选定流：供应至上浆线的交流电
- 流属性/单位：Net calorific value / kWh
- 数量规则：记录分表用量或可归属于上浆批次且有记录的电表差值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送至经轴的上浆玻璃纤维经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_electricity`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经轴上的上浆玻璃纤维经纱（`sized_glass_warp_on_beam`）

该中间产品包括实测玻璃纤维经纱和保留浆料，并转入织机。保留干浆量必须由质量平衡或产品测试支持。

- 选定流：经轴上的上浆玻璃纤维经纱
- 流属性/单位：Mass / kg
- 数量规则：记录该批次输出经轴净质量及保留浆料状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个上浆批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

###### 上浆废水（`sizing_wastewater`）

记录配浆、施浆或可归属清洗产生的外排废水及其去向、实测固体或污染物数据。循环水在排放前保持为内部流。

- 选定流：玻璃纤维经纱上浆废水
- 流属性/单位：Mass / kg
- 数量规则：记录计量排放量或核算的批次体积，并将实测干固体、COD 和处理路线保留为独立属性或交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送至经轴的上浆玻璃纤维经纱
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sizing_wastewater`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

### 过程：织机织造（`weaving`）

#### 输入

##### 产品流

###### 织机经轴上的玻璃纤维经纱（`weaving_warp_yarn_on_beam`）

记录进入织机的实际整经投入及其已上浆或未上浆状态。不得用成品参考流替代该中间产品。

- 选定流：织机经轴上的玻璃纤维经纱
- 流属性/单位：Mass / kg
- 数量规则：修正退回经纱和经核实的空轴皮重后，记录消耗的经轴净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 玻璃纤维机织坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

###### 玻璃纤维纬纱（`weaving_glass_weft_yarn`）

作为纬纱引入的连续玻璃纤维纱或粗纱与经纱分别跨越织机边界。仓库领料和退回包装支持其消耗质量。

- 选定流：Glass fiber yarn `52480783-8003-4f68-9f65-0c61335127d8`
- 流属性/单位：Mass / kg
- 数量规则：库存核对后记录织造批次领用并消耗的合格纬纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 玻璃纤维机织坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_mass_balance`
- 来源：`ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023`

###### 织造用电（`weaving_electricity`）

电力驱动织机、控制系统、局部抽风和直接归属的搬运。影响显著时，批次计量必须区分生产、空闲及排除的整理负荷。

- 选定流：供应至织造线的交流电
- 流属性/单位：Net calorific value / kWh
- 数量规则：记录批次期间织造线分表数据或有记录的电表差值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 玻璃纤维机织坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_electricity`
- 来源：`ec-jrc-textiles-bref-2023`, `toffe-et-al-2019`

###### 织机润滑油（`weaving_loom_lubricating_oil`）

工厂声明实际牌号后，记录织机消耗的补充润滑油这一种具体产品投入。留在耐用设备中的油不作为已消耗清单。

- 选定流：玻璃纤维织机消耗的润滑油
- 流属性/单位：Mass / kg
- 数量规则：记录批次领用补充质量减去退回的可用油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 玻璃纤维机织坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_lubricant`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 玻璃纤维机织坯布（`greige_woven_glass_fabric`）

织机输出在检验损失和可移除包装之前称量，其结构和上浆状态必须与批次记录一致。

- 选定流：玻璃纤维机织坯布
- 流属性/单位：Mass / kg
- 数量规则：皮重修正后记录坯布卷净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个织造批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`, `techfab-pwc-glass-fabric-2025`

##### 废物流

###### 织造玻璃纤维布废料（`weaving_glass_fabric_waste`）

离开过程的开机布、损坏布边和不合格织机材料按管理去向分别称量。内部回用材料作为内部循环记录，而非废物输出。

- 选定流：织造产生的废玻璃纤维机织物
- 流属性/单位：Mass / kg
- 数量规则：称量织机废物，并与经纱、纬纱、保留浆料、输出和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 玻璃纤维机织坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_mass_balance`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

###### 排入空气的玻璃纤维粉尘（`weaving_glass_fibre_dust_to_air`）

仅依据实测或许可排放记录纳入越过捕集设备的玻璃纤维颗粒直接排放。送废物管理的捕集粉尘应另设废物流。

- 选定流：织造排入空气的玻璃纤维粉尘
- 流属性/单位：Mass / kg
- 数量规则：记录可归属于批次的烟道或工作场所抽风排放实测值；不得由处理质量推断排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 玻璃纤维机织坯布
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

### 过程：检验、分切、卷绕与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 进入检验的玻璃纤维机织坯布（`packaging_greige_glass_fabric`）

坯布卷质量进入检验及必要的切边或分切。若材料来自其他场址，应作为外购背景投入，并声明该数据集不代表纱线到织物制造。

- 选定流：进入检验的玻璃纤维机织坯布
- 流属性/单位：Mass / kg
- 数量规则：修正纸管和包装皮重后记录进料卷净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格玻璃纤维机织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：`techfab-pwc-glass-fabric-2025`

###### 检验与包装用电（`packaging_electricity`）

电力驱动验布机、分切机、卷绕机和直接归属的包装设备，其身份取决于现场供电条件。

- 选定流：供应至检验与包装的交流电
- 流属性/单位：Net calorific value / kWh
- 数量规则：记录该批次分表用量或有记录的分配电表差值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格玻璃纤维机织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_electricity`
- 来源：`techfab-pwc-glass-fabric-2025`

###### 纸板卷绕芯（`packaging_paperboard_core`）

与成品卷一同交付的纸管应与塑料薄膜和托盘分别记录，纸管质量不计入参考产品净质量。

- 选定流：Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass / kg
- 数量规则：记录随合格布卷交付的外购或实称纸管质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格玻璃纤维机织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：`techfab-pwc-glass-fabric-2025`

###### 聚乙烯包装薄膜（`packaging_polyethylene_film`）

施加于布卷的聚乙烯薄膜是一个包装投入。生产者必须声明聚合物类型和再生含量；使用时，捆扎带、标签和托盘分别新增原子交换。

- 选定流：低密度聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：库存核对后记录包装批次购买或领用并消耗的薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格玻璃纤维机织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：`techfab-pwc-glass-fabric-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 玻璃纤维机织物参考产品（`woven_glass_fabric_reference`）

合格织物净输出实现参考流。可移除纸管、薄膜、托盘和其他运输包装应分别记录，不计入该质量。

- 选定流：Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- 流属性/单位：Mass / kg
- 数量规则：记录经校准的合格织物净质量，并将数据包归一化至 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：`un-cpc-3-2025`, `techfab-pwc-glass-fabric-2025`

##### 废物流

###### 不合格玻璃纤维机织物（`packaging_offspec_glass_fabric`）

检验拒收或分切产生的织物按实际废物管理去向记录。可销售降级品属于共产品，不得作为废物记录。

- 选定流：送废物管理的不合格玻璃纤维机织物
- 流属性/单位：Mass / kg
- 数量规则：称量不合格织物，并与进料坯布质量、合格输出和库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格玻璃纤维机织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：`techfab-pwc-glass-fabric-2025`

###### 纸板包装废物（`packaging_paperboard_waste`）

工厂丢弃的损坏纸管和其他纸板包装应与随产品交付的纸管及塑料包装废物分别记录。

- 选定流：Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- 流属性/单位：Mass / kg
- 数量规则：按管理去向称量或核算该批次丢弃的纸板包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格玻璃纤维机织物净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass_balance`
- 来源：`techfab-pwc-glass-fabric-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | foreground_burden_allocation | 首先通过分表计量、批次特定物料记录、按织造线细分及明确的内部循环核算避免分配。 | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `allocation_shared_energy` | 共用公用工程和设备 | 当设备运行时间或织机小时代表因果驱动因素时，以此分配未分表的共用电力；声明空闲负荷处理并测试实质性替代方案。 | `iso-14044-2006`, `toffe-et-al-2019` |
| `allocation_shared_materials` | 共用材料和废物 | 共用纱线、浆料、包装及固体废物按各产品批次可归属的实测质量分配，除非证明有更具因果性的物理参数。 | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `allocation_internal_rework` | 内部返工 | 返回同一前景生产系统的材料作为无共产品抵扣的内部循环，并防止其质量和负荷重复计算。 | `iso-14044-2006` |
| `allocation_saleable_downgrade` | 可销售降级织物 | 可销售降级织物作为共产品；可辩护时采用有记录的物理关系，仅在无法证明物理关系时采用经济分配并披露敏感性。 | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `allocation_waste_recovery` | 送回收的废物 | 将收集和预处理保留在前景边界内；仅在明确声明的下游方法中采用回收或替代抵扣，不得以无说明的负废物数量实现。 | `ec-jrc-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_warping_mass_balance` | `warping` | 经纱、经轴和纱线废料 | 仓库领料、称量单和批次日志 | 物料 id、玻璃类型、纱规格、批号、期初库存、领用质量、退回质量、经轴毛重、经轴皮重、废物质量、去向 | 按批次核对经校准称量和库存移动 | kg | 每批次 | 代表性生产期间 | 所有纳入整经线 | 汇总有效记录；内部回用分开；仅在质量核对后归一化 | 校准证书、仓库台账、批次日志、废物联单 |
| `cp_warping_electricity` | `warping` | 电力 | 分表或主表区间记录 | 电表 id、起止时间、kWh、生产线状态、批次 id、纳入辅机 | 分表差值；否则由同期主表数据形成有记录的分配 | kWh | 每批次或区间 | 代表性生产期间 | 所有纳入整经线 | 汇总生产及可归属辅机区间；声明空闲处理 | 电表台账、区间导出、分配工作表 |
| `cp_sizing_mass_balance` | `sizing` | 整经纱、水、PVA、其他配方组分和上浆输出 | 批次单、配方、仪表和称量记录 | 批次 id、输入经轴质量、水、化学产品质量、干固含量、输出经轴质量、退料、残余物 | 核对批次投入、保留浆料和输出 | kg | 每个上浆批次 | 代表性生产期间 | 所有纳入上浆线 | 按产品汇总有效批次；保留供应和干固体基准 | 批准配方、供应商规格、秤和仪表记录 |
| `cp_sizing_electricity` | `sizing` | 电力 | 分表或主表区间记录 | 电表 id、起止时间、kWh、批次 id、干燥机和泵状态 | 分表差值；否则按有记录的设备时间分配 | kWh | 每批次或区间 | 代表性生产期间 | 所有纳入上浆线 | 按批次汇总可归属区间 | 电表台账、区间导出、分配工作表 |
| `cp_sizing_wastewater` | `sizing` | 废水 | 排水计、批次平衡和实验室记录 | 排放质量或体积、密度基准、COD、干固体、处理路线、采样时间、批次 id | 使用排水计和代表性采样；与批次用水核对 | kg | 每批次并定期分析 | 代表性生产期间 | 所有纳入上浆排水 | 体积加权汇总分析结果并保留处理路线 | 仪表校准、实验室报告、排放联单 |
| `cp_weaving_mass_balance` | `weaving` | 经纱、纬纱、坯布输出和织机废物 | 经轴记录、仓库领料、布卷称量和废物联单 | 批次 id、产品代码、经纱投入、纬纱领退、坯布卷毛重、皮重、废物质量、库存变化 | 核对各织机批次经校准质量 | kg | 每批次 | 代表性生产期间 | 所有纳入织机 | 质量平衡审核后汇总有效批次 | 秤校准、织机工单、仓库台账、废物联单 |
| `cp_weaving_electricity` | `weaving` | 电力 | 织造线分表或区间记录 | 电表 id、织机 id、起止时间、kWh、运行时间、空闲时间、批次 id | 按批次分表；否则按有记录的织机小时分配同期区间用电 | kWh | 每批次或区间 | 代表性生产期间 | 所有纳入织机和直接抽风 | 汇总可归属区间；声明分配与空闲负荷 | 电表台账、设备日志、分配工作表 |
| `cp_weaving_lubricant` | `weaving` | 润滑油 | 库房领料和维护记录 | 产品 id、牌号、领用质量、退回质量、设备 id、日期、批次 | 核对补充油领用和退回 | kg | 每次领用并按批次汇总 | 代表性生产期间 | 所有纳入织机 | 按设备批次汇总净消耗补充油 | 安全数据表、库房台账、维护记录 |
| `cp_weaving_air_emissions` | `weaving` | 排入空气的玻璃纤维粉尘 | 烟道测试、抽风记录或许可报告 | 排放源 id、采样方法、浓度、气体流量、运行时间、捕集状态、批次 | 仅由与生产对齐的实测排放源数据计算释放质量 | kg | 每个有效测量期间 | 代表性运行条件 | 所有相关直接排放点 | 对齐时间后积分浓度与流量；不作无依据推断 | 认可测试报告、许可记录、运行日志 |
| `cp_packaging_mass_balance` | `inspection_packaging` | 坯布投入、参考输出、不合格品、纸管、薄膜和纸板废物 | 布卷工单、称量、包装领料和废物记录 | 布卷 id、进料毛重和皮重、合格净质量、不合格质量、纸管质量、薄膜领料、其他包装、废物质量、去向 | 按批次核对经校准布卷和包装质量 | kg | 每卷或批次 | 代表性生产期间 | 所有纳入检验与包装线 | 汇总合格布卷和包装领料；产品质量排除可移除包装 | 秤校准、布卷工单、材料清单、废物联单 |
| `cp_packaging_electricity` | `inspection_packaging` | 电力 | 分表或区间记录 | 电表 id、起止时间、kWh、设备状态、批次 id | 分表差值；否则按有记录的设备时间分配 | kWh | 每批次或区间 | 代表性生产期间 | 所有纳入检验与包装设备 | 按批次汇总可归属区间 | 电表台账、设备日志、分配工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_roll_mass` | 坯布卷和合格布卷 | 织物净质量等于布卷毛重减去经核实的纸管、外包装及其他可移除皮重。 | 秤上毛重；纸管皮重；外包装皮重；其他可移除皮重 | 织物净质量 kg | `techfab-pwc-glass-fabric-2025` |
| `calc_process_intensity` | 每个前景交换 | 归一化交换量等于有效批次交换量除以相应过程有效净输出质量或参考产品质量。 | 有效交换量；有效过程输出或参考质量 | 每 kg 基准的交换量 | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `calc_mass_balance` | 各物料加工阶段 | 核对期初库存加投入与输出、期末库存、内部退料和废物；调查无法解释的差异，不得强行闭合。 | 期初库存；投入；产品和中间产品输出；退料；废物；期末库存 | 有记录的质量平衡差异 | `iso-14044-2006`, `techfab-pwc-glass-fabric-2025` |
| `calc_dry_size` | 上浆配方和排放 | 上浆剂干质量等于供应产品质量乘以供应商或实测干固含量；水质量单独保留。 | 供应产品质量；干固含量 | 上浆剂干质量 kg | `ec-jrc-textiles-bref-2023` |
| `calc_measured_dust` | 玻璃纤维粉尘直接排放 | 释放质量等于实测浓度乘以对齐的干气体积或流量时间积分，并记录单位换算。 | 实测浓度；气体流量或体积；对齐运行时间 | 颗粒物释放质量 kg | `ec-jrc-textiles-bref-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technology` | 产品与过程路线 | 为每个汇总产品系列识别织机类型、织物组织、玻璃类型、纱规格、上浆状态、名义幅宽和面密度。 | 产品规格、材料清单和批次路线 |
| `dq_temporal` | 前景活动数据 | 使用覆盖正常运行、开机、不合格品和维护影响的声明代表期；识别排除项和异常批次。 | 生产日历、批次台账和排除日志 |
| `dq_geography` | 公用工程和上游数据集 | 匹配工厂国家或电网区域，并披露重要纱线、化学品及包装供应商的地理位置。 | 场址记录、供应商声明和数据集元数据 |
| `dq_completeness` | 清单 | 核对物料质量，并分别记录每种实际公用工程、上浆组分、包装组分、废物流和实测直接排放；不得合并为集合标签。 | 质量平衡、公用工程台账、配方、包装清单和废物台账 |
| `dq_measurement` | 仪表和秤 | 使用在校准有效期内的仪器，保留原始读数、皮重记录、数据处理及不确定度或精度证据。 | 校准证书、原始导出和计算工作表 |
| `dq_uuid_identity` | Tiangong 引用 | 发布前以 state100 直读解析每个 UUID 并核对名称、流类型、属性和必要限定信息；未解析身份继续作为审核阻断项。 | Tiangong 直读证据和审核签署 |
| `dq_source_traceability` | 方法规则 | 保留支持各边界、计算或质量规则的确切报告、标准或全文论文版本。 | 受控来源登记和检索日期 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | foreground_dataset_conformance | 确认参考产品属于 CPC 26890 的玻璃纤维机织物，且不存在排除的非织造、针织、涂覆、浸渍或复合产品。 | `un-cpc-3-2025` |
| `validate_reference` | foreground_dataset_conformance | 确认参考输出使用 UUID 59caf1b9-5a05-4eef-8ba2-bc94aa28f43f、Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 和 kg 产品净质量。 | `un-cpc-3-2025` |
| `validate_qualifiers` | foreground_dataset_conformance | 除非所有必需产品、过程、地理和期间限定信息均已声明，否则拒绝不完整参考定义。 | `iso-ts-14027-2017`, `iso-14025-2006` |
| `validate_boundary` | foreground_dataset_conformance | 确认整经、织造、检验和包装已纳入；实施时纳入厂内上浆；连接上游纱线生产；排除的整理和下游阶段未被静默混入前景数据包。 | `ec-jrc-glass-bref-2013`, `ec-jrc-textiles-bref-2023` |
| `validate_atomic_inventory` | foreground_dataset_conformance | 确认每张清单卡代表一个具体交换，并分别表示每种实际供电、化学品、包装材料、废物和直接排放。 | `ec-jrc-textiles-bref-2023` |
| `validate_mass_balance` | foreground_dataset_conformance | 确认各阶段及总体物料平衡在有记录的测量精度内核对，并调查无法解释的差异，而非赋予虚构流。 | `iso-14044-2006`, `techfab-pwc-glass-fabric-2025` |
| `validate_foreground_values` | foreground_dataset_conformance | 确认清单数量来自采集的前景记录或由这些记录计算；拒绝无支持的通用或 AI 编写数值范围。 | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `validate_allocation` | foreground_dataset_conformance | 确认首先避免分配；记录任何剩余物理或经济分配，并在方法选择可能显著影响结果时披露敏感性。 | `iso-14044-2006`, `ec-jrc-pef-2021` |
| `validate_uuid_state` | foreground_dataset_conformance | 确认数据包存储的每个 UUID 均以精确语义身份在公共 state100 解析；任何未解析或不匹配 UUID 均阻止发布。 | `iso-14044-2006` |
| `validate_bilingual_alignment` | foreground_dataset_conformance | 确认中英机器字段、规则顺序、过程顺序、行顺序和 UUID 保持对齐。 | `iso-ts-14027-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 玻璃纤维机织物从纱线到工厂大门的产品特定或工厂平均前景单元过程数据包 |
| downstream_use | 发布为过程数据集，并与上游纱线、公用工程、化学品、包装及废物处理数据集连接后用于生命周期模型投影 |
| allowed_use | 满足所声明 CPC 26890 边界、限定信息、场址地理位置和生产期间的产品与路线 |
| excluded_use | 非织造、针织、缝编多轴向、涂覆、浸渍或复合产品；玻璃熔化或拉丝；无支持的市场平均；下游制造或使用 |
| required_metadata | PCR id 和版本；参考 UUID；CPC 代码；工厂地理位置；期间；产品结构；玻璃与纱规格；上浆状态；过程图；分配；截断；上游链接；UUID 审核状态 |
| required_quality_disclosure | 一手数据覆盖；仪表和秤校准；质量平衡差异；共用公用工程分配；数据缺口；未解析身份；代表性和不确定度 |
| update_trigger | 产品结构或路线变化；上浆或整理变化；重大织机或公用工程变化；供应商或地理变化；更新的代表期间；来源或 Tiangong 身份修订 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版解释性说明，子类 26890，2025。<https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf> | 官方产品身份、纳入机织物范围和分类边界；检索于 2026-08-12 |
| `ec-jrc-glass-bref-2013` | 官方指南（`official_guidance`） | 欧盟委员会 JRC，玻璃制造最佳可行技术参考文件，2013，DOI 10.2791/69502。<https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf> | 上游连续玻璃纤维和上浆背景、上游数据集要求及排放关注；检索于 2026-08-12 |
| `ec-jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会 JRC，纺织工业最佳可行技术参考文件，2023。<https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf> | 整经、上浆和织造过程分解，公用工程、油、水、废水及清单完整性；检索于 2026-08-12 |
| `ec-jrc-pef-2021` | 官方指南（`official_guidance`） | 欧盟委员会关于环境足迹方法的建议（EU）2021/2279。<https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A32021H2279> | 功能单位、系统边界、分配、清单、数据质量及回收方法规则；检索于 2026-08-12 |
| `iso-14040-2006` | 标准（`standard`） | ISO 14040:2006，环境管理—生命周期评价—原则与框架。<https://www.iso.org/standard/37456.html> | LCA 目标、范围和清单框架；检索于 2026-08-12 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，环境管理—生命周期评价—要求与指南。<https://www.iso.org/standard/38498.html> | 边界、分配、清单计算、质量和校验规则；检索于 2026-08-12 |
| `iso-14025-2006` | 标准（`standard`） | ISO 14025:2006，环境标志和声明—III 型环境声明—原则和程序。<https://www.iso.org/standard/38131.html> | PCR 和披露背景；检索于 2026-08-12 |
| `iso-ts-14027-2017` | 标准（`standard`） | ISO/TS 14027:2017，环境标志和声明—产品类别规则制定。<https://www.iso.org/standard/66123.html> | PCR 内容和沟通对齐；检索于 2026-08-12 |
| `iso-14067-2018` | 标准（`standard`） | ISO 14067:2018，温室气体—产品碳足迹。<https://www.iso.org/standard/71206.html> | 产品碳足迹应用背景；检索于 2026-08-12 |
| `techfab-pwc-glass-fabric-2025` | 文献（`literature`） | Tech-Fab Europe 和 PwC，玻璃纤维织物生命周期评价报告，2025 年 1 月。<https://www.solidian-kelteks.com/images/downloads/250127_LCA_Tech_Fab_report__Open_mesh_Jan_2025.pdf> | 产品背景、1 kg 门到门参考、一手数据字段、包装、质量平衡及产品系列局限；检索于 2026-08-12 |
| `toffe-et-al-2019` | 文献（`literature`） | Toffe 等，A Scale-up of Energy-Cycle Analysis on Processing Non-Woven Flax/PLA Tape and Triaxial Glass Fibre Fabric for Composites，Journal of Manufacturing and Materials Processing 3(4):92，2019，DOI 10.3390/jmmp3040092。<https://eprints.bournemouth.ac.uk/32952/7/jmmp-03-00092.pdf> | 同行评审全文证据，用于批次特定设备用电计量和生产输出归一化；不用于定义机织工艺身份；检索于 2026-08-12 |
