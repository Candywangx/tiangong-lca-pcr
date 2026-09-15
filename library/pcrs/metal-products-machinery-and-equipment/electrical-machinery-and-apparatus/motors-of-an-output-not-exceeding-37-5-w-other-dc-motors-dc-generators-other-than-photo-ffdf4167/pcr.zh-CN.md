---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.motors-of-an-output-not-exceeding-37-5-w-other-dc-motors-dc-generators-other-than-photo-ffdf4167
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 输出功率不超过37.5 W的电动机；其他直流电动机；除光伏发电机以外的直流发电机

## 1. 范围与适用性

本 PCR 适用于输出额定功率不超过 37.5 W 的完整电动机、其他直流电动机以及除光伏发电机以外的直流发电机的工厂门生产。只有成品符合所声明的产品类别识别时，才适用于有刷、无刷、永磁和绕线励磁设计。英文边界依据 CPC 3.0 官方结构（`un-cpc-3-0-structure-2025`）。中文标题采用联合国中文版 CPC 已确立的 46111 术语，并依据当前英文来源补入光伏发电机排除项（`un-cpc-v1-1-chinese-2004`）。

光伏发电机、纯交流电动机及交流发电机、发电机组、旋转换流机、作为整机的电动设备以及单独销售的替换零件不在范围内。默认边界不包括使用和维护用电、安装、声明工厂门之后的配送及寿命终止处理。数据包可以扩展这些阶段，但必须单独报告。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.motors-of-an-output-not-exceeding-37-5-w-other-dc-motors-dc-generators-other-than-photo-ffdf4167 |
| classification_refs | CPC 3.0：46111（精确分类语境；映射接受仍由独立治理程序决定） |
| covered_products | 输出额定功率不超过 37.5 W 的完整电动机；其他完整直流电动机；除光伏发电机以外的完整直流发电机 |
| excluded_products | 光伏发电机；纯交流电动机及发电机；发电机组；旋转换流机；单独零件；电机不是销售参考产品的整机 |
| representative_product | 已包装、经工厂检验并可发运的完整直流电动机或直流发电机 |
| production_route | 外购材料及部件准备、适用时的磁芯和轴加工、绕组与绝缘、转子/换向组件装配、适用时的浸渍与固化、总装、测试、表面处理及包装 |
| market_state | 制造设施门口的全新完整产品，并声明额定输出、马达/发电机功能、换向技术、磁体技术、冷却方式、外壳、质量及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明技术规格的完整 CPC 46111 电动机或直流发电机 |
| How much | 工厂门处 1 kg 已包装成品 |
| How well | 通过制造商声明的最终电气、机械和安全检验，并保留测试特性及测试依据 |
| How long or cycle | 一个生产报告期；参考流不包括使用寿命及使用阶段输出 |
| reference_flow_link | `finished_motor_generator` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 电动机 `a17dfc74-85fa-4cdc-bd1f-61c543d349f2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 电动机或发电机功能；额定输出及额定依据；适用时的直流或交直流两用供电特性；有刷、无刷或其他换向技术；永磁体化学组成或绕线励磁设计；极数；额定电压；工作制及工作制类型；报告效率或损耗时所用测试方法；冷却方式；外壳及防护等级；是否包括内置控制器；产品质量依据；包装状态；生产地理范围；报告期；工厂门 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。宽泛的天工参考流不提供产品特定的技术、额定值、地理或包装事实。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别测量成品电机净质量和所含发运包装质量，然后以两者之和作为已包装参考产品；将所有交换归一化至恰好 1 kg 已包装产品，并披露两项质量。 |
| `energy_conversion` | 外购电力与天然气 | 电力采用能量；气态天然气采用体积 | 电力使用 MJ；天然气使用 m3 | 保留计量原始单位和参考条件。按 1 kWh = 3.6 MJ 将电力换算为 MJ；披露气体体积的温度和压力依据，若无成分和换算记录不得由质量推算。 |
| `rated_output_basis` | 类别资格及产品元数据 | 电动机采用额定机械输出，发电机采用额定电输出 | W 或 kW | 记录铭牌额定值和额定依据。37.5 W 阈值只适用于第一类别分支，不得套用于独立的“其他直流电动机”或“直流发电机”分支。 |
| `scrap_mass_balance` | 钢、铜、铝投入及废料产出 | Mass | kg | 在报告期内，将投入质量与进入产品的材料、适用时的可销售共产品、废料及实测库存变化核对；不得用回收废料抵减原生或外购投入。 |

## 5. 系统边界

前景边界为工厂门到工厂门制造。外购材料和部件跨越起始门；部件准备、绕制、转子和定子装配、适用时的浸渍或固化、总装、测试、表面处理及包装属于前景作业。制造链拆分以及把工厂门到工厂门记录连接至上游数据集的要求由 `nordelof-tillman-2018-motor-manufacturing` 支持。

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有前景过程 | 纳入报告制造商运营控制下从外购材料或部件接收到已包装成品放行的全部作业；披露外包步骤，不得静默省略。 | `nordelof-tillman-2018-motor-manufacturing` |
| `boundary_upstream_inputs` | 外购产品投入 | 每种外购材料、部件、电力供应和燃料均应连接与材料牌号、产品状态、技术、地理及交付边界相匹配的上游数据集；不得把上游排放计作工厂直接排放。 | `nordelof-tillman-2018-motor-manufacturing` |
| `boundary_route_condition` | 条件适用技术 | 只有声明永磁路线时才纳入永磁体，只有有刷换向路线才纳入碳刷，只有这些作业在报告场址发生时才纳入直燃固化天然气及其直接化石源二氧化碳。 |  |
| `boundary_additional_exchanges` | 设施清单完整性 | 任何其他跨界交换必须作为单独的物质或产品特定行加入，并有自身身份、属性、数量方法和证据；不得用材料、公用工程、废物或排放集合标签替代缺失细节。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和部件在报告制造设施门处接收，并声明内部制造与外购子组件的划分 |
| starting_condition_role | 工厂门到工厂门前景起始条件；上游生产由连接数据集表示 |
| product_classification_scope | 满足 CPC 46111 语义边界的完整产品，不受三项覆盖分支内某一特定路线或铭牌额定值支配 |
| recursive_input_rule | 把一个覆盖类别产品装入另一个覆盖产品时，将其作为单独的同类产品投入并连接其上游数据集，不在本前景数据包中递归展开 |
| upstream_dataset_requirement | 每种外购材料、部件、包装件、电力供应和燃料均需要与地理、技术、牌号和产品状态相容的上游数据集 |
| disclosure | 披露产品分支、技术、额定输出、生产地理、报告期、内部和外包作业、包装纳入情况、截断、分配及所有缺失上游数据集 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 部件准备与机械加工 | `required` | 外购成品部件作为投入记录；未在场内实施的加工交换以证据标记为不适用。 | 前景材料准备、冲剪或叠装铁芯片、轴和外壳准备 | 每 1 kg 已包装成品转入电磁组件装配的合格部件 kg 数 |
| `electromagnetic_assembly` | 绕组、绝缘、转子/定子装配与固化 | `required` | 磁体、碳刷和直燃固化行只适用于声明技术。 | 前景电气与磁性组件装配 | 每 1 kg 已包装成品转入总装的合格电磁组件 kg 数 |
| `final_assembly_testing_packing` | 总装、测试与包装 | `required` | 所有可销售产品均需总装和放行检验；包装对应声明的发运状态。 | 前景完工及参考产品产出 | 1 kg 已包装成品参考产品 |

### 过程：部件准备与机械加工（`component_fabrication`）

#### 输入

##### 产品流

###### 铁芯片用电工钢板（`electrical_steel_sheet`）

记录用于定子或转子铁芯片并跨越工厂边界的硅电工钢板；牌号、涂层、厚度及是否外购成品铁芯片属于前景限定信息。

- 选定流：电工钢板
- 流属性/单位：Mass / kg
- 数量规则：实测接收和消耗质量，并与库存变化及退料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：

###### 电机轴用钢棒（`shaft_steel_bar`）

记录用于场内加工轴的具体合金钢或非合金钢棒；外购成品轴必须在前景数据包中另行记录。

- 选定流：电机轴用钢棒
- 流属性/单位：Mass / kg
- 数量规则：发给轴加工的实测钢棒质量，并扣除退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：

###### 压铸铝电机外壳（`aluminum_motor_housing`）

记录进入产品的外购或内部铸造铝制机壳体和端盖；必须声明合金及外购件或铸件状态。

- 选定流：压铸铝电机外壳
- 流属性/单位：Mass / kg
- 数量规则：合格外壳实测消耗质量，包括报告期内后来报废的部件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_materials`
- 来源：

###### 部件加工用电（`component_electricity`）

记录铁芯片冲剪或叠装、轴和外壳加工、压缩空气以及分摊到本过程的厂务服务用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于部件加工的电表或分表实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铁芯片冲剪及加工钢废料（`electrical_steel_scrap`）

记录离开过程的分选电工钢和其他含铁边角料；只有下游处理相同时才合并为一个钢废料流。

- 选定流：钢废料 `b82f6725-9112-4121-abe1-f94420e7c684`
- 流属性/单位：Mass / kg
- 数量规则：外运含铁废料实测质量加库存变化，且不先扣除避免负担收益
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_scrap`
- 来源：

###### 铝外壳加工废料（`aluminum_scrap`）

以质量记录外壳准备产生的铝屑和边角料；若存在铝渣或受污染切屑，应另行记录。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：外运铝废料实测质量加库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_scrap`
- 来源：

##### 基本流

### 过程：绕组、绝缘、转子/定子装配与固化（`electromagnetic_assembly`）

#### 输入

##### 产品流

###### 钕铁硼永磁体（`ndfeb_magnet`）

只有声明产品路线制造或装配钕铁硼永磁转子时才纳入。

- 选定流：钕铁硼磁体 `a598b760-108c-4d70-93f9-59098959141e`
- 流属性/单位：Mass / kg
- 数量规则：发给生产路线的钕铁硼磁体实测装入量和报废量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：钕铁硼路线每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_materials`
- 来源：

###### 铁氧体永磁体（`ferrite_magnet`）

只有声明产品路线制造或装配陶瓷或铁氧体永磁转子时才纳入。

- 选定流：永久陶瓷或铁氧体磁铁 `59fbfc86-a725-413c-b3df-d6f7683036d5`
- 流属性/单位：Mass / kg
- 数量规则：发给生产路线的铁氧体磁体实测装入量和报废量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：铁氧体路线每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_materials`
- 来源：

###### 绝缘铜绕组线（`magnet_wire`）

记录定子或转子绕组所用电磁线，包括报废绕组中的电磁线，并扣除核实的退库量。

- 选定流：电磁线 `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- 流属性/单位：Mass / kg
- 数量规则：实测电磁线领用质量减退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_materials`
- 来源：

###### PET 电气绝缘薄膜（`pet_insulation_film`）

适用时记录槽绝缘、相间绝缘或绕组绝缘用聚对苯二甲酸乙二醇酯薄膜；必须声明厚度、牌号和层合组成。

- 选定流：聚对苯二甲酸乙二醇酯 `1ce0d026-923b-4339-a8ca-31e228475c75`
- 流属性/单位：Mass / kg
- 数量规则：PET 绝缘薄膜实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：使用 PET 薄膜路线每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_materials`
- 来源：

###### 环氧绕组浸渍树脂（`epoxy_impregnation_resin`）

实施环氧浸渍时，记录留在绕组内的树脂及生产损失；必须声明配方、溶剂含量和固化体系。

- 选定流：环氧树脂 `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- 流属性/单位：Mass / kg
- 数量规则：环氧树脂实测领用量减回收再用量和退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：环氧浸渍路线每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_materials`
- 来源：

###### 电磁组件装配用电（`electromagnetic_electricity`）

记录绕制、嵌线、连接、浸渍、固化、转子装配、平衡、压缩空气及分摊厂务服务用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于电磁组件装配的电表或分表实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_energy`
- 来源：

###### 直燃固化用天然气（`curing_natural_gas`）

只有气态天然气跨越前景边界并用于直燃固化供热时才纳入；上游供气排放不得计作工厂直接排放。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在声明参考条件下计量并归属于固化的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：直燃天然气固化路线每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铜绕组废料（`copper_scrap`）

记录作为废铜离开的清洁铜绕组边角料和报废铜线；混合废料或含绝缘层废线若处理不同必须单列。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：外运铜废料实测质量加库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electromagnetic_scrap_emissions`
- 来源：

##### 基本流

###### 固化直接排放的化石源二氧化碳（`curing_fossil_co2`）

仅纳入场内天然气固化直接排放的化石源二氧化碳。本行不得包括电网或上游燃料排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测烟气排放；或用计量天然气乘以有记录的场址特定碳因子计算直接燃烧排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：直燃天然气固化路线每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_electromagnetic_scrap_emissions`
- 来源：

### 过程：总装、测试与包装（`final_assembly_testing_packing`）

#### 输入

##### 产品流

###### 滚珠轴承或滚柱轴承（`motor_bearing`）

记录装入电动机或发电机的完整轴承；轴承类型、材料、密封和尺寸属于产品限定信息。

- 选定流：滚珠轴承或滚柱轴承 `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- 流属性/单位：Mass / kg
- 数量规则：发给装配的合格和报废轴承实测质量减退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_components_packaging`
- 来源：

###### 电机用碳刷（`carbon_brush`）

只有有刷换向直流路线才纳入，并记录具体碳刷牌号和是否包括刷架；不得使用家用刷或电解阳极身份。

- 选定流：电机用碳刷
- 流属性/单位：Mass / kg
- 数量规则：碳刷实测装入和报废质量减退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：有刷路线每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_components_packaging`
- 来源：

###### 发运用瓦楞纸箱（`corrugated_board_box`）

记录声明已包装产品中所含瓦楞纸箱；销售发运单元以外的可重复使用运输包装必须另行建模。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：用于已发运合格产品的瓦楞纸箱实测消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_components_packaging`
- 来源：

###### 总装与测试用电（`final_assembly_electricity`）

记录压力装配和工具、最终电气和机械测试、表面处理设备、包装、压缩空气及分摊厂务服务用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于总装、测试、表面处理和包装的电表或分表实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已包装成品电动机或直流发电机（`finished_motor_generator`）

本行为定量参考产出。返工品和报废品只有通过声明的放行检验后才能进入参考产品质量。

- 选定流：电动机 `a17dfc74-85fa-4cdc-bd1f-61c543d349f2`
- 流属性/单位：Mass / kg
- 数量规则：在工厂门放行的合格已包装成品归一化质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1 kg 已包装成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_finished_output`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide` | 混合产品、路线或生产线 | 首先按产品系列、技术路线及报告期细分有单独计量记录的过程、批次和物料领用。 |  |
| `allocation_causal` | 剩余共享能源及辅助作业 | 使用有记录的因果驱动因素分配剩余共享负担，例如设备时间、计量能量、处理质量或测试时间；只有质量能合理代表物理因果时才可采用质量分配。 |  |
| `allocation_scrap` | 钢、铜和铝废料 | 明确报告废料质量及去向。不得从前景投入或直接排放中扣除废料收入、再生含量收益或避免原生生产收益；任何寿命终止或替代收益必须作为单独情景披露。 |  |
| `allocation_no_double_count` | 外购子组件及外包作业 | 除非证明边界划分和不重叠，不得同时纳入外购子组件的上游数据集及该子组件在前景系统内的制造负担。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | 电工钢、轴用钢棒及铝外壳投入 | 采购、接收、领用、退料、库存及物料清单记录 | 产品代码；材料牌号；产品状态；接收质量；领用质量；退料质量；期初库存；期末库存；批次；日期 | 经校准秤量记录与企业物料记录核对 | kg | 每次接收和领用；按月汇总 | 至少连续 12 个有代表性月份或完整生产活动 | 报告场址全部部件作业及相关外包步骤 | 消耗质量 = 期初库存 + 接收 - 期末库存 - 核实退料；除以合格已包装产出质量 | 秤校准；发票或交货记录；库存核对；物料清单；批次追溯 |
| `cp_component_energy` | `component_fabrication` | 电力 | 公用表和分表记录 | 仪表编号；期初读数；期末读数；倍率；过程归属；停机；报告日期 | 校准仪表或有记录的设施分配 | kWh，换算为 MJ | 连续或每班读数；按月汇总 | 与产出相同期间 | 部件加工设备及分摊厂务服务 | 汇总核实的仪表增量，去除有记录的非生产负荷，按因果分配剩余共享负荷，换算为 MJ 后除以已包装产出 kg | 仪表校准；公用事业发票核对；分配工作表 |
| `cp_component_scrap` | `component_fabrication` | 含铁及铝废料 | 称重单、废料箱和库存记录 | 材料身份；污染状态；质量；去向；期初库存；期末库存；日期 | 校准秤及去向文件 | kg | 每次发运或清箱；按月汇总 | 与产出相同期间 | 全部部件加工废料点 | 外运质量 + 期末库存 - 期初库存；按金属和处理路线分开，再除以已包装产出 kg | 称重单；秤校准；回收商收据；质量平衡核对 |
| `cp_electromagnetic_materials` | `electromagnetic_assembly` | 磁体、电磁线、PET 薄膜和环氧树脂 | 领用、退料、配方、批次及物料清单记录 | 产品代码；化学组成或牌号；领用质量；退料质量；回收可再用料；报废量；批次；路线 | 校准称量与生产领用核对 | kg | 每批或每次领用；按月汇总 | 与产出相同期间 | 绕组、绝缘、转子/定子装配及浸渍区域 | 净消耗质量 = 领用 - 核实退料 - 回收可再用料；保留路线特定合计；除以已包装产出 kg | 秤校准；批次流转卡；配方记录；库存核对 |
| `cp_electromagnetic_energy` | `electromagnetic_assembly` | 电力与天然气 | 电表及燃气表记录 | 仪表编号；读数；电表倍率；燃气体积；燃气参考温度和压力；过程归属；报告日期 | 校准仪表或有记录的设施分配 | kWh 和 m3 | 连续或每班读数；按月汇总 | 与产出相同期间 | 电磁组件装配和固化设备及分摊厂务服务 | 按载能体和路线汇总核实增量；电力换算为 MJ；燃气按声明参考条件保留 m3；各自除以已包装产出 kg | 仪表校准；发票核对；路线及炉窑日志；分配工作表 |
| `cp_electromagnetic_scrap_emissions` | `electromagnetic_assembly` | 铜废料及固化直接二氧化碳 | 废料称重、烟气测量及燃料碳计算记录 | 铜废料质量；去向；烟气 CO2 质量；计量燃气；碳因子；氧化因子；计算版本；报告日期 | 校准秤；可用时直接烟气测量；否则依据计量燃料的有记录计算 | kg | 每次废料发运及每个排放报告间隔；按月汇总 | 与产出相同期间 | 仅绕组及场内固化作业 | 按库存平衡计算铜废料；采用实测直接 CO2，或计量燃料乘以有记录的场址因子；排除上游排放；除以已包装产出 kg | 称重单；分析仪校准；燃气表记录；因子出处；计算审计轨迹 |
| `cp_final_components_packaging` | `final_assembly_testing_packing` | 轴承、碳刷和瓦楞纸箱 | 部件领用、退料、物料清单及包装记录 | 产品代码；部件类型；碳刷路线；领用质量；退料质量；报废量；包装单元数；包装质量 | 校准称量及可追溯物料领用 | kg | 每批或每次领用；按月汇总 | 与产出相同期间 | 总装及包装区域 | 原子部件净消耗质量 = 领用 - 核实退料；除以已包装产出 kg，并保留技术适用性 | 物料清单；路线流转卡；秤校准；包装规格 |
| `cp_final_energy` | `final_assembly_testing_packing` | 总装和测试用电 | 公用表、测试台及设备运行记录 | 仪表读数；测试台用电；运行时间；产品系列；不合格测试；报告日期 | 校准分表或有记录的因果分配 | kWh，换算为 MJ | 可用时逐次测试并与月度仪表核对 | 与产出相同期间 | 总装、表面处理、测试、包装设备及分摊厂务服务 | 汇总直接读数及按因果分配的共享负荷；包括不合格测试；换算为 MJ 后除以已包装产出 kg | 仪表校准；测试日志；发票核对；分配工作表 |
| `cp_finished_output` | `final_assembly_testing_packing` | 已包装成品参考产品 | 最终检验、放行、包装及发运记录 | 产品标识；分支；额定值；技术；产品净质量；包装质量；合格数量；不合格数量；放行日期 | 与放行检验关联的校准称量 | kg | 每个放行批次；按月汇总 | 与所有投入相同期间 | 报告工厂放行的全部合格产品 | 已包装产出质量 = 合格产品净质量 + 所含发运包装质量；将数据包归一化为恰好 1 kg | 秤校准；签署检验记录；铭牌记录；包装规格；发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_normalization` | 每项质量产品投入及废料产出 | 归一化交换 = 核对后的净交换质量 / 合格已包装产出质量 | 适用材料或废料协议；`cp_finished_output` | 每 1 kg 已包装成品的交换 kg 数 |  |
| `calc_electricity_normalization` | 每个电力行 | 归一化电力 = 核对后的 kWh × 3.6 / 合格已包装产出质量 | 适用能源协议；`cp_finished_output` | 每 1 kg 已包装成品的电力 MJ 数 |  |
| `calc_gas_normalization` | `curing_natural_gas` | 归一化燃气 = 声明参考条件下计量 m3 / 合格已包装产出质量 | `cp_electromagnetic_energy`；`cp_finished_output` | 每 1 kg 已包装成品的天然气 m3 数 |  |
| `calc_direct_co2` | `curing_fossil_co2` | 有效时使用实测烟气直接 CO2；否则把计量燃气乘以有记录的场址特定化石碳因子和氧化依据，再除以合格已包装产出质量 | `cp_electromagnetic_scrap_emissions`；`cp_finished_output` | 每 1 kg 已包装成品的直接化石源 CO2 kg 数 |  |
| `calc_reference_output` | `finished_motor_generator` | 所有交换除以合格已包装产出质量，使定量参考产出恰好等于 1 kg | `cp_finished_output` | 1 kg 已包装成品 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及路线条件行 | 保留产品分支、铭牌额定输出及依据、换向和磁体技术、工作制、额定电压、冷却、外壳、是否含内置控制器、产品质量、包装状态及工厂门。 | 铭牌、产品规格、物料清单、路线流转卡及放行记录；电机术语和测试语境可依据 `iea-4e-peet-motor-regulations-2022` 核查 |
| `dq_temporal` | 所有前景记录 | 使用同一代表性期间，通常至少连续 12 个月；若采用较短生产活动，应说明季节、启停、维护及产品组合影响。 | 带日期的仪表、库存、生产、检验及发运记录 |
| `dq_completeness` | 所有跨界交换 | 核对材料、能源、废料、直接排放、不合格品和产出记录。每个其他交换应原子化报告，并披露缺失上游数据集或记录。 | 质量平衡工作表、能源核对、排放登记及完整性清单 |
| `dq_measurement` | 计量和称量值 | 识别仪器、单位、校准状态、覆盖情况、估算或分配及换算因子；不得用审查元数据中尚未解决的外部范围替代缺失前景记录。 | 校准证书、仪表日志、称重单及计算审计轨迹 |
| `dq_geography_technology` | 前景及连接的上游数据集 | 匹配生产地理、电力供应、材料牌号、产品状态、部件技术及交付边界；说明每个代理。 | 供应商声明、数据集元数据、采购记录及代理说明记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_scope` | 参考产品 | 确认销售参考产品是三项覆盖分支之一的完整产品，且不是光伏发电机、纯交流设备、发电机组、旋转换流机、单独零件或更大的宿主设备。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_mass` | 定量参考 | 确认合格产品净质量加所含发运包装质量等于用于把所有行归一化至恰好 1 kg 的分母，并报告两项质量。 |  |
| `validate_route_applicability` | 条件适用行 | 确认钕铁硼和铁氧体磁体行、碳刷、天然气固化及直接化石源 CO2 只出现在适用声明路线；除非产品确实包含两种磁体化学组成，互斥磁体行不得同时填值。 |  |
| `validate_atomic_inventory` | 过程清单 | 确认每种新增材料、部件、载能体、废物和基本流排放均由一个具体原子交换表示，并有自身属性、单位、数量方法和身份解析状态。 |  |
| `validate_mass_energy_reconciliation` | 前景记录 | 在共同报告期内核对物料领用、库存变化、产品内质量、废料、不合格品、已包装产出、电力及燃气；调查并记录差额。 |  |
| `validate_uuid_semantics` | 含 UUID 的行 | 复用前确认公开 state-100 身份、英文和中文 baseName、流类型、分类、参考属性、单位组、产品状态、地理、技术和 generalComment；UUID 为空的行保持未解决，不得使用代理。 |  |
| `validate_allocation` | 共享过程及废料 | 确认已先尝试细分，每项剩余分配均有因果驱动因素和披露比例，废料按毛量报告，且上游或回收负担不重复计算。 |  |
| `validate_source_boundary` | 直接和上游排放 | 确认只有场内排放属于前景直接基本流，电网和燃料供应排放保留在连接的上游数据集中。 | `nordelof-tillman-2018-motor-manufacturing` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset; lifecyclemodel 中的前景部件 |
| allowed_use | 与产品分支、技术、额定依据、地理、报告期、边界、产品质量及包装状态相匹配的完整 CPC 46111 产品工厂门生产 |
| excluded_use | 光伏发电机；纯交流设备；发电机组；旋转换流机；单独零件；使用阶段电力或寿命性能；仅以未披露代理表示的产品或地理 |
| required_metadata | canonical PCR id；参考 UUID；产品分支；额定输出及依据；电动机/发电机功能；换向和磁体技术；工作制；额定电压；冷却；外壳；是否含内置控制器；净质量和已包装质量；地理；报告期；内部及外包作业；包装状态；分配；截断；数据质量评级 |
| required_quality_disclosure | 前景记录覆盖；仪器校准；时间代表性；材料和能源核对；路线适用性；上游数据集匹配及代理；未解决 UUID；未解决范围证据；直接与上游排放划分 |
| update_trigger | 产品分支、设计或物料清单、磁体或换向技术、额定输出依据、生产路线、场址、电力或燃料供应、分配、包装、报告期或数据质量发生实质变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 3.0 官方类别身份、相邻类别排除及光伏发电机排除项 |
| `un-cpc-v1-1-chinese-2004` | `official_guidance` | https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | 联合国中文版 CPC 已确立的 46111 中文术语；CPC 3.0 光伏排除项由当前英文来源翻译 |
| `nordelof-tillman-2018-motor-manufacturing` | `literature` | https://doi.org/10.1007/s11367-017-1309-8 | 电机工厂过程拆分、部件加工、绕制、浸渍、装配、测试以及工厂门到工厂门/上游连接逻辑的同行评议全文证据；路线和规模差异必须以前景信息限定 |
| `iea-4e-peet-motor-regulations-2022` | `official_guidance` | https://www.iea-4e.org/peet/publications/4e-peet-status-of-electric-motor-regulations-2022/ | 直流电动机、工作制与工作制类型的机构术语、技术范围，以及保留测试与性能依据的要求 |
