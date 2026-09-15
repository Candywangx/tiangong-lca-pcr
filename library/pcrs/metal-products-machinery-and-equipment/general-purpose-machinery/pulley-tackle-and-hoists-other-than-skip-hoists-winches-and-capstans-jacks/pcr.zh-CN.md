---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pulley-tackle-and-hoists-other-than-skip-hoists-winches-and-capstans-jacks
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 滑车及起重葫芦（箕斗式提升机除外）；绞车及绞盘；千斤顶

## 1. 范围与适用性

本 PCR 适用于作为完整可销售产品供应的滑车、箕斗式提升机以外的起重葫芦、绞车、绞盘以及机械或液压千斤顶的制造。涵盖产品可采用手动、电动、液压、气动或发动机驱动。前景门到门边界始于材料、外购部件、燃料、公用工程和包装进入制造场址，止于完成测试并包装的产品离开工厂大门。

箕斗式提升机；电梯、自动扶梯和自动人行道；起重机；输送设备；单独销售的链条、绳索、吊索、吊钩、电动机、液压泵、齿轮箱及其他零部件；使用场址安装；配送；使用、维护及寿命终止阶段不在本 PCR 范围内。不构成滑车、起重葫芦、绞车、绞盘或千斤顶本体的起重附件也不涵盖。数据包必须声明准确产品子类，以及场内加工、连接、涂装、动力测试和各包装路线是否发生。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pulley-tackle-and-hoists-other-than-skip-hoists-winches-and-capstans-jacks |
| classification_refs | CPC 3.0：43510（精确分类语境；映射接受由独立治理流程决定） |
| covered_products | 完整滑车；链式、钢丝绳式、手扳式及其他起重葫芦（箕斗式提升机除外）；绞车；绞盘；机械和液压千斤顶 |
| excluded_products | 箕斗式提升机；电梯；起重机；输送设备；单独销售的起重附件和零部件；安装、配送、使用、维护和寿命终止服务 |
| representative_product | 一台明确配置的完整起重葫芦、绞车、绞盘、滑车组件或千斤顶 |
| production_route | 材料/部件接收；按条件纳入切割、成形和机加工；按条件纳入连接；按条件纳入表面预处理和涂装；最终装配和出厂测试；包装 |
| market_state | 完整、完成出厂测试和标识，并按声明包装或明确声明无包装的工厂门产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明的起升、牵引、张紧或负载支承功能 |
| How much | 一台在规定最大工作载荷和配置下运行的声明产品 |
| How well | 满足声明的功能规格及适用的出厂验收要求，包括必要的静态和动态测试 |
| How long or cycle | 对应规定工作级别和环境的声明设计使用寿命或额定工作循环寿命 |
| reference_flow_link | 为实现功能单位所需的一台完整出厂测试产品的实测质量，包括随产品交付的液体和工厂门包装 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台完整出厂测试产品在声明工厂门包装状态下的实测质量 |
| 参考产品流 | 复（式）滑车及起重机，箕斗提升机除外，卷扬机及绞盘，千斤顶 `7984041f-134f-4b73-89b9-30d9be48684f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品子类；手动/电动/液压/气动/发动机驱动；最大工作载荷及配置；适用时的起升高度或绳/链行程；工作级别；设计寿命或额定循环次数；产品质量；所含电动机、控制器、绳、链、吊钩、液压油及附件；静态/动态出厂测试状态；包装状态；生产场址；市场地理范围；基准年 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对处于声明工厂门状态的完整产品进行称量，或依据可追溯的部件和包装质量记录求得其质量；不得以额定起重量替代产品质量。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 原始记录保留电表 kWh，并采用 1 kWh = 3.6 MJ 转换；披露电压、电网地理范围、供应组合及场址电表以前的损耗是否计入。 |
| `gas_volume_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量或发票体积及其基准温度、压力和干/湿基；不得合并不同气体。 |
| `liquid_mass_conversion` | 工艺用水、清洗废水、润滑油、液压油和柴油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用直接质量记录；由体积换算质量时，保留实测或供应商特定密度及其基准条件。 |
| `allocation_meter_basis` | 共用前景仪表和批次记录 | 与原子流相适应的量 | 声明的行单位 | 仅在有文件证明无法细分后才分配，并保留物理驱动量、分母、生产期和与场址总量的核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 材料、外购部件、能源载体、工艺用水和包装到达制造场址大门时的状态 |
| starting_condition_role | 上游产品输入；其生产和入厂供应负荷由所链接的上游数据集表示，不在前景制造清单内重复构建 |
| product_classification_scope | CPC 3.0 代码 43510 语义边界内的完整产品；分类仅作语境，不替代产品限定信息 |
| recursive_input_rule | 属于本 PCR 同一类别的完整外购产品作为一个上游产品输入记录一次，并链接上游数据集；除非供应商提供部件级一次数据，否则不递归分解 |
| upstream_dataset_requirement | 每项外购材料、部件、燃料、公用工程和包装均采用在地理、技术、时间和产品状态上具有代表性的上游数据集 |
| disclosure | 声明产品子类、驱动方式、场址、技术路线、过程纳入、测试、包装状态、截断、共用过程分配，以及所列原子模式未表示的每项材料或排放 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景制造边界 | 对从接收到出厂测试和包装的所有纳入场内过程，纳入全部已知材料、部件、能源、水、产品、废物和直接基本流交换。 | `eu-commission-pef-method-2021` |
| `boundary_rule_2` | 外购输入 | 外购输入的上游生产和入厂供应以链接上游数据集表示；不得在前景清单中再次加入上游直接排放。 | `eu-commission-pef-method-2021` |
| `boundary_rule_3` | 下游阶段 | 除非声明的研究扩展边界并分别报告，否则排除工厂门后的配送、安装、使用期电力或燃料、维护、替换件和寿命终止。 | `eu-commission-pef-method-2021` |
| `boundary_rule_4` | 出厂验收 | 纳入产品离厂前最终装配以及静态/动态测试产生的能源、燃料、液体、不合格材料、废物和直接排放。 | `eu-machinery-regulation-2023-1230` |
| `boundary_rule_5` | 截断和附加交换 | 不得将本清单模式视为截断清单：凡物料清单、过程记录、许可证或质量/能量核对识别出的产品特定原子交换均须添加，并披露任何有理由的排除。 | `eu-commission-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 部件切割、成形和机加工 | conditional | 报告场址对收到的金属实施切割、成形、钻孔、铣削、车削、磨削或其他机加工时纳入 | 前景部件制造 | 一台完整产品的场内加工部件 |
| `joining` | 连接和结构装配 | conditional | 报告场址实施焊接或氧气辅助切割时纳入 | 前景连接 | 一台完整产品的连接框架和承载组件 |
| `surface_treatment` | 表面预处理和涂装 | conditional | 报告场址实施水基清洗、碱性预处理、喷漆、固化或相关涂装时纳入 | 前景表面处理 | 一台完整产品的涂装面积/部件 |
| `final_assembly_testing` | 最终装配、注液和出厂测试 | required | 始终纳入；逐项声明驱动方式特定输入不适用的情况 | 前景装配和质量保证 | 一台完成测试的完整产品 |
| `packaging` | 包装和工厂门放行 | required | 始终纳入声明的工厂门包装状态；仅当产品确实无包装供应时记录无包装 | 前景包装 | 一台已包装或声明无包装的完整产品 |

### 过程：部件切割、成形和机加工（`component_fabrication`）

#### 输入

##### 产品流

###### 碳钢材料（`carbon_steel_input`）

记录跨越场址边界并用于框架、卷筒、齿轮、承载件、壳体或其他产品部件的碳钢。仅纳入实际声明的牌号和来料形态。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：Mass / kg
- 数量规则：依据产品特定物料清单、收货、领用、退料和库存变化记录的实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 铸铁材料（`cast_iron_input`）

仅当铸铁作为壳体、千斤顶本体、底座或其他部件的来料并被消耗时记录。精确名称候选未通过分类审查，故不采用 Tiangong UUID。

- 选定流：铸铁
- 流属性/单位：Mass / kg
- 数量规则：依据产品特定物料清单、收货、领用、退料和库存变化记录的实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 初级铝合金板材（`primary_aluminium_alloy_sheet_input`）

仅对在护罩、壳体、盖板或结构部件中消耗这种来料板材的产品变型记录初级铝合金板材。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：依据产品特定物料清单、收货、领用、退料和库存变化记录的实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 加工电力（`fabrication_electricity`）

记录切割、成形、机加工、磨削、局部抽风及可直接归属辅助设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或按物理量分配的 kWh 电力乘以 3.6 MJ/kWh
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_inputs`
- 来源：`eu-commission-pef-method-2021`

###### 加工工艺用水（`fabrication_process_water`）

记录供应给湿式机加工、水基零件清洗或其他可直接归属加工用途的工艺用水；不计未跨越边界的闭路循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测补充水质量，或以记录密度换算的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 机加工润滑油（`machining_lubricating_oil`）

记录产品可归属机加工和金属成形中加入并消耗的润滑油；不得与液压油或废油合并。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：采购或领用油减去可追溯退料和期末库存，并按机时或实测产量分配至参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开前景边界的分类碳钢边角料、切屑、车屑和不合格钢部件；不得从碳钢输入中净扣除该质量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：转移点实测质量，并与内部废料箱和产品特定加工记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 铝废料（`aluminium_scrap`）

发生铝加工时，将铝合金边角料、切屑和不合格铝件与钢废料分开记录。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：转移点实测质量，并与内部废料箱和产品特定加工记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 废润滑油（`used_lubricating_oil`）

记录从机加工系统排出并转移处理的废润滑油；不得与金属切屑、水性废水或液压油合并。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：依据废物联单、储罐变化或容器称量的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 基本流

###### 加工排入空气的颗粒物（`fabrication_particulate_air`）

记录切割、磨削、机加工及可直接归属抽风系统向空气释放的未捕集颗粒物。若捕集粉尘被转移，则另建废物流行。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：场址测量，或由产品特定活动量、文件化排放因子、捕集效率和运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

### 过程：连接和结构装配（`joining`）

#### 输入

##### 产品流

###### 连接电力（`joining_electricity`）

记录焊机、变位机、焊烟抽排和可直接归属连接辅助设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或按物理量分配的 kWh 电力乘以 3.6 MJ/kWh
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_joining_inputs`
- 来源：`eu-commission-pef-method-2021`

###### 药芯焊丝（`flux_cored_welding_wire`）

采用该焊接路线时记录消耗的药芯焊丝；实际消耗其他焊条或填充材料时，应建立各自的原子行。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：领用焊丝减去可追溯退料和可重复使用余料，并依据工单或批次记录分配至参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joining_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 工业氧气（`industrial_oxygen`）

仅在氧气用于本过程的氧气辅助切割或连接时记录；不得与其他气体合并。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在文件化基准条件下由仪表或钢瓶记录得到的氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joining_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 连接排入空气的颗粒物（`joining_particulate_air`）

记录焊接和热切割向空气释放的未捕集颗粒物；有可靠的粒径监测数据时改用粒径特定行。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：场址测量，或由连接活动、文件化排放因子、捕集效率和运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_joining_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

### 过程：表面预处理和涂装（`surface_treatment`）

#### 输入

##### 产品流

###### 涂装电力（`coating_electricity`）

记录清洗、泵送、通风、涂料施工、固化及可直接归属处理设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或按物理量分配的 kWh 电力乘以 3.6 MJ/kWh
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_inputs`
- 来源：`eu-commission-pef-method-2021`

###### 涂装天然气（`coating_natural_gas`）

仅在气态天然气用于烘炉固化、槽液加热或其他可直接归属涂装作业时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在文件化基准条件下计量或与发票核对的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_inputs`
- 来源：`eu-commission-pef-method-2021`

###### 涂装和清洗工艺用水（`coating_process_water`）

记录在声明处理路线内用于清洗、漂洗、槽液补充和水幕喷漆室且跨越场址边界的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测补充水质量，或以记录密度换算的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 碱性预处理用氢氧化钠（`coating_sodium_hydroxide`）

仅在氢氧化钠用于碱性清洗或槽液补充时记录；保留溶液浓度，并一致计算纯品质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：采购或领用溶液质量乘以记录的氢氧化钠质量分数，再减去可追溯退料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 油性漆料（`oil_based_paint`）

仅对溶剂型喷漆路线记录油性漆料；实际使用粉末涂料、水性漆、底漆、稀释剂或其他涂层产品时，应分别建立原子行。

- 选定流：油性漆料 `6be227e2-532c-4989-89cb-61c7c02c1d55`
- 流属性/单位：Mass / kg
- 数量规则：工单领用漆料减去文件化退料，包括留在最终涂层中以及成为废物或直接排放的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_inputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废油漆（`waste_paint`）

将被弃置的油性漆、过喷残渣和不可用混合漆作为一个废油漆流记录；产生受污染吸附物、过滤器、溶剂和废水时分别记录。

- 选定流：废油漆 `d202996c-dc0d-4d90-a161-87a21f0e9616`
- 流属性/单位：Mass / kg
- 数量规则：依据容器称量和废物联单的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 清洗废水（`cleaning_wastewater`）

记录离开前景过程并送至场内或场外处理的清洗和漂洗废水；披露化学组成、处理状态和去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或以记录密度换算的计量体积，仅扣除未跨界且有文件证明的内部循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

##### 基本流

###### 涂装燃料产生的化石二氧化碳（`coating_fossil_co2`）

仅记录涂装天然气在场内燃烧直接排放的化石二氧化碳；不含电力和燃料供应的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据采集的天然气体积、供应商或管辖区碳含量和文件化氧化因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_outputs`
- 来源：`eu-commission-pef-method-2021`

###### 排入空气的非甲烷挥发性有机化合物（`coating_nmvoc_air`）

记录漆料储存、混合、施工、干燥和清理直接排放的非甲烷挥发性有机化合物，并扣除已捕集或销毁质量。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或依据产品 VOC 含量、施工质量、传递效率、捕集废物和治理效率进行溶剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_coating_outputs`
- 来源：`us-epa-fabricated-metal-products-1995`

### 过程：最终装配、注液和出厂测试（`final_assembly_testing`）

#### 输入

##### 产品流

###### 外购电动机（`electric_motor`）

仅对电动产品变型记录跨越场址边界的完整电动机；披露齿轮箱、制动器、控制器和电缆是否在外购部件边界内。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：装入参考产品的完整外购电动机的实测质量或物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_test_inputs`
- 来源：`eu-machinery-regulation-2023-1230`

###### 装配和出厂测试电力（`assembly_electricity`）

记录装配工具、注液系统、控制器调试、试验台、静态/动态测试及可直接归属辅助设备所用电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或按物理量分配的 kWh 电力乘以 3.6 MJ/kWh
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_test_inputs`
- 来源：`eu-machinery-regulation-2023-1230`

###### 液压油充注（`hydraulic_fluid`）

记录装入交付产品或在适用液压产品出厂注液和测试期间消耗的液压油；离开边界的回收液体应另作废物流记录。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：实测充注量加测试消耗量，再减去可追溯回收复用和退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_test_inputs`
- 来源：`eu-machinery-regulation-2023-1230`

###### 出厂测试用柴油（`test_diesel_fuel`）

仅当发动机驱动产品或试验设备在产品可归属出厂测试中燃烧柴油时记录；不得与其他燃料合并。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：实测领用燃料减去可追溯退料，并与测试持续时间和设备记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_test_inputs`
- 来源：`eu-machinery-regulation-2023-1230`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 柴油测试产生的化石二氧化碳（`test_fossil_co2`）

仅记录出厂测试期间场内柴油燃烧直接排放的化石二氧化碳；不含燃料供应上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据采集的柴油质量、供应商或管辖区碳含量和文件化氧化因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_test_outputs`
- 来源：`eu-commission-pef-method-2021`

### 过程：包装和工厂门放行（`packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_board_boxes`）

记录构成交付包装的瓦楞纸箱；披露纸板等级、再生含量以及纸箱为新用或重复使用。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：实测包装质量，或与领用和退料核对的产品特定包装规格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-commission-pef-method-2021`

###### 欧标木托盘（`euro_wooden_pallet`）

仅当欧标木托盘随产品跨越工厂门时记录；披露新用/重复使用状态及多产品共用分配。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：Mass / kg
- 数量规则：实测托盘质量乘以文件化的参考产品装运分配比例
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-commission-pef-method-2021`

###### 聚乙烯包装薄膜（`polyethylene_film_packaging`）

仅当聚乙烯拉伸膜、收缩膜或防护膜构成交付包装时记录。精确名称候选未通过分类审查，故不采用 Tiangong UUID。

- 选定流：聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：实测薄膜质量，或与领用和退料核对的产品特定包装规格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-commission-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整工厂门参考产品（`reference_product`）

记录声明包装状态下完成出厂测试的完整产品。输出质量包括装入产品的液体和随产品交付的包装，并与参考流表核对。

- 选定流：复（式）滑车及起重机，箕斗提升机除外，卷扬机及绞盘，千斤顶 `7984041f-134f-4b73-89b9-30d9be48684f`
- 流属性/单位：Mass / kg
- 数量规则：一台完整产品在声明工厂门包装状态下的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台完整包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`un-cpc-3-0-structure-2025`、`eu-machinery-regulation-2023-1230`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共用前景过程 | 优先通过细分仪表、工单、生产单元、批次、涂装线、试验台和废物记录，将数据直接归属于声明产品或同质产品族，避免分配。 | `eu-commission-pef-method-2021` |
| `allocation_rule_2` | 剩余共用能源和材料 | 确实无法细分时，采用与消耗有因果关系的文件化物理驱动量，如机时、测试时间、质量产量、涂装面积或包装件数；经济分配必须明确论证并开展敏感性分析。 | `eu-commission-pef-method-2021` |
| `allocation_rule_3` | 钢废料、铝废料、废油和废油漆 | 按实测质量将转移的废料和废物作为独立输出报告；不得在前景制造过程中扣减原生生产避免负荷或下游回收收益。 | `eu-commission-pef-method-2021` |
| `allocation_rule_4` | 返工和不合格产品 | 将返工能源/材料和不合格品废物归属于造成它们的生产期和产品族；披露可销售非标设备是否为共产品，并在任何分配前优先细分。 | `eu-commission-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_inputs` | `component_fabrication` | 来料、电力、水和润滑油 | 物料清单、采购/领用/退料记录、仪表 | 产品 id；材料/流 id；牌号/状态；总量/退料质量；仪表始末读数；kWh 或 m3；密度；批次；时间戳 | 将工单记录与采购、库存变化和分表核对 | kg、kWh、m3 | 每工单或仪表周期 | 代表性连续 12 个月，或低产量产品的完整生产期 | 报告场址全部加工单元及可归属辅助设备 | 按原子流和产品族汇总；转换单位；仅对剩余共用总量按文件化物理驱动量分配 | 校准仪表/秤记录、签署库存核对、供应商规格 |
| `cp_fabrication_outputs` | `component_fabrication` | 分类废料、废油和颗粒物排放 | 称量单、废物联单、监测和运行记录 | 废物 id；材料；质量；去向；活动量；排放因子；捕集效率；运行时间；时间戳 | 将分类转移和排放计算与过程活动核对 | kg | 每次转移和报告周期 | 与加工输入相同期间 | 报告场址全部加工单元和控制设施 | 按原子流汇总；仅扣除有文件证明且未跨界的内部复用 | 废物联单、校准、实验室/许可证报告、计算工作簿 |
| `cp_joining_inputs` | `joining` | 电力、焊丝和氧气 | 工单、领退料记录、仪表和钢瓶日志 | 产品 id；焊丝 id/质量；氧气体积；基准条件；kWh；接头/工艺；时间戳 | 将工单消耗和仪表与连接工单核对 | kg、m3、kWh | 每工单或批次 | 与参考产品相同生产期间 | 报告场址全部连接单元和抽排设施 | 按原子流汇总；电力换算 MJ；剩余共用量按电弧时间或文件化工时分配 | 领料记录、气体证书、校准仪表、工单追溯 |
| `cp_joining_outputs` | `joining` | 直接颗粒物排放 | 监测、烟气控制和连接活动记录 | 连接工艺；耗材质量；运行时间；排放因子；捕集/治理效率；浓度/流量实测；时间戳 | 直接测量或透明的活动量-因子计算 | kg | 每监测周期或同质工艺批次 | 与连接输入相同期间 | 报告场址全部连接排放点 | 计算未捕集排放质量并归一化至参考产品 | 许可证/烟道测试证据、控制设施维护记录、计算工作簿 |
| `cp_coating_inputs` | `surface_treatment` | 电力、天然气、水、氢氧化钠和油性漆料 | 仪表、批次单、采购/领退料和槽液记录 | 产品 id；涂装面积；kWh；气体 m3 及条件；水；化学溶液质量/浓度；漆料质量/VOC 含量；时间戳 | 将生产线记录与公用工程仪表、库存和槽液补充核对 | kg、m3、kWh | 每涂装批次和仪表周期 | 代表性连续 12 个月，或完整涂装生产期 | 报告场址全部清洗、喷漆、固化和可归属控制设施 | 按原子流汇总；转换电力和溶液浓度；剩余共用量按涂装面积或线时分配 | 校准仪表、供应商 SDS/规格、槽液分析、库存核对 |
| `cp_coating_outputs` | `surface_treatment` | 废油漆、清洗废水、化石 CO2 和 NMVOC | 废物联单、废水仪表、燃料及涂装/治理记录 | 废物质量；废水质量/体积/密度；气体体积/碳含量/氧化率；漆料 VOC 含量；传递和销毁效率；时间戳 | 称量/计量输出，并由采集活动量计算直接排放 | kg | 每次转移、批次或报告周期 | 与涂装输入相同期间 | 报告场址全部涂装废物和排放点 | 按原子流汇总；保留处理去向；避免重复计算上游排放 | 联单、实验室结果、校准仪表、供应商因子、许可证/治理证据 |
| `cp_assembly_test_inputs` | `final_assembly_testing` | 电动机、电力、液压油和柴油 | 物料清单、充注单、测试日志、仪表、燃料领用记录 | 产品序列号；部件质量；kWh；液体/燃料质量；测试类型；最大工作载荷；测试时间；时间戳 | 按序列号或同质批次追踪装配和测试 | kg、kWh | 每台产品或同质测试批次 | 完整报告生产期间 | 全部装配工位和出厂试验台 | 汇总直接记录；电力换算 MJ；试验台剩余量按测试时间分配 | 序列号追溯、校准负载/测试设备、签署测试报告、仪表和领用记录 |
| `cp_assembly_test_outputs` | `final_assembly_testing` | 柴油测试化石 CO2 | 燃料和测试记录 | 柴油质量；碳含量；氧化因子；产品序列号；测试时间；时间戳 | 依据采集燃料和文件化因子计算直接 CO2 | kg | 每测试批次 | 与装配/测试输入相同期间 | 报告场址柴油测试设备 | 汇总直接排放质量并归一化至参考产品 | 燃料规格、测试日志、计算工作簿 |
| `cp_packaging_release` | `packaging` | 包装输入和参考产品输出 | 包装规格、领退料记录和最终称量 | 产品序列号；包装部件 id；质量；数量；托盘分配/重复使用；完整产品质量；时间戳 | 将包装领用与每台放行产品及最终秤读数核对 | kg | 每种装运配置 | 完整报告生产期间 | 报告场址包装和放行区域 | 分别汇总各原子包装材料，并将包装产品输出与最终质量核对 | 批准包装规格、校准秤、装运和序列号记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | 每项电力行 | electricity_MJ = metered_or_allocated_kWh × 3.6 | 各过程 kWh 和分配记录 | 每参考产品 MJ | `eu-commission-pef-method-2021` |
| `calc_solution_active_mass` | 氢氧化钠 | NaOH_mass = solution_mass × measured_or_supplier_mass_fraction | 溶液质量；NaOH 质量分数 | 每参考产品 kg 氢氧化钠 | `us-epa-fabricated-metal-products-1995` |
| `calc_liquid_mass` | 以体积记录的水、废水、油、液压油或柴油 | liquid_mass = measured_volume × documented_density_at_reference_conditions | 体积；密度；温度/基准条件 | 每参考产品 kg | `eu-commission-pef-method-2021` |
| `calc_fossil_co2` | 涂装天然气和柴油测试燃烧 | fossil_CO2_mass = collected_fuel_amount × documented_fossil_carbon_content × oxidation_fraction × 44/12，并展示单位转换 | 燃料量；碳含量；氧化率 | 每参考产品 kg 化石 CO2 | `eu-commission-pef-method-2021` |
| `calc_nmvoc` | 油性漆料施工 | emitted_NMVOC = applied_paint_mass × VOC_mass_fraction - captured_liquid_VOC - destroyed_VOC，并受文件化质量平衡约束 | 漆料质量；VOC 含量；捕集废物；销毁效率 | 每参考产品 kg 排入空气 NMVOC | `us-epa-fabricated-metal-products-1995` |
| `calc_shared_process_allocation` | 剩余共用记录 | product_amount = reconciled_process_total × product_physical_driver / sum_physical_drivers | 核对总量；产品和总驱动量 | 每参考产品的原子流量 | `eu-commission-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和外购部件 | 保留序列号/产品族追溯，并声明子类、驱动、额定载荷、配置、工作级别、设计寿命/循环、所含部件和包装状态。 | 产品规格、物料清单、铭牌、序列号记录和测试报告 |
| `dq_completeness` | 所有纳入过程 | 将全部已知材料、能源、水、产品、废物和直接排放记录与场址总量核对；说明新增行、零/不适用条件、排除和数据缺口。 | 核对工作簿、过程图、仪表/废物总量和签署异常日志 |
| `dq_measurement` | 仪表、秤、浓度和测试设备 | 使用已校准或核验设备，并保留单位、基准条件、校准状态、采样方法、不确定性和换算。 | 校准证书、实验室报告、供应商规格和计算工作簿 |
| `dq_temporal` | 前景报告期间 | 采用代表性连续 12 个月；低产量产品可采用完整生产期；披露季节性、停机、返工和异常生产。 | 有日期的生产、仪表、库存、废物和装运记录 |
| `dq_representativeness` | 前景和上游数据集 | 评价技术、地理和时间代表性及精度；论证任何代理数据集或分配驱动量。 | 使用 TeR、GeR、TiR 和精度准则的数据质量评价 |
| `dq_uuid_localization` | 带 UUID 的流 | 核实公开 state 100、流类型、分类、属性和单位组，并在本中文文本中保留 Tiangong 正式中文 baseName。 | 已最终确定的回执支持直读审计 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR 和参考产品身份 | 确认清单 id、英文/中文 frontmatter、canonical PCR id、CPC 语境、参考产品 UUID、流属性、单位组和必需限定信息彼此一致。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | 功能单位 | 数据集若以一千克未规定设备替代声明的起升/牵引/支承功能，则拒绝；必须提供额定载荷、质量/测试状态和设计寿命或循环。 | `eu-commission-pef-method-2021`、`eu-machinery-regulation-2023-1230` |
| `validation_rule_3` | 清单完整性 | 确认各纳入过程包含全部已知原子输入输出，各条件行说明适用原因，并新增模式未列但产品实际存在的交换，而非以截断隐藏。 | `eu-commission-pef-method-2021` |
| `validation_rule_4` | 质量和废物核对 | 将材料输入与产品质量、保留涂层/液体、分类废料、废物、排放、库存变化和文件化水分或未测差异核对，不得净扣回收收益。 | `us-epa-fabricated-metal-products-1995` |
| `validation_rule_5` | 能源和直接排放 | 将电力、天然气和柴油与仪表/发票核对；核实 kWh 至 MJ 转换；确认化石 CO2 仅含场内直接燃烧，NMVOC/颗粒物计算计入文件化控制设施。 | `eu-commission-pef-method-2021`、`us-epa-fabricated-metal-products-1995` |
| `validation_rule_6` | 出厂测试 | 对准备投入使用的产品，确认必要的静态/动态测试状态、测试载荷基准、测试能源/燃料、不合格材料和返工均已表示。 | `eu-machinery-regulation-2023-1230` |
| `validation_rule_7` | UUID 和双语对齐 | 确认每个 UUID 均为公开 state 100 并匹配流类型、分类、属性和单位；中英文清单必须具有相同有序 row id、UUID 和受控值，并使用正式中文流名。 |  |
| `validation_rule_8` | 未解决证据 | 在确认精确公开身份前，铸铁和聚乙烯包装薄膜 UUID 保持未解决；不得将单一研究、规格限值或作者判断转换为经验范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整出厂测试产品在工厂门的产品特定前景制造数据集 |
| downstream_use | 在方法审查、校验、不确定性/数据质量评价以及身份缺口得到解决或明确治理后，可发布为 secondary_dataset 或 background_dataset |
| allowed_use | 与有代表性的上游数据集结合用于从摇篮到工厂门研究；显式加入配送、安装、使用、维护和寿命终止的更广生命周期模型；仅在功能、额定载荷、工作级别、设计寿命和系统边界等效时比较 |
| excluded_use | 直接表示箕斗式提升机、电梯、起重机、输送设备、独立零部件或起重附件；未添加下游阶段即表示使用期或全生命周期；仅按产品质量进行无条件比较 |
| required_metadata | PCR id/版本；产品子类；驱动；额定载荷/配置；起升/行程；工作级别；设计寿命/循环；产品和包装质量；所含部件/液体；场址/地理/年份；过程路线；测试状态；分配；截断；上游数据集身份 |
| required_quality_disclosure | 前景期间和覆盖率；完整性核对；校准；不确定性；TeR/GeR/TiR/精度评价；代理和分配敏感性；废物去向；排放控制；未解决 UUID 和范围证据需求 |
| update_trigger | 产品设计或额定功能、材料/部件、驱动或测试路线、涂装化学、制造场址/技术、包装、分配、排放控制、上游数据代表性发生变化，或出现可解决 UUID/范围需求的证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，第 43510 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | 正式产品分类身份及与零部件类别的区分 |
| `eu-commission-pef-method-2021` | 正式指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method。https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（检索于 2026-09-05） | 功能单位/参考流、系统边界、企业特定清单完整性、分配、计算和数据质量规则 |
| `eu-machinery-regulation-2023-1230` | 标准（`standard`） | Regulation (EU) 2023/1230 of 14 June 2023 on machinery。https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32023R1230（检索于 2026-09-05） | 最大工作载荷、工作循环/使用寿命限定信息、出厂适用性及静态/动态测试 |
| `us-epa-fabricated-metal-products-1995` | 正式指南（`official_guidance`） | 美国环保署，Profile of the Fabricated Metal Products Industry，EPA/310-R-95-007，1995-09。https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf（检索于 2026-09-05） | 切割/成形/机加工、表面预处理和喷漆过程分解；原子材料、废水、废物和空气排放候选 |
