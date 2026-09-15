---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.binoculars-monoculars-and-other-optical-telescopes-other-astronomical-instruments-excep-73ac0c3f
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 双筒、单筒及其他光学望远镜；其他天文学仪器，射电天文用仪器除外；复式光学显微镜

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 48314 所含光学仪器的工厂大门前景生产，包括双筒望远镜、单筒望远镜、其他光学望远镜、非射电天文学仪器及复式光学显微镜。核算对象必须是已声明的型号和配置。不包括射电天文仪器、简单放大镜、电子显微镜或扫描探针显微镜、单独销售的相机和探测器，也不包括使用、维护、分销和生命末期。光学元件制造、光机组件制造和电子组件集成仅在报告前景内实施时纳入；外购组件应改为跨越边界的、单独识别的产品投入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.binoculars-monoculars-and-other-optical-telescopes-other-astronomical-instruments-excep-73ac0c3f |
| classification_refs | CPC 3.0: 48314 |
| covered_products | 双筒望远镜；单筒望远镜；光学望远镜；非射电天文学仪器；复式光学显微镜 |
| excluded_products | 射电天文仪器；电子显微镜和扫描探针显微镜；简单放大镜；单独销售的相机或探测器 |
| representative_product | 工厂大门处一个已声明型号和配置的可销售光学仪器 |
| production_route | 视适用情况在厂内制造光学元件、光机组件并集成电子组件，随后必须完成仪器装配、校准、测试和最终包装 |
| market_state | 按已声明运输配置完成、通过质量放行并到达工厂大门的仪器 |

现行 CPC 官方结构确定分类边界（`un-cpc-3-0-structure-2025`）。制造资料证明研磨、抛光、定心、清洗、镀膜、光机加工、装配、校准和测试可能构成生产路线，但不证明所有路线均必须纳入，也不提供数值默认值（`koehler-et-al-2021-optics-manufacturing`；`tochigi-nikon-lens-manufacturing`；`tamron-lens-manufacturing`）。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已声明产品系列和型号配置内通过质量放行的一台仪器 |
| How much | 1 kg 成品仪器净质量 |
| How well | 满足制造商声明的光学、机械、电气和验收测试规范 |
| How long or cycle | 工厂大门状态；不主张使用寿命等效性 |
| reference_flow_link | `r24_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 双筒、单筒及其他光学望远镜，其他天文学仪器，射电天文用仪器除外，复式光学显微镜 `d2f8e7e0-b94f-4ea8-a75d-19f3ef90a8c7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器系列；型号和配置；光学设计；放大倍数及口径或数值孔径；光学材料和镀膜；供电或数字功能；随附附件；仪器净质量；运输包装状态；生产地域；技术；报告期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。仪器净质量不包括可拆卸运输包装；纳入的每个包装组件均须单独记录。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `r24_reference_product` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在质量放行后、加入可拆卸运输包装前计量净质量，并将全部交换归一化为恰好 1 kg。 |
| `material_mass` | 材料、组件、胶粘剂、包装和废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的质量记录；将供应商单位换算为 kg，并在重要时记录含水率、浓度和毛重转净重修正。 |
| `electricity_energy` | 电力流 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按 1 kWh = 3.6 MJ 将计量电力换算为 MJ；不得与燃料、热力或压缩空气合并。 |
| `water_mass` | `r03_process_water` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接计量质量；如按体积计量，须记录温度、密度、参考条件和换算。 |
| `internal_transfer_balance` | 内部中间产品输入/输出对 | Mass | kg | 内部转移两端使用同一前景流标识和相同归一化数量；外购替代品必须作为单独识别的投入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的材料、毛坯、组件、总成、电力、水、胶粘剂和包装在报告场址接收时的状态 |
| starting_condition_role | 前景起点；上游生产与交付由所链接的背景数据集表示 |
| product_classification_scope | CPC 3.0 代码 48314 语义边界内的成品仪器 |
| recursive_input_rule | 属于同一广义产品类别的外购仪器或总成仍作为具名外购产品投入记录，不得在同一前景模型内递归调用本 PCR |
| upstream_dataset_requirement | 每项外购投入和公用工程均须链接地域、技术和时间具有代表性的背景数据集，且不得重复其上游清单 |
| disclosure | 声明哪些条件性过程在厂内实施、哪些分总成为外购，以及设施共享、镀膜路线、电子功能、包装配置、截断和排除工序 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 全部过程 | 纳入从接收起始投入到质量放行和最终包装的全部现场工序；排除使用、分销、维护和生命末期。 | `un-cpc-3-0-structure-2025`; `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing` |
| `boundary_conditional_routes` | `optical_element_fabrication`; `optomechanical_component_fabrication`; `electronics_integration` | 条件性过程仅在报告前景内实施时纳入；否则，在首个消费过程将每个外购替代总成作为独立投入记录。 | `koehler-et-al-2021-optics-manufacturing`; `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing` |
| `boundary_background_separation` | 外购投入和公用工程 | 不得重复已由所链接背景数据集表示的开采、材料生产、发电或供应商工序。 | `eu-pef-2021-method` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `optical_element_fabrication` | 光学元件制造 | conditional | 在厂内实施，而非由外购成品光学元件表示 | 通过研磨、抛光、清洗及相关精加工生产成品光学元件 | 1 kg 净参考产品 |
| `optomechanical_component_fabrication` | 光机组件制造 | conditional | 在厂内加工金属外壳、镜筒、载物台或支架 | 生产型号特定的光机组件 | 1 kg 净参考产品 |
| `electronics_integration` | 电子组件集成 | conditional | 已声明型号具有在厂内装配的供电或数字功能 | 生产已配置的电子组件总成 | 1 kg 净参考产品 |
| `instrument_assembly_alignment_testing` | 仪器装配、校准和测试 | required | 始终 | 集成适用的光学、机械和电子组件，并放行未装箱仪器 | 1 kg 净参考产品 |
| `final_packaging` | 最终包装 | required | 始终；仅在证明确实不存在某包装组件时才允许其数量为零 | 加入已声明运输包装并产出参考产品 | 1 kg 净参考产品 |

### 过程：光学元件制造（`optical_element_fabrication`）

#### 输入

##### 产品流

###### 光学玻璃毛坯（`r01_optical_glass_blank`）

记录进入厂内光学元件制造的光学玻璃毛坯净质量。

- 选定流：光学玻璃毛坯 `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量减去报告期可归属的退料和未使用结转量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_fabrication`
- 来源：`koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

###### 光学元件制造用电（`r02_optics_electricity`）

仅记录本过程边界内厂内研磨、抛光、清洗、镀膜及辅助设备消耗的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或依据 `allocation_shared_resources` 分配的设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_fabrication`
- 来源：`eu-pef-2021-method`; `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing`

###### 光学元件制造用工艺水（`r03_process_water`）

记录进入厂内研磨、抛光和清洗的工艺水；闭路循环冷却水仅记录净补水量，不记录循环通量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的工艺水净投入，不含循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_fabrication`
- 来源：`koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

###### 氧化铈抛光材料（`r04_cerium_oxide`）

当已声明路线使用氧化铈时，记录其作为抛光材料的消耗量。

- 选定流：氧化铈 `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- 流属性/单位：Mass / kg
- 数量规则：领料量或期初库存加领入量减期末库存，并扣除退回的未使用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_fabrication`
- 来源：`tamron-lens-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品光学元件（`r05_finished_optical_element`）

为转入装配的成品光学元件创建型号和路线特定的前景中间流；不得以 CPC 参考产品流替代。

- 选定流：成品光学元件
- 流属性/单位：Mass / kg
- 数量规则：转入仪器装配的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_fabrication`
- 来源：`tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing`

##### 废物流

###### 废抛光介质（`r06_waste_polishing_media`）

记录离开过程并送处理或回收的废抛光介质；排除随单独计量废水带出的材料。

- 选定流：废抛光介质 `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- 流属性/单位：Mass / kg
- 数量规则：实测外运废物质量，扣除容器皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_fabrication`
- 来源：`koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

###### 光学加工废水（`r07_optical_process_wastewater`）

仅当研磨、抛光和清洗产生的混合水性废物流跨越前景边界接受厂内或厂外处理时记录。

- 选定流：光学加工废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或以有据可查的密度将实测体积换算为质量，并扣除单独记录的回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_element_fabrication`
- 来源：`koehler-et-al-2021-optics-manufacturing`; `tamron-lens-manufacturing`

##### 基本流

### 过程：光机组件制造（`optomechanical_component_fabrication`）

#### 输入

##### 产品流

###### 铝合金坯料（`r08_aluminium_alloy`）

记录进入厂内外壳、镜筒、载物台或支架加工的铝合金坯料。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：实测发料质量减去退回库存的可重复使用余料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optomechanical_component_fabrication`
- 来源：`tochigi-nikon-lens-manufacturing`

###### 光机组件制造用电（`r09_machining_electricity`）

记录厂内机械加工及其配套过程设备消耗的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或依据 `allocation_shared_resources` 分配的设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optomechanical_component_fabrication`
- 来源：`eu-pef-2021-method`; `tochigi-nikon-lens-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 光机组件（`r10_optomechanical_component`）

为转入装配的合格机加工外壳、镜筒、载物台或支架创建型号特定的前景中间流。

- 选定流：光机组件
- 流属性/单位：Mass / kg
- 数量规则：转入仪器装配的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optomechanical_component_fabrication`
- 来源：`tochigi-nikon-lens-manufacturing`

##### 废物流

###### 铝废料（`r11_aluminium_scrap`）

记录离开前景并送再循环或废物处理的铝废料，扣除内部再循环量。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：实测外运废料质量，扣除皮重以及内部再用切屑或余料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optomechanical_component_fabrication`
- 来源：`tochigi-nikon-lens-manufacturing`

##### 基本流

### 过程：电子组件集成（`electronics_integration`）

#### 输入

##### 产品流

###### 已装配仪器控制印制电路板总成（`r12_populated_pcb_assembly`）

仅对在厂内集成的供电或数字型号记录外购已装配印制电路板总成。

- 选定流：已装配仪器控制印制电路板总成
- 流属性/单位：Mass / kg
- 数量规则：发放至报告型号的实测合格质量，扣除退回的不合格总成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_integration`
- 来源：

###### 电子组件集成用电（`r13_electronics_electricity`）

记录本条件性过程内厂内电子组件集成和功能测试消耗的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或依据 `allocation_shared_resources` 分配的工作站用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_integration`
- 来源：`eu-pef-2021-method`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 电子组件总成（`r14_electronics_subassembly`）

为转入仪器装配的合格电子组件总成创建配置特定的前景中间流。

- 选定流：电子组件总成
- 流属性/单位：Mass / kg
- 数量规则：转入仪器装配的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electronics_integration`
- 来源：

##### 废物流

##### 基本流

### 过程：仪器装配、校准和测试（`instrument_assembly_alignment_testing`）

#### 输入

##### 产品流

###### 成品光学元件投入（`r15_finished_optical_element_input`）

光学元件在厂内制造时，记录来自 `r05_finished_optical_element` 的内部转移。若为外购，则添加准确识别的外购光学元件产品投入，不得使用本内部转移行。

- 选定流：成品光学元件
- 流属性/单位：Mass / kg
- 数量规则：等于来自 `r05_finished_optical_element` 的合格内部转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_instrument_assembly_alignment_testing`
- 来源：`tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing`

###### 光机组件投入（`r16_optomechanical_component_input`）

光机零件在厂内制造时，记录来自 `r10_optomechanical_component` 的内部转移。若为外购，则分别添加每个准确识别的外购组件投入。

- 选定流：光机组件
- 流属性/单位：Mass / kg
- 数量规则：等于来自 `r10_optomechanical_component` 的合格内部转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_instrument_assembly_alignment_testing`
- 来源：`tochigi-nikon-lens-manufacturing`

###### 电子组件总成投入（`r17_electronics_subassembly_input`）

对于在厂内集成的供电或数字型号，记录来自 `r14_electronics_subassembly` 的内部转移；否则省略，并按准确标识记录外购电子组件投入。

- 选定流：电子组件总成
- 流属性/单位：Mass / kg
- 数量规则：适用时等于来自 `r14_electronics_subassembly` 的合格内部转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_instrument_assembly_alignment_testing`
- 来源：

###### UV 胶粘剂（`r18_uv_adhesive`）

仅当已声明装配路线采用光学或机械粘接时，记录所消耗的 UV 固化胶粘剂。

- 选定流：胶粘剂（UV） `6fe0476a-94ee-46e6-9d6d-e165a53ccd2a`
- 流属性/单位：Mass / kg
- 数量规则：批次记录的施胶质量，或期初库存加领入量减期末库存及有据可查的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_instrument_assembly_alignment_testing`
- 来源：`tamron-lens-manufacturing`

###### 装配、校准和测试用电（`r19_assembly_electricity`）

记录装配工具、校准工作站、验收测试和可直接归属辅助设备消耗的电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或设备功率乘以记录的运行时间；共享用电依据 `allocation_shared_resources` 分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_instrument_assembly_alignment_testing`
- 来源：`eu-pef-2021-method`; `tochigi-nikon-lens-manufacturing`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未装箱且通过质量放行的仪器（`r20_unboxed_instrument`）

为已通过验收测试但尚未加入可拆卸运输包装的仪器创建型号特定的前景中间流。

- 选定流：未装箱且通过质量放行的光学仪器
- 流属性/单位：Mass / kg
- 数量规则：转入最终包装的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_instrument_assembly_alignment_testing`
- 来源：`tochigi-nikon-lens-manufacturing`

##### 废物流

##### 基本流

### 过程：最终包装（`final_packaging`）

#### 输入

##### 产品流

###### 未装箱且通过质量放行的仪器投入（`r21_unboxed_instrument_input`）

记录来自 `r20_unboxed_instrument` 的内部转移；其数量必须等于参考产品净质量。

- 选定流：未装箱且通过质量放行的光学仪器
- 流属性/单位：Mass / kg
- 数量规则：等于来自 `r20_unboxed_instrument` 的转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`
- 来源：

###### 瓦楞纸箱（`r22_corrugated_board_box`）

记录已声明运输配置所含瓦楞纸箱的净质量。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单质量，或实测纸箱质量乘以使用数量，并扣除重复使用纸箱
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`
- 来源：

###### 聚乙烯泡沫缓冲衬垫（`r23_polyethylene_foam_insert`）

仅当已声明运输配置中包含聚乙烯泡沫缓冲衬垫时记录。

- 选定流：聚乙烯泡沫缓冲衬垫
- 流属性/单位：Mass / kg
- 数量规则：包装物料清单质量，或实测衬垫质量乘以使用数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品（`r24_reference_product`）

记录已声明且通过质量放行的仪器净质量恰好 1 kg；该数量不含可拆卸运输包装。

- 选定流：双筒、单筒及其他光学望远镜，其他天文学仪器，射电天文用仪器除外，复式光学显微镜 `d2f8e7e0-b94f-4ea8-a75d-19f3ef90a8c7`
- 流属性/单位：Mass / kg
- 数量规则：根据实测成品仪器净质量归一化后固定为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_final_packaging`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 全部过程 | 尽可能采集型号、批次、产线或设备特定数据并细分过程，以避免分配。 | `eu-pef-2021-method` |
| `allocation_shared_resources` | 共享电力、水、耗材和设施服务 | 按有据可查的物理因果驱动因素分配：优先采用计量消耗，其次采用设备运行时间乘以额定或实测需求，再次仅在具有因果关系时采用批次处理时间或质量。未证明物理关系不可行时，不得按收入分配。 | `eu-pef-2021-method` |
| `allocation_recycling_outputs` | `r06_waste_polishing_media`; `r11_aluminium_scrap` | 在前景边界记录实测废物输出，不给予避免负担信用；一致链接下游处理或再循环，并在本 PCR 结果之外披露其他再循环约定。 | `eu-pef-2021-method` |
| `allocation_internal_transfers` | `r05_finished_optical_element`; `r10_optomechanical_component`; `r14_electronics_subassembly`; `r20_unboxed_instrument` 及配对投入 | 内部转移不另行承担环境负荷或共产品分配；负荷保留在生产该中间产品的前景过程中，转移数量必须平衡。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_optical_element_fabrication` | `optical_element_fabrication` | 全部投入和输出 | 仪表、库存、转移和废物记录 | 时间戳；批次/型号；期初/收料/发料/退料/期末；仪表读数；产出和废物质量 | 对准确的厂内路线核对批次和期间记录 | kg; MJ | 按批次记录并每月核对 | 有代表性的连续 12 个月或有理据的生产活动期 | 报告场址及已声明设备 | 汇总有效记录，扣除退料和结转，分配共享资源，再除以净参考产品 kg | 校准、发票、库存台账、仪表日志、转移单、废物联单 |
| `cp_optomechanical_component_fabrication` | `optomechanical_component_fabrication` | 全部投入和输出 | 库存发料、仪表、转移和废料记录 | 时间戳；合金牌号；发料/退料质量；仪表读数；合格产出；废料质量 | 核对发料、合格转移和外运废料 | kg; MJ | 按批次记录并每月核对 | 有代表性的连续 12 个月或有理据的生产活动期 | 报告场址及已声明机床 | 汇总可归属记录并按净参考产品 kg 归一化 | 秤具校准、库存台账、机床日志、废料单据 |
| `cp_electronics_integration` | `electronics_integration` | 全部投入和输出 | 采购发料、仪表和转移记录 | 时间戳；总成料号；发放/退回质量；仪表读数；合格产出 | 核对合格外购电路板、工作站用电和内部转移 | kg; MJ | 按批次 | 有代表性的连续 12 个月或有理据的生产活动期 | 报告场址及已声明工作站 | 汇总可归属记录并按净参考产品 kg 归一化 | BOM、收料记录、仪表或设备日志、测试和转移记录 |
| `cp_instrument_assembly_alignment_testing` | `instrument_assembly_alignment_testing` | 全部投入和输出 | 转移、施胶、仪表和验收记录 | 时间戳；型号/配置；转移质量；胶粘剂库存或施胶量；能源；合格和不合格数量 | 核对内部或外购组件、胶粘剂、能源和合格产出 | kg; MJ | 按生产批次 | 有代表性的连续 12 个月或有理据的生产活动期 | 报告装配和测试场址 | 汇总可归属记录，采用有据可查的物理分配，再除以合格仪器净质量 | BOM、批次流程卡、施胶记录、仪表日志、校准和验收测试记录 |
| `cp_final_packaging` | `final_packaging` | 产品和包装投入；参考输出 | 转移、BOM、秤量和包装发料记录 | 型号/配置；未装箱质量；包装组件/数量/质量；成品净质量 | 核对未装箱转移、准确运输配置和净参考输出 | kg | 按包装配置和批次 | 与装配记录相同期间 | 报告包装场址 | 分别汇总每种原子包装组件；将归一化净参考输出设为 1 kg | 批准的包装 BOM、秤具校准、发料记录、成品放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 全部清单行 | 归一化数量 = 可归属期间数量 / 同期合格仪器净质量 | 可归属交换数量；合格仪器净质量 | 每 1 kg 净参考产品的交换量 |  |
| `convert_electricity_to_mj` | `r02_optics_electricity`; `r09_machining_electricity`; `r13_electronics_electricity`; `r19_assembly_electricity` | MJ = 计量 kWh × 3.6 | 计量或计算的 kWh | MJ 电力 |  |
| `calculate_stock_consumption` | 采用库存核算的材料 | 消耗量 = 期初库存 + 收料 − 期末库存 − 有据可查的退料或研究生产之外的转移 | 经核对的库存记录 | kg 消耗量 |  |
| `balance_internal_transfers` | 配对内部中间产品行 | 采用共同基准归一化后，生产过程输出量 = 消费过程投入量 | 配对输出和投入记录 | 平衡的 kg 转移量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和全部外购投入 | 保留准确的流标识、属性、单位、地域、技术、供应状态和产品状态限定信息；UUID 未解决项保持显式。 | UUID 直读审计、BOM、供应商规范和数据集元数据 |
| `dq_temporal` | 全部前景数据 | 优先采用有代表性的连续 12 个月；对生产活动期、外推、停机、返工和异常生产作出说明。 | 注明日期的原始记录和生产日志 |
| `dq_metering` | 电力和水 | 可行时采用经校准分表；披露估算、分配驱动因素、仪表边界和换算假设。 | 校准证书、仪表图、读数和计算表 |
| `dq_mass_balance` | 材料加工和内部转移过程 | 将材料投入与合格产出、废物、库存变化和有据可查的损失相核对，并调查差异。 | 签字的质量平衡表和原始记录 |
| `dq_route_disclosure` | 全部条件性过程 | 说明纳入和排除路线、外购替代品、镀膜路线、供电/数字内容和包装配置。 | 过程图、BOM、供应商清单和数据集备注 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 必须恰有一个定量参考解析为 UUID `d2f8e7e0-b94f-4ea8-a75d-19f3ef90a8c7`、Mass、kg，归一化后数量为 1，并声明全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_atomic_inventory` | 全部清单行 | 每行必须是一个原子交换；UUID 为空的行须保持显式未解决，不得以类别标签替代具体流。 |  |
| `validate_conditional_routes` | 条件性过程 | 每个条件性过程须有证据标为纳入或不适用；排除时不得计入其内部产出中间产品，且须添加准确的外购替代品。 | `tochigi-nikon-lens-manufacturing`; `tamron-lens-manufacturing` |
| `validate_internal_transfer_balance` | 配对内部中间产品 | 纳入的内部输出/投入对须使用同一前景标识及相等的归一化质量，且不得重复附加背景负荷。 |  |
| `validate_electricity_separation` | 电力流 | 电力须以 MJ 报告并按每个适用过程分别记录；不得与燃料、热力或压缩空气合并。 | `eu-pef-2021-method` |
| `validate_packaging_and_net_mass` | 最终包装 | 参考数量须排除可拆卸运输包装，而每种已包含包装组件须单独报告；缺少的组件须有配置证据。 |  |
| `validate_allocation` | 共享资源和废物输出 | 每项非直接归属须说明数量、物理驱动因素、记录、公式和受影响产品；前景结果中的废物输出不获得避免负担信用。 | `eu-pef-2021-method` |
| `validate_ranges` | 全部清单行 | 不得从本 PCR 推断数值默认值或 QA 范围；新增范围须有经核实且边界兼容的证据和来源标识。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明光学仪器型号和配置的工厂大门前景生产数据集 |
| downstream_use | 构建天工前景数据包及其下游过程或生命周期模型投影 |
| allowed_use | 功能性能、配置、边界、地域、技术、期间和数据质量兼容时的型号特定比较或贡献分析 |
| excluded_use | 通用产品系列平均值；使用阶段或寿命比较；射电天文仪器、电子显微镜或单独销售组件声明；无依据数值默认值 |
| required_metadata | 必需参考限定信息；场址和期间；纳入的条件性路线；外购总成；镀膜路线；电子功能；包装配置；背景链接；分配；截断 |
| required_quality_disclosure | 初级数据覆盖率、计量和估算比例、质量平衡闭合、未解决流标识、分配驱动因素、数据缺口及对本 PCR 的偏离 |
| update_trigger | 型号配置、光学设计、质量、制造路线、供应商、场址、能源结构、电子功能、包装、分配或报告期发生重要变化 |

## 11. 数据源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，`https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv` | CPC 48314 官方英文标识和分类边界 |
| `un-cpc-1-1-chinese` | official_guidance | 联合国统计司，《产品总分类第 1.1 版》，中文版，`https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf` | 经核实的产品类别专业中文表述 |
| `koehler-et-al-2021-optics-manufacturing` | literature | Köhler 等，“Quantification of Carbonic Contamination of Fused Silica Surfaces at Different Stages of Classical Optics Manufacturing,” Materials 14(7), 1620, 2021，`https://doi.org/10.3390/ma14071620` | 经典光学研磨、精研、抛光、水、冷却液和抛光介质的过程相关性 |
| `tochigi-nikon-lens-manufacturing` | extension_guidance | 栃木尼康，“ニッコールレンズ作業工程”，`https://www.jp.nikon.com/company/corporate/group/ktn/businesses/imaging/process/` | 研削、精研削、抛光、镀膜、镜筒组件机加工、电子/FPC 集成、装配、功能检查和最终光学检验路线分解 |
| `tamron-lens-manufacturing` | extension_guidance | Tamron，“Lens Manufacturing Process”，`https://www.tamron.com/global/monozukuri/tour/content.html` | 精磨、冷却液循环、抛光、清洗、纯水、真空沉积、定心和粘接路线分解 |
| `eu-pef-2021-method` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，附件 I，产品环境足迹方法，`https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf` | 特定能源计量、过程细分、物理因果分配和前景/背景一致性 |
