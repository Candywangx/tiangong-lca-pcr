---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.curtains-including-drapes-and-interior-blinds-curtain-or-bed-valances
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 窗帘（包括帷幔）和室内织物百叶帘；窗帘或床幔

## 1. 范围与适用性

本 PCR 适用于成品织物窗帘、帷幔、室内织物百叶帘、窗帘幔饰和床幔的工厂门前景数据包。代表性路线将采购的已整理机织聚酯窗帘面料，经裁剪、缝制与组装、条件性厂内湿整理、检验和包装，制成窗帘成品。

本 PCR 覆盖库存产品和定制产品。不覆盖非织物百叶帘、卷帘门、遮篷、窗帘杆或轨道、按长度销售的独立织物面料，也不将上游纤维、纱线及织物生产纳入前景边界；安装、使用阶段清洗和报废阶段亦不在范围内。每项采购产品投入的上游生产仍须通过合格数据集连接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.curtains-including-drapes-and-interior-blinds-curtain-or-bed-valances |
| classification_refs | CPC 3.0: 27130, exact |
| covered_products | 制成的织物窗帘和帷幔；室内织物百叶帘；窗帘幔饰；床幔 |
| excluded_products | 非织物百叶帘和卷帘门；遮篷；单独销售的窗帘五金；按长度销售的面料；安装、使用和报废服务 |
| representative_product | 由采购的已整理面料制成、完成包装的机织聚酯窗帘帘片 |
| production_route | 采购的已整理面料接收 → 版型裁剪 → 缝制与组装 → 条件性厂内湿整理 → 检验与包装 |
| market_state | 已制成并包装、位于工厂门的成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供制成的织物窗帘、帷幔、室内织物百叶帘、窗帘幔饰或床幔 |
| How much | 1 kg 净成品，不含运输包装 |
| How well | 满足已声明的织物成分、尺寸、结构、遮光功能、整理和配件配置等产品规格 |
| How long or cycle | 一个已完成的工厂门生产批次；使用寿命不属于本从摇篮到工厂门参考 |
| reference_flow_link | 最终检验放行的合格成品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Curtains (including drapes) and interior blinds, curtain or bed valances `e25f1284-93c9-4898-960e-3a91f026451b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类型；按质量计的纤维组成；织物结构；成品宽度和垂度；面密度；衬里或涂层状态；不透明度或透光等级；阻燃处理状态；帘头类型；孔眼或五金材料；定制或库存制造；生产地理区域；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终检验后、运输包装前确定产品净质量；将全部清单结果归一化至 1 kg 合格成品。 |
| `packaging_mass_separate` | PE-LD 薄膜和瓦楞纸箱 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 单独记录每个包装组件，并从参考产品质量中排除其质量。 |
| `textile_mass_condition` | 面料、缝纫线、帘头带、帘片、产品和纺织废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用材料跨越过程边界时状态下的质量，并披露是否进行了状态调节或水分校正。 |
| `electricity_metering` | 交流电投入 | Energy | kWh | 根据过程分表或有文件记录的电表分配记录用户侧电力，并保留已声明的电网地理区域和电压等级。 |
| `water_mass` | 工艺用水和纺织整理废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准仪表或经核实的质量换算记录进水和出水；不得将水与化学品或蒸汽合并。 |

## 5. 系统边界

前景边界始于采购的已整理窗帘面料、单独采购的辅料和包装材料进入制造场址之时。边界包括场址直接控制的裁剪、缝制、配件安装、条件性湿整理、检验、返工处理、包装、公用工程、废水和固体废物，直至包装后的成品在工厂门放行。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的已整理织物面料、缝纫线、帘头带、可选孔眼和包装组件已送达窗帘制造场址 |
| starting_condition_role | 制成纺织产品制造的前景入口 |
| product_classification_scope | 仅限 CPC 3.0 子类 27130 的织物产品 |
| recursive_input_rule | 作为投入采购的窗帘、帷幔、织物百叶帘或幔饰仍作为可见的同类别产品投入，并连接上游数据集；不得在本前景数据包内递归展开。 |
| upstream_dataset_requirement | 每项采购的面料、辅料、化学品、公用工程和包装投入均需要在地理、技术和时间上具有代表性的上游数据集。 |
| disclosure | 声明织物形成、染色、印花、涂层、阻燃处理、水洗、热定形或层压是在上游还是报告场址内发生，并识别每项排除活动。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_purchased_material_gate` | 所有前景数据包 | 前景系统从采购的已整理面料及其他采购投入的接收开始；通过链接数据集保留上游生产。 | `us-census-naics-2022-314120`; `ilo-garment-supply-chain-2021` |
| `boundary_direct_operations` | 场址控制的制造 | 纳入裁剪、缝制、组装、检验、包装、直接控制的公用工程、产品不合格品、纺织边角料和声明路线产生的其他废物。 | `iso-14044-2006`; `iso-tr-14049-2012` |
| `boundary_wet_finishing` | 实施湿法或热法织物处理的场址 | 将每项实际使用的水、化学品、电力、蒸汽、废水、废物和相关直接排放作为单独原子行纳入；当整理完全在上游发生时，不适用此条件过程。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_no_silent_cutoff` | 材料和能源投入 | 不得仅因交换量小而省略；任何排除均需要实测证据、明确理由，并披露其对质量和能源完整性的影响。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | 面料接收、铺布与裁剪 | required | 代表性采购面料路线始终纳入 | 前景材料准备 | kg 裁剪织物帘片 |
| `sewing_assembly` | 缝制与窗帘组装 | required | 代表性路线始终纳入 | 前景产品组装 | kg 已组装窗帘 |
| `wet_finishing` | 厂内湿法或热法整理 | conditional | 仅当报告场址实施水洗、漂白、化学整理、干燥、热定形或相关湿法/热法处理时纳入 | 前景织物整理 | kg 离开该过程的已整理窗帘 |
| `inspection_packaging` | 最终检验与包装 | required | 工厂门放行前始终纳入 | 前景质量放行与包装 | kg 合格成品参考产品 |

### 过程：面料接收、铺布与裁剪（`material_cutting`）

#### 输入

##### 产品流

###### 采购的已整理机织聚酯窗帘面料（`purchased_polyester_curtain_fabric`）

采购的已整理机织聚酯窗帘面料跨越场址边界，构成代表性窗帘路线的织物主体。投入质量来自批次特定的接收与裁剪记录。

- 选定流：Finished woven polyester curtain fabric
- 流属性/单位：Mass / kg
- 数量规则：记录声明生产批次发往裁剪的实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`us-census-naics-2022-314120`; `ilo-garment-supply-chain-2021`

###### 裁剪用用户侧低压电力（`cutting_electricity`）

低压交流电为铺布、裁剪、局部抽风及直接相关裁剪设备供电。过程用量由分表或有文件记录的过程电表读取。

- 选定流：Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Energy / kWh
- 数量规则：记录报告批次归属于材料裁剪的计量电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 裁剪后的聚酯窗帘帘片（`cut_polyester_panels`）

裁剪后的聚酯窗帘帘片是从裁剪转入缝制的实测中间产品。其质量在缝制和配件安装前记录。

- 选定流：Cut woven polyester curtain panels
- 流属性/单位：Mass / kg
- 数量规则：记录转入缝制的合格裁剪帘片实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 裁剪帘片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`ilo-garment-supply-chain-2021`

##### 废物流

###### 纺织裁剪与修边废料（`textile_cutting_scrap`）

纺织固体废物由版型裁剪期间产生的边角料和修边废料组成。其出厂质量与作为库存保留的可复用余料分开记录。

- 选定流：Textile solid waste, cutting and trimming waste `0d502310-2451-4b49-a5a6-bbb097226878`
- 流属性/单位：Mass / kg
- 数量规则：按声明去向记录离开裁剪过程的边角料和修边废料实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：`ilo-garment-supply-chain-2021`

##### 基本流

### 过程：缝制与窗帘组装（`sewing_assembly`）

#### 输入

##### 产品流

###### 进入缝制的裁剪聚酯窗帘帘片（`cut_panels_for_sewing`）

裁剪后的机织聚酯帘片作为 `material_cutting` 的内部产品输出进入缝制。扣除有文件记录的暂扣或退回后，该数量必须等于验收的过程间转移记录。

- 选定流：Cut woven polyester curtain panels
- 流属性/单位：Mass / kg
- 数量规则：记录缝制过程从材料裁剪接收的实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已组装窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`ilo-garment-supply-chain-2021`

###### 聚酯缝纫线（`polyester_sewing_thread`）

聚酯缝纫线作为形成接缝和折边的特定纱线跨越组装边界。其发料质量来自批次特定的库存或线轴记录。

- 选定流：Polyester sewing thread
- 流属性/单位：Mass / kg
- 数量规则：记录报告批次领用和消耗的聚酯缝纫线质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`ilo-garment-supply-chain-2021`

###### 聚酯窗帘帘头带（`polyester_heading_tape`）

当声明的帘头结构使用帘头带时，将聚酯窗帘帘头带缝在窗帘顶部。仅对此结构记录实测发料质量。

- 选定流：Woven polyester curtain heading tape
- 流属性/单位：Mass / kg
- 数量规则：当声明设计含帘头带时，记录报告批次领用的帘头带实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`ilo-garment-supply-chain-2021`

###### 镀锌钢窗帘孔眼（`galvanized_steel_eyelets`）

当声明的窗帘使用孔眼式帘头时，镀锌钢孔眼跨越组装边界。其批次特定质量由合格孔眼计数和经核实的单位质量计算。

- 选定流：Galvanized-steel curtain eyelets
- 流属性/单位：Mass / kg
- 数量规则：记录报告批次安装孔眼的实测总质量，或计数乘以经核实的平均单位质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`ilo-garment-supply-chain-2021`

###### 缝制用用户侧低压电力（`sewing_electricity`）

低压交流电为缝纫机、熨烫设备及直接相关组装设备供电。该过程用量与裁剪和包装电力分开记录。

- 选定流：Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Energy / kWh
- 数量规则：记录报告批次归属于缝制与组装的计量电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已组装聚酯窗帘（`assembled_polyester_curtain`）

已组装聚酯窗帘是缝制、折边和声明配件安装后的合格中间输出。在条件性湿整理或最终包装前记录其实测质量。

- 选定流：Assembled woven polyester curtain
- 流属性/单位：Mass / kg
- 数量规则：记录从组装转入整理或最终检验的实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已组装窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`ilo-garment-supply-chain-2021`

##### 废物流

##### 基本流

### 过程：厂内湿法或热法整理（`wet_finishing`）

#### 输入

##### 产品流

###### 窗帘整理工艺用水（`process_water`）

仅当报告场址对已组装织物产品实施水洗、漂白、漂洗或化学整理时，工艺用水才进入系统。应与生活用水和冷却水分开计量。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：记录适用整理批次的计量工艺用水投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已整理窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 织物处理用氢氧化钠（`sodium_hydroxide`）

当氢氧化钠用于煮练、pH 调节或其他已声明整理配方时，将其记录为单项化学交换。不得与其他碱或工艺化学品合并。

- 选定流：Sodium hydroxide, 100% active-substance equivalent
- 流属性/单位：Mass / kg
- 数量规则：记录交付制剂质量和活性浓度，然后报告计算所得的活性物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已整理窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_issue_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 织物漂白用过氧化氢（`hydrogen_peroxide`）

仅当声明的窗帘漂白或整理配方使用过氧化氢时，将其记录为单项化学交换。数量按活性物质当量报告。

- 选定流：Hydrogen peroxide, 100% active-substance equivalent
- 流属性/单位：Mass / kg
- 数量规则：记录交付制剂质量和活性浓度，然后报告计算所得的活性物质当量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已整理窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_issue_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 湿法或热法整理由饱和蒸汽（`saturated_steam`）

当采购的饱和蒸汽供给水洗、干燥、熨烫或热定形设备时，其跨越整理边界。随前景记录声明供应商压力和凝结水处理方式。

- 选定流：Saturated steam at declared supplier pressure
- 流属性/单位：Mass / kg
- 数量规则：记录供给适用整理批次的采购饱和蒸汽计量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已整理窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### 整理用用户侧低压电力（`finishing_electricity`）

低压交流电为泵、水洗机、干燥机、拉幅机、控制装置及直接相关整理设备供电。该项应与蒸汽及其他热投入分开记录。

- 选定流：Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于适用湿法或热法整理批次的计量电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已整理窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开厂内整理的已整理聚酯窗帘（`finished_polyester_curtain`）

已整理聚酯窗帘是声明的湿法或热法整理操作后的合格中间输出。在过程状态调节后、包装前记录其实测质量。

- 选定流：Wet- or thermal-finished woven polyester curtain
- 流属性/单位：Mass / kg
- 数量规则：记录从整理转入最终检验的实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已整理窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### 废物流

###### 纺织整理废水（`textile_finishing_wastewater`）

纺织整理废水是离开水洗、漂白、漂洗或化学整理过程的单独计量水性废物流。单独管理的高负荷物流必须在前景数据包中作为额外原子废物流行保留。

- 选定流：Wastewater from wet finishing of polyester curtains
- 流属性/单位：Mass / kg
- 数量规则：记录适用整理批次排放或转移的废水实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已整理窗帘输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### 基本流

### 过程：最终检验与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 进入最终检验的窗帘（`curtain_for_packaging`）

进入最终检验的窗帘是内部组装输出，或在适用时为厂内整理输出。其验收转移质量构成最终过程投入。

- 选定流：Assembled woven polyester curtain
- 流属性/单位：Mass / kg
- 数量规则：记录进入最终检验的窗帘实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格窗帘成品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`ilo-garment-supply-chain-2021`

###### 检验与包装用用户侧低压电力（`inspection_electricity`）

低压交流电为检验台、折叠、封口、贴标及直接相关包装设备供电。该项与先前过程的电力独立记录。

- 选定流：Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Energy / kWh
- 数量规则：记录报告批次归属于最终检验与包装的计量电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_electricity_records`
- 来源：`eu-textiles-bat-2022-2508`

###### PE-LD 包装薄膜（`pe_ld_packaging_film`）

当低密度聚乙烯薄膜用于包裹或装袋合格窗帘时，其跨越包装边界。该实测质量与纸板包装分开记录。

- 选定流：Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：记录报告批次消耗的 PE-LD 薄膜实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：

###### 瓦楞纸板运输箱（`corrugated_board_box`）

当瓦楞纸板箱用作合格窗帘的运输容器时，其跨越包装边界。该实测质量与 PE-LD 薄膜及其他包装组件分开记录。

- 选定流：corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：记录报告批次消耗的瓦楞纸箱实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格窗帘成品（`final_curtain_product`）

合格窗帘成品在检验后放行，是完整前景清单的归一化产品流。其净质量不含 PE-LD 薄膜和瓦楞纸箱。

- 选定流：Curtains (including drapes) and interior blinds, curtain or bed valances `e25f1284-93c9-4898-960e-3a91f026451b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录在工厂门放行的合格成品净实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_records`
- 来源：`unsd-cpc-3-2025`

##### 废物流

###### 不合格窗帘成品（`rejected_finished_curtain`）

未通过最终检验的窗帘在离开生产、进入处置或外部回收时作为单独废物流记录。保留用于有文件记录返工的产品仍为内部流，只有离开前景系统时才计为废物。

- 选定流：Rejected finished woven polyester curtain
- 流属性/单位：Mass / kg
- 数量规则：按去向记录从最终检验送往处置或外部回收的实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 不同产品、路线、批次、整理线和包装配置 | 在应用分配前，使用过程细分和产品特定记录。 | `iso-14044-2006`; `iso-tr-14049-2012` |
| `allocation_rework_internal` | 场址内保留的返工 | 将返工循环保留在内部；仅计算额外实测材料和公用工程，不产生共产品抵扣。 | `iso-14044-2006` |
| `allocation_recovered_scrap` | 转移用于回收或再生的纺织边角料 | 记录出厂废物质量和去向，不在前景数据包内计入避免负担抵扣；任何下游替代均属于声明的下游模型。 | `iso-14044-2006` |
| `allocation_shared_utilities` | 服务多个产品的共享电表或设备 | 优先使用分表；否则采用基于实测运行时间、产量或其他因果驱动量的有文件物理分配，并披露方法与敏感性。 | `iso-14044-2006`; `eu-textiles-bat-2022-2508` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `material_cutting`; `sewing_assembly`; `inspection_packaging` | 面料、帘片、缝纫线、帘头带、孔眼和包装组件 | 接收、发料、退料、库存和经核实的单位质量记录 | material identity; composition; lot; gross issue; return; count; verified unit mass; net consumed mass | 校准秤与受控库存记录；孔眼质量可使用计数和经核实的平均单位质量 | kg | 每生产批次 | 完整报告期 | 所有纳入的制造线 | 按行和批次汇总净消耗质量；将发料减退料与实物库存移动核对 | 校准记录；批次追溯；库存核对；单位质量试验记录 |
| `cp_process_electricity_records` | `material_cutting`; `sewing_assembly`; `wet_finishing`; `inspection_packaging` | 低压电力 | 过程分表记录 | meter id; opening reading; closing reading; kWh; process id; lot; operating interval; allocation driver if shared | 校准分表；仅在没有专用分表时采用有文件的物理分配 | kWh | 每批次或电表区间 | 完整报告期 | 所有纳入过程 | 计算经验证读数差并分配至过程和批次；过程间不得重复计算 | 电表校准；抄表日志；分配工作表；电费账单核对 |
| `cp_water_records` | `wet_finishing` | 工艺用水和纺织整理废水 | 进水与出水仪表记录 | meter id; opening reading; closing reading; volume or mass; density conversion if used; lot; discharge route | 校准水表和废水表；需要时记录质量换算 | kg | 每整理批次或仪表区间 | 完整报告期 | 所有纳入的湿整理线和排放点 | 按批次分别汇总进水和出水；保留水平衡核对 | 仪表校准；水平衡检查；排放日志；相关实验室记录 |
| `cp_chemical_issue_records` | `wet_finishing` | 氢氧化钠和过氧化氢 | 批次配方、发料和浓度记录 | chemical identity; CAS or specification; supplier; formulation mass; active concentration; returned mass; lot | 将受控配方和库存发料记录与供应商规格或安全数据表核对 | kg active substance | 每整理批次 | 完整报告期 | 每条纳入的整理配方和生产线 | 制剂质量 × 经核实的活性质量分数，再减有文件的退料 | 供应商规格；安全数据表；批次单；库存核对 |
| `cp_steam_records` | `wet_finishing` | 采购饱和蒸汽 | 蒸汽仪表记录 | meter id; opening reading; closing reading; steam mass; pressure; condensate return; lot | 校准蒸汽表和供应商记录 | kg | 每整理批次或仪表区间 | 完整报告期 | 所有纳入的蒸汽用户 | 将经验证的读数差分配至适用整理批次 | 仪表校准；供应商发票；压力日志；凝结水记录 |
| `cp_waste_mass_records` | `material_cutting`; `inspection_packaging` | 纺织裁剪废料和不合格窗帘成品 | 废物秤和转移记录 | waste identity; source process; lot; gross mass; tare; net mass; destination; rework status | 在产生或发运时使用校准秤，并与转移文件核对 | kg | 每次废物转移 | 完整报告期 | 所有纳入的废物产生点 | 按行、批次和去向汇总净废物质量；排除作为库存或内部返工保留的材料 | 秤具校准；转移单；去向接收凭证；返工日志 |
| `cp_production_output_records` | `sewing_assembly`; `wet_finishing`; `inspection_packaging` | 中间产品和合格成品输出 | 生产与检验记录 | product id; lot; subtype; qualifiers; gross mass; packaging mass; net product mass; accepted quantity; rejected quantity | 与生产和最终检验放行记录关联的校准秤 | kg | 每生产批次 | 完整报告期 | 所有纳入的产品线 | 汇总合格产品净质量；包装与不合格产品分开记录 | 秤具校准；检验放行；产品规格；批次谱系 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_consumption` | 每项发料的材料投入 | 净消耗质量 = 发料质量 − 有文件记录的库存退料 | issued mass; returned mass | net material input mass | `iso-tr-14049-2012` |
| `calc_active_chemical_mass` | 氢氧化钠和过氧化氢制剂 | 活性物质当量质量 = 净制剂质量 × 经核实的活性质量分数 | formulation issue; formulation return; active mass fraction | kg active substance | `eu-textiles-bat-2022-2508` |
| `calc_reference_normalization` | 所有清单交换 | 归一化交换 = 报告期交换量 ÷ 合格成品净质量 | exchange amount; accepted net finished-product mass | exchange amount per 1 kg reference product | `iso-14044-2006`; `iso-tr-14049-2012` |
| `calc_textile_mass_balance` | 从裁剪到最终检验 | 将采购的织物和辅料投入与合格产品、实测中间库存变化、纺织废物、不合格产品和保留返工进行核对；调查并披露残差。 | material inputs; product outputs; waste outputs; stock change; retained rework | mass-balance reconciliation | `iso-14044-2006`; `eu-textiles-bat-2022-2508` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每个流行 | 每行保留一个化学或物理上具体的交换；采用 UUID 时保留精确身份依据，并披露任何没有已确认 UUID 的行。 | 流身份登记和直读核验记录 |
| `dq_product_specification` | 参考产品 | 记录全部必需限定信息，并链接至批次特定产品规格。 | 批准的规格、物料清单和检验放行 |
| `dq_temporal_coverage` | 前景活动数据 | 覆盖具有代表性的连续报告期，并识别停机、试运行、异常运行和缺失区间。 | 带日期的仪表、生产、库存和废物记录 |
| `dq_meter_quality` | 质量、电力、水和蒸汽记录 | 使用校准设备，并保留校准有效期、读数分辨率、换算方法和共享仪表处理方式。 | 校准证书和仪表日志 |
| `dq_completeness` | 过程清单 | 将材料、水和能源投入与产品、废物、废水、相关排放和库存变化核对；解释每项材料残差和排除交换。 | 质量平衡、水平衡、能源核对和排除日志 |
| `dq_representativeness` | 上游数据集 | 使地理、技术、材料组成、再生含量、电压、压力和时间段与声明的前景投入匹配。 | 数据集选择记录和供应商规格 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求已接受的 state100 CPC 27130 产品流 UUID、Mass 属性 UUID、1 kg 参考数量和全部必需产品限定信息；缺失的单位组 UUID 保持为已声明审查项。 | `unsd-cpc-3-2025` |
| `validate_atomic_inventory` | 每张过程清单卡 | 每张卡必须恰好包含一个选定产品、废物或基本交换；拒绝集合标签、合并公用工程、材料选择器和 pending 占位符。 | `eu-textiles-bat-2022-2508` |
| `validate_bilingual_alignment` | 英文和中文 PCR 文件 | 两种语言版本必须具有完全一致的有序 process_id、row_id、受控 token、source id 和 UUID 序列。 | `iso-14044-2006` |
| `validate_process_coverage` | 前景路线 | 要求所有 required 过程；仅当报告场址实施声明的湿法或热法处理时要求 wet_finishing。 | `us-census-naics-2022-314120`; `jrc-textiles-bref-2023` |
| `validate_foreground_amounts` | 每项清单交换 | 要求链接采集协议和报告期前景记录；不得接受 AI 生成的默认值或范围。 | `iso-tr-14049-2012` |
| `validate_mass_balance` | 织物材料和产品输出 | 要求对织物与辅料投入、合格产品、库存变化、废物、不合格品和保留返工进行有文件记录的核对。 | `iso-14044-2006`; `eu-textiles-bat-2022-2508` |
| `validate_wet_finishing_records` | 条件性 wet_finishing 过程 | 适用时，要求分别记录每种实际化学品、工艺用水、电力、蒸汽或热、废水流、废物流和相关直接排放。 | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `validate_packaging_separation` | 检验与包装 | 要求 PE-LD 薄膜和瓦楞纸箱作为独立投入，并从 1 kg 参考产品中排除其质量。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制成织物窗帘、帷幔、织物百叶帘、窗帘幔饰或床幔制造的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 当产品限定信息、路线、地理和报告期匹配时，用于从摇篮到工厂门 LCI、产品足迹和生命周期模型构建 |
| excluded_use | 单独代表上游纤维、纱线或织物生产；使用阶段寿命或清洗；安装；报废；非织物百叶帘或卷帘门 |
| required_metadata | PCR id 和版本；产品子类型；必需限定信息；工厂地理；报告期；纳入过程；湿整理状态；分配方法；上游数据集引用；UUID 审查状态 |
| required_quality_disclosure | 仪表覆盖和校准；质量、水平衡和能源核对；缺失记录；共享仪表分配；废物去向；上游代表性；排除项；没有已确认 UUID 的行 |
| update_trigger | 产品结构或组成、整理配方、配件或包装配置、生产技术、场址能源或水系统、废物去向、上游数据集或任何已采用 Tiangong 身份发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 27130, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-13） | 产品类别范围和官方标题 |
| `us-census-naics-2022-314120` | 官方指南（`official_guidance`） | U.S. Census Bureau, 2022 NAICS 314120 Curtain and Linen Mills, https://www.census.gov/naics/?details=31&input=31&year=2022（检索于 2026-08-13） | 采购材料制造入口和窗帘/布草工厂范围 |
| `ilo-garment-supply-chain-2021` | 官方指南（`official_guidance`） | International Labour Organization, Occupational safety and health improvement in the garment industry: Drivers and constraints, https://vzf.ilo.org/wp-content/uploads/2021/09/OSH_improvement-Garment-_04Web.pdf（检索于 2026-08-13） | 裁剪缝制过程分解、面料和辅料投入 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（检索于 2026-08-13） | 条件性湿法/热法整理边界和纺织过程分解 |
| `eu-textiles-bat-2022-2508` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI: http://data.europa.eu/eli/dec_impl/2022/2508/oj（检索于 2026-08-13） | 投入产出清单、水、能源、化学品、废水、废物和整理过程记录要求 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html（ISO 于 2022 年确认仍为现行版本；检索于 2026-08-13） | LCI 系统边界、分配、报告和数据质量框架 |
| `iso-tr-14049-2012` | 标准（`standard`） | ISO/TR 14049:2012, Environmental management — Life cycle assessment — Illustrative examples on how to apply ISO 14044 to goal and scope definition and inventory analysis, https://www.iso.org/standard/57110.html（检索于 2026-08-13） | 前景清单构建、计算和归一化规则 |
