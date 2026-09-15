---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-exc-21bad56b
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 自行供能的便携式电灯零件（自行车或机动车辆用者除外）；未另分类的灯具和照明装置零件；未另分类的发光标志、发光铭牌及类似品零件

## 1. 范围与适用性

本 PCR 适用于 CPC 46542 所代表边界内的离散金属或金属与少量其他组件组成的零件在工厂大门处的生产；这些零件的专用功能是装入自行供能的便携式电灯、灯具和照明装置、发光标志、发光铭牌或类似发光制品。适用产品包括作为可销售零件供应的成品备件和生产用零件，例如成形壳体、支架、反射器、盖件、框架、支承触点的金属件及具有明确产品身份的类似非光源零件。

代表性路线为：铝板材经成形或机加工，在适用时进行碱洗和粉末涂装，随后检验并在工厂大门处放行。具体数据包必须声明实际零件号、配套产品、材料与合金、成形技术、表面处理、涂层、电气内容、尺寸、可销售状态、地域和生产期间。其他金属坯料或表面处理体系必须实例化为独立的原子流和技术特定过程，不得与代表性流合并。

完整电灯和照明装置、自行车或机动车辆用灯具零件、电灯泡或放电灯、弧光灯、作为独立产品出售的 LED 光源或模块、纯玻璃零件、纯塑料零件、外购物料的上游生产、分销、安装、使用、维护和寿命终结不属于本前景门到门规则。这些环节可在研究目标需要时作为独立数据集连接。`un-cpc-3-0-structure-2025` 确立分类身份；`us-epa-mpm-development-document-2003` 和 `eu-jrc-stm-bref-2006` 支持代表性操作顺序及条件性表面处理边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-portable-electric-lamps-designed-to-function-by-their-own-source-of-energy-exc-21bad56b |
| classification_refs | CPC 3.0: 46542（`exact`） |
| covered_products | 专用于自行供能的便携式电灯、灯具和照明装置、发光标志、发光铭牌及类似发光制品的可销售金属或金属与少量其他组件组成的零件，但不得属于完整灯具、光源、纯玻璃零件或纯塑料零件 |
| excluded_products | 完整电灯和照明装置；自行车或机动车辆用灯具零件；作为独立产品出售的电灯泡、放电灯、弧光灯或 LED 光源；纯玻璃零件；纯塑料零件；未证明照明设备用途的通用金属制品 |
| representative_product | 用于照明装置的粉末涂装铝制壳体、支架、反射器、框架或类似加工金属零件，作为一个可销售零件供应 |
| production_route | 铝板材接收；切割、冲压和/或机加工；按需使用切削液；条件性碱洗和漂洗；条件性粉末涂装与电加热固化；检验及工厂大门放行 |
| market_state | 制造工厂大门处干燥、完成检验的可销售零件；尚未装入完整电灯或标志 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应一个成品零件，使其在指定照明产品或发光标志产品中发挥已声明的机械、光学支承、防护、安装、触点支承或外壳功能 |
| How much | 1 kg 可销售零件净质量，不含运输包装 |
| How well | 符合已声明的图纸、材料/合金、尺寸和公差、表面处理/涂层、配套产品接口、电气内容声明及放行检验准则 |
| How long or cycle | 一次工厂大门交付；零件层级不计入使用阶段服务期限，任何所需耐久性或循环额定值均须作为产品限定信息声明 |
| reference_flow_link | 一千克成品照明设备零件输出 `finished_lighting_part` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 成品照明设备零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件号与功能；配套电灯、照明装置、标志或铭牌类型；材料与合金；净质量；尺寸和公差；成形与机加工路线；表面预处理；涂层或无涂层状态；电气内容；工厂大门地域；生产期间；如报告再生含量，其声明和方法；放行准则；运输包装排除 |

构建前景数据包时，`必需限定信息` 中的每一项均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少必需限定信息时，该数据包的参考流不完整。

Tiangong 审计回执 `fd0dd520-46b8-49d5-b2e6-427dc6c94d03` 对五个公开 state-100 候选项进行了直接读取，但未找到精确的参考产品流。排名最高的候选项以 `classification_mismatch` 被拒绝，理由为：该公开流是铝/铝合金条、杆和型材（CPC 41532），并非所分配类别中的照明设备成品零件。其余候选项同样属于上游铝材料或无关铝产品，因此 `finished_lighting_part` 继续明确标记为未解决。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及所有按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按工厂大门放行时验收合格的可销售零件实测净质量归一化。参考质量不包括托盘、纸箱、保护膜及其他运输包装。 |
| `batch_to_reference_mass` | 批次记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference flow | 每项批次交换除以同一批次或有据可查的代表性汇总期间内的合格产品净质量。返工和不合格品质量须与合格输出分开。 |
| `electricity_energy_conversion` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表记录的电能，并按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ。不得把电力换算为质量基准。 |
| `water_mass_conversion` | 工艺用水和清洗废水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接测量质量。如以体积计量，须记录温度、密度来源及体积到质量的换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购铝板材及其他已声明的工艺投入已送达零件制造场址 |
| starting_condition_role | 作为前景零件加工的工厂大门投入；上游生产由连接的数据集表示 |
| product_classification_scope | 符合第 1 节语义边界的照明设备零件；CPC 46542 仅作为分类语境，不能替代已声明的产品限定信息 |
| recursive_input_rule | 若某项投入本身是在本 PCR 边界内出售的零件，应把该具体零件及其供应商数据集记作外购产品投入；不得在使用过程内重复建立其制造，也不得与其他零件汇总 |
| upstream_dataset_requirement | 为铝板材、电力、水、化学品、涂料、切削液及处理服务连接与地域、技术、材料状态、再生含量和供应商相适配的上游数据集 |
| disclosure | 声明已纳入操作、未采用的条件性操作、外包步骤、分配、废铝所有权与去向、废水处理、粉末回收、电力组合、地域、期间及相对于代表性路线的全部替代 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入材料接收、切割/冲压/机加工、相关清洗、条件性表面预处理与涂装、检验、内部转移、可销售输出、铝废料、废切削液、清洗废水和粉末涂装废弃物，直至工厂大门放行。 | `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006` |
| `boundary_conditional_finish` | 表面预处理与涂装 | 仅在已声明产品进行碱洗/漂洗和粉末涂装时纳入 `surface_preparation_and_coating`。若省略或更换处理，须标明实际表面处理路线，并为其编写独立原子投入与输出。 | `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006` |
| `boundary_upstream_linkage` | 外购投入及外包操作 | 上游生产和外包操作保持在前景单元过程之外，但须连接地域、技术和产品状态一致且可追溯的数据集；不得仅因投入 UUID 未解决而将其截断。 | `eu-pef-recommendation-2021-2279` |
| `boundary_exclusions` | 下游与基础设施 | 运输包装不计入参考质量；分销、安装、完整灯具组装、使用、维护、寿命终结、建筑物、资本设备和员工出行均排除，除非研究目标明确纳入并作为独立过程报告。 | `eu-pef-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_part_fabrication` | 金属零件切割、成形与机加工 | `required` | 代表性加工铝制零件必须纳入；具体应用须使原子坯料投入和操作与所声明零件一致 | 前景材料成形 | 等待下一适用操作的加工零件质量 |
| `surface_preparation_and_coating` | 碱性表面预处理与粉末涂装 | `conditional` | 仅在已声明零件进行碱洗/漂洗和粉末涂装时纳入；其他表面处理应采用单独声明的技术特定过程 | 前景清洗与有机涂装 | 等待放行检验的涂装零件质量 |
| `inspection_and_release` | 最终检验与工厂大门放行 | `required` | 始终纳入；识别来自前一路线的适用加工零件投入 | 前景质量放行 | 1 kg 验收合格的可销售零件 |

下列详细行描述一条代表性铝板材/粉末涂装路线，不把产品变体与材料和表面处理选择相乘展开。其他产品构造须以具体原子行替换或扩展代表性路线，同时保留相同参考流和数据质量规则。

### 过程：金属零件切割、成形与机加工（`metal_part_fabrication`）

#### 输入

##### 产品流

###### 铝板材坯料（`aluminium_sheet_input`）

外购铝板材作为代表性金属坯料跨越场址边界。state-100 身份为厚度超过 0.2 mm 的板材；合金、状态、厚度、再生含量和供应商状态仍为前景限定信息。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录投入生产批次的交付板材质量，扣除未使用而退回库存的坯料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`us-epa-mpm-development-document-2003`

###### 成形与机加工电力（`forming_electricity`）

切割、冲压、成形、机加工和局部抽排所用计量电力作为电能跨越过程边界。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录分表电量；如无分表，则按已记录的机器时间从完成核对的生产区电表分配至所声明批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-mpm-development-document-2003`

###### 切削液（`cutting_fluid_input`）

在机加工使用外供冷却液或润滑剂时记录切削液，并声明配方、稀释和循环使用情况。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录加入批次的新鲜浓缩液和补加液，不含内部循环液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_fluid_records`
- 来源：`us-epa-mpm-development-document-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 等待下一操作的加工零件（`formed_part_release_output`）

成形零件离开加工过程并进入所声明的下一操作。该产品特定内部流须建立前景流身份，不得使用近似公共 UUID。

- 选定流：等待下一操作的加工照明零件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录转出加工过程的合格和不合格零件实测质量，并单独标记合格转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_records`
- 来源：`us-epa-mpm-development-document-2003`

##### 废物流

###### 分类收集的铝加工废料（`aluminium_scrap_output`）

离开加工过程的铝制边角料、冲孔料和已分离切屑作为铝废料记录，并与成品及其他废物分开。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录离开过程的称量铝废料，扣除直接返回同一批次的清洁材料；声明污染情况和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_waste_records`
- 来源：`us-epa-mpm-development-document-2003`

###### 废切削液（`spent_coolant_output`）

从循环系统或批次排出并离开过程去回收或处理的废切削液应予记录。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录退出使用并转移出过程的质量，不含仍在系统内循环的切削液库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_waste_records`
- 来源：`us-epa-mpm-development-document-2003`

##### 基本流

### 过程：碱性表面预处理与粉末涂装（`surface_preparation_and_coating`）

#### 输入

##### 产品流

###### 进入表面处理的加工零件（`formed_part_surface_input`）

产品特定加工零件作为内部产品流进入条件性表面处理过程。

- 选定流：等待表面处理的加工照明零件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录进入表面处理批次的合格零件实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_records`
- 来源：`us-epa-mpm-development-document-2003`

###### 碱洗工艺用水（`process_water_input`）

供应至清洗槽、漂洗和补水的水作为产品投入跨越过程边界；内部循环水不得重复计入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录进入表面处理过程的新鲜水和补加工艺用水，不含内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_material_records`
- 来源：`us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

###### 氢氧化钠清洗剂（`sodium_hydroxide_input`）

所声明清洗槽使用氢氧化钠时，将其作为一个具体碱性清洗化学品记录，并声明浓度及溶液质量基准。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：根据采购和补加记录计算并记录 100% 氢氧化钠当量质量；同时保留供应溶液质量和浓度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_material_records`
- 来源：`us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

###### 粉末涂料（`powder_coating_input`）

进入喷涂室的新鲜粉末涂料须与内部回收的过喷粉末分开记录。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录从库存投加的新鲜粉末，不含在同一前景过程内循环的回收粉末；声明树脂和颜料体系
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_material_records`
- 来源：`us-epa-mpm-development-document-2003`

###### 表面处理与涂装电力（`surface_electricity`）

条件性过程中泵、通风、干燥、粉末施涂、回收设备和电加热固化所用电力均须记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录分表电量；如无分表，则按有据可查的运行时间和产量从完成核对的生产线电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 等待放行检验的涂装零件（`finished_part_surface_output`）

涂装产品作为产品特定内部流离开条件性表面处理过程。

- 选定流：等待放行检验的粉末涂装照明零件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录固化并冷却后从涂装线转出的干燥零件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_transfer_records`
- 来源：`us-epa-mpm-development-document-2003`

##### 废物流

###### 清洗与漂洗废水（`cleaning_wastewater_output`）

离开碱洗和漂洗的废水须在场内或场外处理前作为一个具体工艺废水流记录。原始记录可分别跟踪废槽液和漂洗水，但仅在组成与去向相容时汇总。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录内部回用后离开过程的实测废水质量，并保留 pH、溶解金属信息和处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_output_records`
- 来源：`us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006`

###### 粉末涂装废弃物（`powder_coating_waste_output`）

离开过程的未回收过喷粉末和喷涂室清理粉末，须与内部回收粉末分开记录。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录转移去处理或处置的粉末涂装废弃物称量质量，扣除返回涂料进料的粉末
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_output_records`
- 来源：`us-epa-mpm-development-document-2003`

##### 基本流

### 过程：最终检验与工厂大门放行（`inspection_and_release`）

#### 输入

##### 产品流

###### 等待放行的加工零件（`finished_part_inspection_input`）

最后一个适用的加工或表面处理步骤向放行检验提供产品特定零件。

- 选定流：等待放行检验的加工照明零件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录进入最终检验的干燥净质量，并与合格、返工和不合格结果核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：`us-epa-mpm-development-document-2003`

###### 检验电力（`inspection_electricity`）

尺寸、光学、涂层、导通性或其他已声明放行设备所用电力须与加工电力分开记录。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：记录检验分表电量；如无分表，则按有据可查的检验时间从完成核对的试验区电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-mpm-development-document-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品照明设备零件（`finished_lighting_part`）

验收合格零件在工厂大门处离开前景系统。尚未确认精确的公共 state-100 参考产品 UUID，因此最终数据集须在发布前创建或解析产品特定流。

- 选定流：成品照明设备零件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：作为参考流归一化输出，验收合格产品净质量正好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格的成品照明设备零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享加工、表面处理和检验过程 | 首先按过程、生产线、批次或零件族细分电表、批次记录和废物记录；凡技术上可行，所声明产品均应承担直接计量负荷。 | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_driver` | 剩余共享前景负荷 | 无法细分时，电力按机器或生产线时间及额定/实测负荷分配；清洗与涂装负荷按处理表面积或槽液通过量分配；其他质量驱动负荷按合格与不合格处理质量之和分配。记录因果驱动量并开展敏感性分析。 | `eu-pef-recommendation-2021-2279` |
| `allocation_scrap_and_recovery` | 铝废料、回收粉末和内部循环液 | 记录数量、所有权和去向。内部循环不得作为新投入重复计入，也不得在本门到门过程内计入避免原生材料的抵扣。任何回收或替代抵扣仅可按下游生命周期模型所声明方法应用。 | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_last_resort` | 缺少可辩护物理驱动量的多产品操作 | 仅在细分和因果物理关系均确实不可得时使用经济分配；采用同期净价格，报告分配份额，并检验价格波动敏感性。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `metal_part_fabrication` | 铝板材投入 | 采购收货单加批次领退料记录 | material UUID; alloy; temper; thickness; recycled-content basis; supplier; issued mass; returned mass; batch id; timestamp | 将经校准的收货或库存秤记录与生产领料和退料记录核对 | kg | 每批收货和生产批次 | 至少 12 个代表性月份；短期生产则覆盖整个生产期 | 每个制造场址和所声明零件族 | 汇总参考产品批次净领料质量，再按合格净输出质量归一化 | 秤校准；材料证书；供应商批号；库存核对；异常记录 |
| `cp_energy_records` | `metal_part_fabrication`; `surface_preparation_and_coating`; `inspection_and_release` | 电力投入 | 生产电力计量与分配记录 | meter id; opening and closing reading; multiplier; operating time; line state; batch id; electricity supplier and grid geography | 优先分表计量；否则核对场址总表，并按有据可查的机器/生产线/试验时间和负荷分配 | kWh and MJ | 每批或每班；每月核表 | 至少 12 个代表性月份；短期生产则覆盖整个生产期 | 每个场址和过程区域 | 有计量时扣除空闲/非生产负荷，仅分配剩余共享负荷，将 kWh 换算为 MJ，并按合格质量归一化 | 电表校准；发票；电表核对；停机记录；分配工作表 |
| `cp_cutting_fluid_records` | `metal_part_fabrication` | 切削液投入 | 采购、领用与库存记录 | product identity; concentrate mass; make-up mass; dilution water; opening and closing inventory; recirculation status; batch id | 核对采购、领用和库存记录；排除仍在内部循环的流体 | kg | 每次加液和废液转移 | 至少 12 个代表性月份；短期生产则覆盖整个生产期 | 每套机加工系统 | 新鲜流体净加入量除以合格参考产品质量 | 产品安全/技术说明；库存核对；批次记录 |
| `cp_intermediate_transfer_records` | `metal_part_fabrication`; `surface_preparation_and_coating` | 内部零件输出与投入 | 转移单与工单记录 | part id; source process; destination process; accepted mass; rejected mass; rework mass; timestamp | 在每个过程转移点称量，或采用经验证的件数到质量换算 | kg | 每批转移 | 完整生产期 | 每个前景过程边界 | 核对源过程输出与目标过程投入，并解释时间或库存差异 | 秤校准；转移单；工单核对；返工记录 |
| `cp_fabrication_waste_records` | `metal_part_fabrication` | 铝废料和废切削液 | 转移、联单与暂存记录 | waste UUID; container tare/gross/net mass; alloy/contamination; coolant type; destination; manifest/receipt; batch link | 称量每个转移容器并核对暂存量变化 | kg | 每次容器转移并每月盘存 | 至少 12 个代表性月份；短期生产则覆盖整个生产期 | 每个场址和废物去向 | 期初库存加产生量减期末库存和退回量，再按合格产品质量归一化 | 秤校准；废物转移单；回收/处理凭证；库存核对 |
| `cp_surface_material_records` | `surface_preparation_and_coating` | 工艺用水、氢氧化钠、粉末涂料 | 计量、采购、领用与槽液记录 | meter readings; chemical product mass; active concentration; powder issue/return; recovered powder; bath id; batch id | 计量用水，并核对化学品/涂料采购、领用、退回和槽液记录 | kg and concentration fraction | 每批或每次槽液添加；每班记录水表 | 至少 12 个代表性月份；短期生产则覆盖整个生产期 | 每条处理和涂装线 | 仅计新鲜边界投入；供应溶液质量乘经验证质量分数计算活性 NaOH 质量；按合格输出质量归一化 | 表/秤校准；化学品证书；浓度检测；库存与槽液记录 |
| `cp_surface_output_records` | `surface_preparation_and_coating` | 清洗废水和粉末涂装废弃物 | 排放、废物转移与回收记录 | wastewater mass/volume; density; pH; dissolved-metal indicator; treatment destination; powder waste net mass; recovered powder; batch/date | 计量废水或记录槽车/储槽转移；称量粉末废物；核对内部回用和回收 | kg | 每次排放或废物转移；每月核对 | 至少 12 个代表性月份；短期生产则覆盖整个生产期 | 每条生产线、处理路线和去向 | 内部回用/回收后的外部净废物输出，按合格输出质量归一化 | 表/秤校准；实验室结果；废物转移单；处理凭证；回收核对 |
| `cp_release_records` | `inspection_and_release` | 检验投入和合格参考产品 | 生产与放行检验记录 | part id; input mass/count; inspected count; accepted count/mass; rework; reject; drawing revision; inspection criteria; timestamp | 使用经校准的秤或经验证的件数到质量换算及受控检验记录 | kg and item count | 每个生产批次 | 完整生产期 | 每个场址和零件号 | 核对投入与合格、返工和不合格结果；所有交换按合格净质量归一化 | 秤校准；检验计划；签署的放行记录；不合格与返工记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化数量 = 与期间或批次匹配的交换量 / `finished_lighting_part` 合格净质量；保留原始数量和共同时间/批次边界 | 交换记录；合格产品净质量 | 每 1 kg 参考流的交换量 | `eu-pef-recommendation-2021-2279` |
| `calc_net_material_input` | `aluminium_sheet_input` | 铝板材净投入 = 领用板材质量 - 未使用退库板材质量；不得扣除已产生废料 | 领用质量；未使用退回质量 | 铝板材净投入 | `us-epa-mpm-development-document-2003` |
| `calc_active_naoh` | `sodium_hydroxide_input` | 100% NaOH 当量质量 = 供应清洗溶液质量 × 经验证的 NaOH 质量分数 | 供应溶液质量；证书或实测质量分数 | 活性氢氧化钠质量 | `eu-jrc-stm-bref-2006` |
| `calc_electricity_mj` | 所有电力行 | 电力（MJ）= 计量电力（kWh）× 3.6 | 计量或分配的 kWh | MJ 电力 |  |
| `calc_mass_reconciliation` | 加工、表面处理和检验 | 在同一边界内，零件/材料投入须与合格输出、内部转移、废料/废物、留存库存和有据可查的质量变化核对；应调查差异，不得强行闭合 | 材料与中间投入；合格输出；废物；库存变化 | 质量平衡残差和完整性发现 | `us-epa-mpm-development-document-2003` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料流 | 保留零件号、配套产品功能、图纸版次、材料/合金、尺寸、表面处理、UUID 决策和产品状态；不得将代表性铝制路线用于未声明的替代材料。 | 产品图纸和物料清单；材料证书；Tiangong state-100 直读审计 |
| `dq_measurement` | 仪表和秤 | 使用经校准的仪表/秤，或记录经验证的换算；保留原始读数、倍率、密度/浓度数据、停机和分配工作表。 | 校准证书；仪表记录；称量单；实验室或供应商证书 |
| `dq_temporal` | 前景年度或生产期数据 | 除非生产期更短，否则覆盖至少 12 个代表性月份；声明生产期日期、停产、异常批次和代表性。 | 生产日历；批次台账；异常记录 |
| `dq_completeness` | 所有必需和适用的条件性过程 | 核对投入、内部转移、合格输出、不合格品、废物和库存变化。仅在确实不存在交换时报告零值，不得因 UUID 或计量缺失而报告零值。 | 质量与能量核对；适用性清单；未解决流登记表 |
| `dq_geography_technology` | 前景及连接的上游数据集 | 匹配场址地域、电力供应、材料状态、表面处理技术、废物处理和参考期间；记录任何近似数据及其影响。 | 数据集元数据；供应商记录；工艺规范；依照 `eu-pef-recommendation-2021-2279` 的数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | 产品身份与参考流 | 如缺少 canonical PCR id、零件功能、配套产品、材料/合金、表面处理、净参考质量、工厂大门状态或必需限定信息，或其相互矛盾，则校验失败。 | `un-cpc-3-0-structure-2025`; `eu-pef-recommendation-2021-2279` |
| `validate_process_applicability` | 过程图 | 要求两个必需过程，并根据声明路线判断条件性表面处理过程。若采用另一表面处理路线，须有包含具体原子流的技术特定过程并声明替代。 | `us-epa-mpm-development-document-2003`; `eu-jrc-stm-bref-2006` |
| `validate_atomic_inventory` | 清单行 | 每行只能有一个物理、化学、废物或能源交换；须有经验证的 state-100 UUID 或对应 manifest 未解决条目；拒绝合并的公用工程、材料、废物、排放或路线选择标签。 |  |
| `validate_units_and_normalization` | 数量与单位 | 质量行须用 kg，电力须用 MJ，换算须有记录，须使用同一合格产品分母，且每个采集或计算的前景行须连接采集协议。 | `eu-pef-recommendation-2021-2279` |
| `validate_reconciliation` | 材料、中间流、废物和能源记录 | 报告已接受检查、跳过检查和残差；批次/时间边界不一致且未核对，或存在不明材料损失、循环流重复计数或废物去向缺失而使完整性无法判断时，校验失败。 | `us-epa-mpm-development-document-2003` |
| `validate_range_evidence` | 定量 QA 范围 | manifest 中所有外部范围需求须保持未解决，直至至少两个相互独立、边界、功能单位和产品状态相容且已核验原文的来源支持有理据的综合。不得用单个案例、重复单值或法规限值建立范围。 |  |
| `validate_allocation` | 共享负荷与回收 | 要求优先细分；剩余分配须有记录的因果物理驱动量；回收数量和去向须分列；任何最后手段的经济分配均须有敏感性证据。 | `eu-pef-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明照明设备零件的前景工厂大门生产数据集 |
| downstream_use | `secondary_dataset`; 经审查和发布后可作为 `background_dataset` |
| allowed_use | 当零件功能、材料、表面处理、地域、技术、时间和工厂大门边界相容时，可连接至完整电灯、照明装置、发光标志、建筑产品或其他生命周期模型 |
| excluded_use | 对不同零件直接比较；作为完整电灯或照明装置使用；替代纯玻璃、纯塑料、车辆照明或光源数据集；材料或表面处理未知时使用；UUID 或范围证据阻塞尚未解决时作为已发布默认数据使用 |
| required_metadata | PCR id 与版本；零件号/功能；配套产品；图纸版次；材料/合金；净质量；尺寸；成形与表面处理路线；涂层；电气内容；纳入/外包过程；场址/地域；期间；电力供应；再生含量方法；分配；废料和废物去向；UUID 状态 |
| required_quality_disclosure | 一手数据占比；测量和校准方法；时间覆盖；缺失数据和近似；过程适用性；材料/能源核对；分配敏感性；未解决 UUID；未解决外部范围证据；代表性和审查状态 |
| update_trigger | 零件设计或材料变化；质量变化超过研究显著性阈值；成形或表面处理技术、涂层化学、供应商/再生含量基准、电力供应、场址/地域、废物处理或分配方法变化；获得精确 Tiangong UUID 或范围证据 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，*Central Product Classification Version 3.0 Structure*，2025 年 6 月 30 日，[官方 CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv) | CPC 46542 的精确分类身份和英文名称；源文件字节已按 SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` 核验 |
| `us-epa-mpm-development-document-2003` | `official_guidance` | 美国环境保护署，*Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products & Machinery Point Source Category*，EPA-821-B-03-001，2003，[官方 PDF](https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf) | 已核验原文第 4-12 至 4-14 页关于成形、机加工、清洗、表面预处理、有机涂装、装配/检验、工艺顺序、废物与废水的说明 |
| `eu-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会联合研究中心，*Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*，2006 年 8 月通过，[官方 BREF 页面](https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics) | 已核验官方页面关于水性电解/化学表面处理及相关活动的原文；支持条件性表面处理边界和采集重点 |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | 欧盟委员会，*Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods*，[官方合并文本](https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng) | 已核验功能单位/参考流、系统边界、多功能性层级、公司特定数据、数据质量、归一化和校验原则的官方原文 |
