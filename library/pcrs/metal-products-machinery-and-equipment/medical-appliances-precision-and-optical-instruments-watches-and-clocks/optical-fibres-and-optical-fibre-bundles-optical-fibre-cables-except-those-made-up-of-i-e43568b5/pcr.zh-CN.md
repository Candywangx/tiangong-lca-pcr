---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.optical-fibres-and-optical-fibre-bundles-optical-fibre-cables-except-those-made-up-of-i-e43568b5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 光纤、偏振材料和经光学加工的光学元件

## 1. 范围与适用性

本 PCR 适用于光纤和光纤束、并非由单独包覆光纤组成的光缆、偏振材料制片材和板材，以及经光学加工的透镜、棱镜、反射镜和其他光学元件（无论是否装配）的出厂生产。未经光学加工的玻璃制元件，以及照相机、投影仪、摄影放大机或缩小机用光学元件不在范围内。连接器、完整光学仪器、安装、使用和生命末期阶段不属于默认边界。

每个前景数据包必须声明一个产品族路线。只有在产品功能、光学性能、几何形状、组成、涂层或层压结构及装配状态均相匹配后，通用质量参考量才可用于比较。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.optical-fibres-and-optical-fibre-bundles-optical-fibre-cables-except-those-made-up-of-i-e43568b5 |
| classification_refs | CPC 3.0: 48311（仅为映射背景） |
| covered_products | 带涂层光纤；光纤束；并非由单独包覆光纤组成的光缆；偏振材料制片材或板材；经光学加工的透镜、棱镜、反射镜或其他光学元件，无论是否装配 |
| excluded_products | 由单独包覆光纤组成的光缆；未经光学加工的玻璃制元件；照相机、投影仪、摄影放大机或缩小机用光学元件；连接器；完整光学仪器 |
| representative_product | 生产企业出厂的带涂层石英玻璃光纤 |
| production_route | 必须准确声明一个主要产品族路线：光纤拉丝与涂覆、光纤成束或成缆、偏振膜制造，或经光学加工的光学元件制造 |
| market_state | 经路线特定检验后、下游安装或使用前、无运输包装的出厂合格产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个属于覆盖边界的无包装合格光学产品 |
| How much | 1 kg 净合格产品 |
| How well | 满足所声明的几何、组成、光学性能、涂层或层压结构、装配和验收规范 |
| How long or cycle | 一次出厂生产输出；使用阶段寿命不在范围内 |
| reference_flow_link | 实例化适用路线的输出行；代表性链接为 `fibre_saleable_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格产品 |
| 参考产品流 | 带涂层石英玻璃光纤 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品族和准确产品名称；玻璃、聚合物、晶体或金属的组成与牌号；尺寸和净质量换算；适用的光学衰减、透射、反射、偏振、折射率、波前或表面质量规范；涂层、层压、缓冲层、护套和装配状态；生产技术；地理范围；参考期；出厂验收收率 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。非光纤产品必须用其准确路线输出标识替换代表性显示名称，同时保留质量属性和所有适用限定信息；这不会形成另一个 PCR 参考流对象。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用合格产品净质量，不计运输包装、拒收件、可移除载体和试片。 |
| `length_to_mass` | 按长度报告的光纤、光纤束或光缆 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同批产品实测单位长度质量换算实测长度；保留原始长度、取样记录和换算因子。 |
| `area_to_mass` | 按面积报告的偏振材料片材或板材 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用相同结构和批次的实测面密度换算实测面积；保留面积和面密度证据。 |
| `count_to_mass` | 按件报告的经加工光学元件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用整批质量或有记录的代表性称量方案；保留件数、样品质量和外推方法。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表 kWh 原值，并按 1 kWh = 3.6 MJ 换算；不得把上游发电排放作为前景基本流加入。 |

## 5. 系统边界

前景边界始于所声明路线前体的接收，止于合格无包装产品出厂。边界包括生产场址内路线特定的成型或拉丝、涂覆或层压、精加工、过程检验、拒收品和废物交接准备。上游前体生产和场外废物处理必须链接独立数据集，不得并入前景计量值。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 适用于所选路线并在生产场址门口接收的、符合规范的预制棒、带涂层光纤、聚合物薄膜、光学毛坯、工艺化学品、工艺用水和外购电力 |
| starting_condition_role | 路线特定转化的前景入口；上游生产保留在供应商或代表性链接数据集中 |
| product_classification_scope | 上述语义产品边界；CPC 3.0:48311 是映射证据，不能单独定义 PCR 标识 |
| recursive_input_rule | 当带涂层光纤或其他覆盖产品进入成束、成缆或装配时，作为产品投入记录一次并链接上游数据集；不得在消费过程中递归重建其生产 |
| upstream_dataset_requirement | 每种采购材料、化学品、水和电力均须链接与地理、技术、牌号和状态相匹配的上游数据集，并披露代理数据 |
| disclosure | 声明所选路线、前体状态、纳入操作、外包操作、涂层或层压体系、装配状态、验收准则、截断决定、分配、地理、技术和参考期 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_selection` | 所有数据集 | 至少选择一个且通常仅选择一个主要产品族路线；不得把无关产品族平均为一个参考流。 | `un-cpc-3-0-structure-2025` |
| `boundary_fibre_and_cable` | 光纤或光缆路线 | 纳入报告场址实施的拉丝、防护涂覆和固化、检验，以及适用时的缓冲、成束和护套挤出。 | `foa-optical-fiber-manufacturing`, `foa-fiber-optic-cables` |
| `boundary_polarizer` | 偏振材料路线 | 纳入报告场址实施的 PVA 膜调理、染色、交联、拉伸、干燥、保护膜层压、精整和检验。 | `yan-et-al-2026-pva-dye-films` |
| `boundary_optical_element` | 经加工光学元件路线 | 纳入报告场址实施的毛坯成形、铣磨、研磨、抛光、定心或磨边、清洗、可选镀膜或胶合及检验。 | `anderson-burge-optical-fabrication` |
| `boundary_outsourcing` | 外包操作 | 被外包的范围内操作须作为链接产品投入报告，并披露未纳入的前景操作；不得无披露地遗漏其负荷。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fibre_drawing` | 光纤拉丝、涂覆、固化和检验 | `conditional` | 声明产品为带涂层光纤、光纤束或光缆，且拉丝在报告边界内实施 | 前景生产 | 合格带涂层光纤质量 |
| `fibre_cabling` | 光纤成束或缓冲与护套加工 | `conditional` | 声明产品为光纤束，或并非由单独包覆光纤组成的光缆 | 前景生产 | 合格光纤束和光缆质量，分别报告 |
| `polarizer_fabrication` | 偏振膜处理与层压 | `conditional` | 声明产品为偏振材料制片材或板材 | 前景生产 | 合格偏振产品质量 |
| `optical_element_fabrication` | 经光学加工的光学元件制造 | `conditional` | 声明产品为覆盖范围内经加工的透镜、棱镜、反射镜或其他光学元件 | 前景生产 | 合格经加工光学元件质量 |

### 过程：光纤拉丝、涂覆、固化和检验（`fibre_drawing`）

#### 输入

##### 产品流

###### 高纯熔融石英光纤预制棒（`fibre_silica_preform`）

记录投入拉丝的预制棒质量，包括实测余棒变化。

- 选定流：高纯熔融石英光纤预制棒
- 流属性/单位：Mass / kg
- 数量规则：实测预制棒消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格带涂层光纤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_drawing_records`
- 来源：`foa-optical-fiber-manufacturing`

###### 光纤用紫外固化丙烯酸酯涂覆树脂（`fibre_uv_coating`）

配方不同的树脂在实例化数据中必须分成不同交换；本行表示所声明的涂覆树脂。

- 选定流：光纤用紫外固化丙烯酸酯涂覆树脂
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减可回收退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格带涂层光纤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_drawing_records`
- 来源：`foa-optical-fiber-manufacturing`

###### 光纤拉丝外购电力（`fibre_electricity`）

记录本过程炉体、冷却、涂层固化、收线和在线检验的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格带涂层光纤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_drawing_records`
- 来源：`foa-optical-fiber-manufacturing`

#### 输出

##### 产品流

###### 合格带涂层石英玻璃光纤（`fibre_saleable_product`）

只记录通过所声明光学、几何和筛选强度验收要求的光纤。

- 选定流：带涂层石英玻璃光纤
- 流属性/单位：Mass / kg
- 数量规则：实测合格产品输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_drawing_records`
- 来源：`foa-optical-fiber-manufacturing`

##### 废物流

###### 光纤拉丝及固化涂层废料（`fibre_scrap`）

记录作为所声明复合废料离开过程的拒收或开机光纤。

- 选定流：光纤拉丝及固化涂层废料
- 流属性/单位：Mass / kg
- 数量规则：实测转出过程的废料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格带涂层光纤
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_drawing_records`
- 来源：`foa-optical-fiber-manufacturing`

### 过程：光纤成束或缓冲与护套加工（`fibre_cabling`）

#### 输入

##### 产品流

###### 成束或成缆用带涂层光纤（`cable_optical_fibre_input`）

依据递归投入规则，将接收的带涂层光纤作为技术圈产品投入记录一次。

- 选定流：带涂层石英玻璃光纤
- 流属性/单位：Mass / kg
- 数量规则：实测带涂层光纤消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格光纤束或光缆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_cabling_records`
- 来源：`foa-fiber-optic-cables`

###### 光缆用聚乙烯护套料（`cable_polyethylene_jacket`）

仅在实施护套加工时记录所声明聚乙烯护套料；无护套光纤束不适用本行。

- 选定流：光缆用聚乙烯护套料
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减可回收退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格带护套光缆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_cabling_records`
- 来源：`foa-fiber-optic-cables`

###### 成束或成缆外购电力（`cable_electricity`）

记录所选路线中缓冲、集合、挤出、收卷和检验的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格光纤束或光缆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_cabling_records`
- 来源：`foa-fiber-optic-cables`

#### 输出

##### 产品流

###### 合格光纤束（`fibre_bundle_saleable_product`）

仅当声明输出为光纤束时记录其合格质量。

- 选定流：光纤束
- 流属性/单位：Mass / kg
- 数量规则：实测合格光纤束输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 光纤束参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_cabling_records`
- 来源：`foa-fiber-optic-cables`

###### 合格非单独包覆光纤组成的光缆（`cable_saleable_product`）

仅当构造满足所述排除条件时记录合格光缆质量。

- 选定流：非单独包覆光纤组成的光缆
- 流属性/单位：Mass / kg
- 数量规则：实测合格光缆输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 光缆参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_cabling_records`
- 来源：`un-cpc-3-0-structure-2025`, `foa-fiber-optic-cables`

##### 废物流

###### 光缆护套边角料（`cable_trim`）

记录离开成缆过程的实测聚乙烯富集护套边角料。

- 选定流：光缆护套边角料
- 流属性/单位：Mass / kg
- 数量规则：实测转出过程的护套边角料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格带护套光缆输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fibre_cabling_records`
- 来源：`foa-fiber-optic-cables`

### 过程：偏振膜处理与层压（`polarizer_fabrication`）

#### 输入

##### 产品流

###### 聚乙烯醇偏振膜（`polarizer_pva_film`）

记录投入溶胀、染色、交联和拉伸的 PVA 膜。

- 选定流：聚乙烯醇偏振膜
- 流属性/单位：Mass / kg
- 数量规则：实测 PVA 膜消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

###### 偏振膜染色用单质碘（`polarizer_iodine`）

记录投入所声明染色浴的单质碘；其他二向色染料必须实例化为单独交换。

- 选定流：单质碘
- 流属性/单位：Mass / kg
- 数量规则：实测碘补加消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

###### 交联用无水硼酸粉末（`polarizer_boric_acid`）

记录配液前硼酸产品质量，并披露浴液浓度。

- 选定流：硼酸，无水，粉末 `c3db6e91-34b8-4748-993b-3dec963167fe`
- 流属性/单位：Mass / kg
- 数量规则：实测硼酸补加消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

###### 三醋酸纤维素保护膜（`polarizer_tac_film`）

记录层压至 PVA 偏振层的 TAC 保护膜。

- 选定流：三醋酸纤维素保护膜
- 流属性/单位：Mass / kg
- 数量规则：实测 TAC 膜消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

###### 偏振处理工艺用水（`polarizer_process_water`）

记录进入溶胀、配浴、清洗和设备清洁的新鲜工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

###### 偏振产品制造外购电力（`polarizer_electricity`）

记录薄膜输送、拉伸、干燥、层压和检验的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

#### 输出

##### 产品流

###### 合格偏振材料制片材或板材（`polarizer_saleable_product`）

记录裁切后且不含离型载体的合格产品净质量。

- 选定流：偏振材料制片材或板材
- 流属性/单位：Mass / kg
- 数量规则：实测合格产品输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`un-cpc-3-0-structure-2025`, `yan-et-al-2026-pva-dye-films`

##### 废物流

###### 含碘偏振工艺废水（`polarizer_iodine_wastewater`）

记录现场处理前含有染浴和漂洗碘损失的水相废物流。

- 选定流：含碘偏振工艺废水
- 流属性/单位：Mass / kg
- 数量规则：实测转出过程的废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

###### PVA/TAC 偏振膜边角料（`polarizer_trim`）

将复合膜边角料和拒收层压膜与包装废物分开记录。

- 选定流：PVA/TAC 偏振膜边角料
- 流属性/单位：Mass / kg
- 数量规则：实测转出过程的薄膜边角料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格偏振产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polarizer_records`
- 来源：`yan-et-al-2026-pva-dye-films`

### 过程：经光学加工的光学元件制造（`optical_element_fabrication`）

#### 输入

##### 产品流

###### 光学玻璃毛坯（`optical_glass_blank`）

记录进入成形或铣磨的光学玻璃压制毛坯质量。

- 选定流：光学玻璃毛坯 `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- 流属性/单位：Mass / kg
- 数量规则：实测毛坯消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格经加工光学元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`anderson-burge-optical-fabrication`

###### 氧化铈抛光材料（`optical_cerium_oxide`）

记录用于配制或补加抛光浆料的氧化铈产品质量。

- 选定流：氧化铈 `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- 流属性/单位：Mass / kg
- 数量规则：实测氧化铈消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格经加工光学元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`anderson-burge-optical-fabrication`

###### 氟化镁光学镀膜材料（`optical_magnesium_fluoride`）

仅当所声明镀膜配方使用氟化镁时记录。

- 选定流：氟化镁 `93bc64cc-df82-4a13-aa0f-9f05cb4b40c9`
- 流属性/单位：Mass / kg
- 数量规则：实测镀膜材料消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格带涂层光学元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`anderson-burge-optical-fabrication`

###### 高纯铝反射镜蒸镀材料（`optical_aluminium`）

仅在声明反射镀膜路线时记录高纯铝。

- 选定流：高纯铝反射镜蒸镀材料
- 流属性/单位：Mass / kg
- 数量规则：实测蒸镀材料消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格镀膜反射镜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`anderson-burge-optical-fabrication`

###### 光学研磨抛光工艺用水（`optical_process_water`）

记录进入研磨、浆料配制、漂洗和清洁的新鲜工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格经加工光学元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`anderson-burge-optical-fabrication`

###### 光学元件制造外购电力（`optical_electricity`）

记录所选路线中成形、研磨、抛光、清洗、镀膜、胶合和检验的计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配后的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格经加工光学元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`anderson-burge-optical-fabrication`

#### 输出

##### 产品流

###### 合格经加工光学元件（`optical_saleable_product`）

记录准确的合格透镜、棱镜、反射镜或其他经加工元件，并披露材料、涂层、胶合和装配状态。

- 选定流：经加工的光学透镜、棱镜、反射镜或其他光学元件
- 流属性/单位：Mass / kg
- 数量规则：实测合格产品输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`un-cpc-3-0-structure-2025`, `anderson-burge-optical-fabrication`

##### 废物流

###### 光学玻璃研磨抛光污泥（`optical_polishing_sludge`）

记录现场处理前含玻璃颗粒和废抛光材料的水相浆料废物。

- 选定流：光学玻璃研磨抛光污泥
- 流属性/单位：Mass / kg
- 数量规则：实测转出过程的污泥量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格经加工光学元件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_records`
- 来源：`anderson-burge-optical-fabrication`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | 所有路线 | 在分配前细分路线生产线并直接计量材料、电力、水、产出和废物。 |  |
| `allocation_shared_utilities` | 共用公用工程和设备 | 剩余共用数量应按计量设备能耗、可比负荷下运行时间或加工质量等有记录的因果驱动因素分配，并披露驱动因素数值。 |  |
| `allocation_multiple_products` | 同一生产活动的多个合格产品 | 优先采用分开的实测产出记录；无法分开时，按反映过程因果关系且有记录的物理关系分配，并报告每项产品质量。 |  |
| `allocation_waste_treatment` | 废物与回收 | 分别报告离开前景的废物和任何现场处理；不得把避免负荷抵扣嵌入前景交换量。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_drawing_records` | `fibre_drawing` | 所列全部光纤拉丝交换 | 采购领用、电表、生产拒收和废物转移记录 | 预制棒质量；树脂领退；kWh；合格长度和质量；废料质量；批次与规范 | 核对经校准电表、秤、库存领用和批次记录 | kg; m; kWh; MJ | 每批或连续计量并按月核对 | 有代表性的连续 12 个月或完整较短活动 | 报告场址全部范围内拉丝线 | 按产品规范求和，换算为质量，分配共用数量后除以合格输出 kg | 校准、发票、库存核对、验收和废物联单 |
| `cp_fibre_cabling_records` | `fibre_cabling` | 所列全部成束成缆交换 | 材料领用、电表、生产和废物转移记录 | 光纤质量；护套料领退；kWh；合格光纤束质量；合格光缆质量；边角料质量；构造 | 按构造和生产线核对材料与能源记录 | kg; m; kWh; MJ | 每批或连续计量并按月核对 | 有代表性的连续 12 个月或完整较短活动 | 全部范围内成束和成缆线 | 光纤束和光缆产出分开，分配共用数量后除以适用合格输出 kg | 校准、库存核对、构造、验收和废物记录 |
| `cp_polarizer_records` | `polarizer_fabrication` | 所列全部偏振产品交换 | 薄膜领用、配浴、水电表、生产、废水和边角料记录 | PVA、碘、硼酸、TAC、水、kWh、合格面积和质量、废水质量、边角料质量、结构 | 核对卷材、浴液、电表、秤和废物记录 | kg; m2; kWh; MJ | 每卷或每槽；电表按月 | 有代表性的连续 12 个月或完整较短活动 | 全部范围内偏振产品线 | 按同结构批次证据把合格面积换算为质量，分配共用数量后除以合格 kg | 卷材谱系、配浴记录、电表校准、验收和废物记录 |
| `cp_optical_element_records` | `optical_element_fabrication` | 所列全部光学元件交换 | 毛坯和材料领用、水电表、生产、检验和污泥记录 | 毛坯质量；抛光和镀膜材料；水；kWh；合格件数和质量；污泥质量；光学规范 | 核对批次流转卡、领用、电表、秤和检验放行 | kg; item; kWh; MJ | 每批；连续电表按月 | 有代表性的连续 12 个月或完整较短活动 | 全部范围内加工单元 | 按整批或有记录样本称量把件数换算为质量，分配共用数量后除以合格 kg | 批次谱系、校准、材料核对、光学检验和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | 每个清单行 | 归一化量 = 范围内期间交换量 × 有记录的分配比例 ÷ 合格路线输出质量 | 交换记录；分配驱动因素；合格输出 kg | 每 kg 合格产品的交换量 |  |
| `calc_electricity_mj` | 电力行 | MJ = 电表 kWh × 3.6 | 电表 kWh | MJ 外购电力 |  |
| `calc_length_mass` | 光纤、光纤束和光缆输出 | kg = 实测长度 × 同批实测单位长度质量，并与秤量总值核对 | 长度；kg/m；秤量总值 | 合格质量 |  |
| `calc_area_mass` | 偏振产品 | kg = 合格面积 × 同结构实测面密度，并与卷材质量核对 | 合格 m2；kg/m2；卷材质量 | 合格质量 |  |
| `calc_count_mass` | 经加工光学元件 | 有整批质量时直接采用，否则 kg = 合格件数 × 代表性合格件质量 | 件数；取样方案；单件或整批质量 | 合格质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 记录准确产品族、组成、构造、光学规范、涂层或层压、装配及供应商产品状态。 | 规范；批次谱系；供应商声明 |
| `dq_temporal` | 全部前景行 | 覆盖有代表性的连续 12 个月或完整较短活动，并解释停机、开机和异常批次。 | 带日期电表、生产记录和核对期间 |
| `dq_completeness` | 每个所选路线 | 核对全部适用原子交换；用可证明的零值或不适用说明代替无说明遗漏。 | 材料、能源、水、产出和废物核对 |
| `dq_measurement` | 长度、面积、件数和电力换算 | 保留原始单位、校准、取样、换算因子和计算版本。 | 校准证书；称量和换算工作底稿 |
| `dq_upstream` | 链接产品投入 | 匹配地理、技术、牌号、纯度、水质、电力组合和交付状态；披露所有代理。 | 上游数据集元数据和代理理由 |
| `dq_uncertainty` | 分配或取样值 | 定量或定性排序分配、取样、缺失期间和未解决流标识造成的不确定性。 | 不确定性记录和敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_scope_identity` | 参考产品 | 未识别一个覆盖产品族路线或包含明确排除产品的数据集应判不合格。 | `un-cpc-3-0-structure-2025` |
| `validation_reference_mass` | 参考流 | 确认 1 kg 合格净产品质量，并依据所保留批次证据核验长度、面积或件数至质量的换算。 |  |
| `validation_inventory_accounting` | 所选路线 | 每个适用原子行必须有数值、有记录的零值或有理由的不适用，并核对产出、拒收品和库存变化。 |  |
| `validation_uuid_and_unit` | 含 UUID 的行 | 确认 UUID、公开状态、中英文 baseName、流类型、属性、单位组和单位；未解决行不得填入代理 UUID。 |  |
| `validation_recursive_input` | 光纤成束或成缆 | 确认覆盖范围内光纤投入仅链接一次上游数据集，且未被递归重建或遗漏。 | `foa-fiber-optic-cables` |
| `validation_source_use` | 定量解释 | 所列来源仅作为标识和过程分解证据；不得据其推导数值默认值或范围。 | `foa-optical-fiber-manufacturing`, `foa-fiber-optic-cables`, `yan-et-al-2026-pva-dye-films`, `anderson-burge-optical-fabrication` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品系统数据集 |
| downstream_use | `secondary_dataset`；路线、地理、技术和产品限定信息匹配时可作 `background_dataset` |
| allowed_use | 准确声明的光学产品及制造路线的摇篮到出厂建模；匹配产品系统内的贡献分析 |
| excluded_use | 跨不匹配产品族或光学性能的比较；使用阶段服务声明；由单独包覆光纤组成的光缆；未经加工玻璃；排除的摄影或投影光学件；用代理替代未解决 UUID |
| required_metadata | PCR id 与版本；准确产品标识；所选路线；功能和光学规范；组成和构造；涂层、层压与装配状态；工厂和地理；技术；参考期；净质量换算；边界；分配；上游代理；数据质量 |
| required_quality_disclosure | 覆盖与核对；电表与秤质量；取样与换算；验收收率；分配；缺失数据；未解决流 UUID 和范围证据需求；不确定性 |
| update_trigger | 产品构造、前体、涂层或层压化学品、光学规范、路线技术、场址、电力供应、分配、验收收率发生实质变化，或数据超过报告计划允许时限 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC Version 3.0 Structure，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | 作为映射和边界证据的准确分类文字、纳入和排除项 |
| `foa-optical-fiber-manufacturing` | extension_guidance | The Fiber Optic Association, Manufacturing optical fiber. https://www.thefoa.org/tech/fibr-mfg.htm（检索日期 2026-09-07） | 光纤预制棒、拉丝、涂覆、紫外固化、检验和转入成缆的过程分解 |
| `foa-fiber-optic-cables` | extension_guidance | The Fiber Optic Association, Fiber Optic Cables. https://www.thefoa.org/tech/ref/basic/cable.html（检索日期 2026-09-07） | 光缆缓冲、增强、集合和护套加工的过程范围 |
| `yan-et-al-2026-pva-dye-films` | literature | Yan et al., Next-Generation PVA–Dye Complex Film with Advanced Properties for Optical Applications, Polymers 18(7), 876. https://doi.org/10.3390/polym18070876 | 偏振片层结构及溶胀、染色、交联、拉伸、涂覆和层压过程分解 |
| `anderson-burge-optical-fabrication` | handbook | David Anderson and Jim Burge, Optical Fabrication, The Handbook of Optical Engineering. https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Anderson-and-Burge.doc（检索日期 2026-09-07） | 光学元件毛坯成形、铣磨、研磨、抛光、磨边、清洗、胶合和镀膜准备 |
