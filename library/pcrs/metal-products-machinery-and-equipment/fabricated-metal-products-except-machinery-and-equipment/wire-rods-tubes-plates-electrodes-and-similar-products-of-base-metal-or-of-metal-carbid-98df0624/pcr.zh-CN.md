---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.wire-rods-tubes-plates-electrodes-and-similar-products-of-base-metal-or-of-metal-carbid-98df0624
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 以焊剂涂面或作芯、由贱金属或金属碳化物制成、供软钎焊、硬钎焊、焊接或金属（或金属碳化物）熔敷用的丝、条、管、板、焊条及类似制品；由团聚贱金属粉末制成、供金属喷镀用的丝和条

## 1. 范围与适用性

本 PCR 适用于以下成品在供应商工厂门口边界内的生产：供软钎焊、硬钎焊、焊接、堆焊或熔敷用、由焊剂涂覆或以焊剂作芯的贱金属或金属碳化物耗材，以及供金属喷镀用、由团聚贱金属粉末制成的丝和条。覆盖形态包括药皮焊条、涂药条、药芯焊丝、药芯条，以及焊剂涂层或芯部构成产品不可分割部分的类似管或板。所代表产品必须声明生产路线和每一种配方成分。

本 PCR 不包括无焊剂涂层的实芯焊丝、单独销售的颗粒焊剂、焊接或热喷涂服务、焊接和喷涂设备、电气用途的石墨或碳电极，以及被连接或涂覆制品的制造、使用、维修或寿命终止阶段。外购金属、粉末、粘结剂、能源、水和包装的上游生产通过关联的供应商数据集表示，不在前景制造过程中重复构建。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.wire-rods-tubes-plates-electrodes-and-similar-products-of-base-metal-or-of-metal-carbid-98df0624 |
| classification_refs | CPC 3.0：42950（精确分类语境；本 PCR 不创建已接受映射） |
| covered_products | 供软钎焊、硬钎焊、焊接、堆焊或熔敷用、由焊剂涂覆或以焊剂作芯的贱金属或金属碳化物丝、条、管、板、焊条及类似耗材；供金属喷镀用、由团聚贱金属粉末制成的丝和条 |
| excluded_products | 无涂层实芯丝；单独销售的颗粒焊剂；焊接或喷涂服务与设备；石墨或碳质电气电极；下游被连接或涂覆制品 |
| representative_product | 具有已声明金属外皮、焊剂或金属粉末芯、成品直径、卷装形式和用途的药芯焊丝 |
| production_route | 外购进料制备和配方；路线特定的涂覆或带/管成形与填充；按需进行合缝焊接、拉拔和热处理；精整、检验和包装 |
| market_state | 制造工厂门口处已干燥并经质量放行的耗材，按已声明的盘卷、卷、桶、捆或箱交付，并声明配方、尺寸、含水状态和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个位于覆盖产品边界内、经质量放行的焊接、硬钎焊、软钎焊、熔敷或金属喷镀耗材 |
| How much | 1 kg 成品耗材净质量，不含可分离包装 |
| How well | 满足已声明产品规范对成分、涂层或填充比、尺寸、含水状态、卷装或单件形式及预期工艺/用途的要求 |
| How long or cycle | 制造工厂门口的一次交付量；不按使用寿命或使用循环归一化 |
| reference_flow_link | 单一参考产品输出 `reference_product_output`，归一化为 1 kg 可销售产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 确切覆盖产品形态；焊接、硬钎焊、软钎焊、熔敷或喷涂用途；适用产品标准和分类；外皮/芯部/涂层成分；已声明危险成分；涂层或填充比；直径和尺寸公差；含水状态；适用时的合缝形式和热处理；盘卷、卷、桶、捆或箱形式；净质量；制造场址和地理范围；生产期；供应商工厂门口状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。选定的 TianGong 流是精确的代表性药芯焊丝标识，并不表示每一种覆盖的药皮焊条、条、管或板都具有相同产品标识；其他覆盖形态在发布前必须具有其自身经审计的精确产品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和质量型清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有质量交换均归一化至 1 kg 经质量放行的耗材。可分离包装不计入产品净质量，应作为单独产品投入记录。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表的 kWh 原始记录，按 1 kWh 精确等于 3.6 MJ 转换后再归一化；披露电网、供电电压和计量边界。 |
| `gas_reference_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 每项气体体积记录均须说明温度、压力和干/湿基准状态；仅依据有文件支持的仪表或供应商状态进行转换。 |
| `water_mass_basis` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用质量记录。采用体积计量时，保留体积记录以及换算为 kg 时所用的实测或有依据的密度。 |

## 5. 系统边界

前景边界始于外购金属进料、焊剂或团聚粉末成分、粘结剂、能源、水和包装进入制造场址，止于成品耗材在该场址经质量放行并完成包装。边界包括接收和检验；场内进行的钢丝再拉拔、矫直、切断或酸洗；粉末筛分、称量、混合或团聚；适用时的湿混和压团；涂层挤压或金属带成形、填充与闭合；按需合缝焊接；拉拔、退火、干燥或烘焙；表面处理；卷绕或切断；检验；以及包装。耗材在软钎焊、硬钎焊、焊接、熔敷或金属喷镀中的使用不在此前景边界内。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址门口的外购丝、条或金属带；逐一识别的矿物、金属、合金或碳化物粉末；粘结剂溶液；工艺用水；外购能源；以及各个包装组件 |
| starting_condition_role | 前景耗材制造系统的供应商工厂门口投入 |
| product_classification_scope | 第 2 节规定的语义产品边界；CPC 3.0 代码 42950 仅作为分类语境 |
| recursive_input_rule | 若外购投入本身属于 CPC 42950 覆盖的耗材或半成品，则将其作为一个原子产品投入记录一次并关联供应商工厂门口数据集；不得在同一前景数据包内递归拆解其制造过程 |
| upstream_dataset_requirement | 为每种外购金属、粉末、粘结剂、能源、水和包装关联地理与技术相适的上游数据集，并说明尚未解决的供应商数据缺口 |
| disclosure | 声明产品路线、每种配方成分及其浓度或质量、起始进料状态、内部与外购中间品、废料回收路线、排放控制、包装配置、地理范围、技术和生产期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_supplier_gate` | 前景系统 | 纳入从外购进料接收到质量放行和包装的全部场内过程；上游供应采用关联数据集；排除使用和下游处理。 | `voestalpine-seamless-cored-wire-epd-2023` |
| `boundary_route_disclosure` | 路线和配方 | 选择实际采用的药皮焊条、药芯丝、药芯条、团聚粉末丝/条或其他覆盖路线，并将每种物理存在的配方成分列为一个原子交换。 | `unido-welding-consumables-1984`, `us-patent-10124444-flux-cored-wire`, `us-patent-20080093350-thermal-spray-cored-wire` |
| `boundary_completeness` | 材料、能源、废物和排放清单 | 不得仅因流的质量小、具有保密性、危险性、被回收或由多产品共用而将其遗漏。保密配方可以在公开层面隐去组成数值，但审查包必须保留可审计的质量和标识。 | `voestalpine-seamless-cored-wire-epd-2023` |

## 6. 过程清单结构

以下流卡构成经来源支持的覆盖路线的最低原子清单。具体数据包必须为已声明产品与场址中的每一种额外金属、合金、碳化物、矿物、粘结剂、润滑剂、表面处理化学品、包装组件、废物或基本流新增单独原子行；不得以“粉末混合物”“化学品”“包装”“废物”或“排放”等总括行替代。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | 进料检验、钢丝制备和配方 | required | 采用实际路线：涂覆产品进行钢丝制备；涂覆、药芯或热喷涂产品进行粉末称量/混合或团聚 | 前景材料制备 | 所有投入和制备损失按可销售产品质量归一化 |
| `product_forming` | 涂覆、填充、闭合、拉拔和热处理 | required | 仅采用实际使用的作业：挤压涂覆；带/管成形和填充；合缝焊接；拉拔；退火；干燥、烘焙或固化 | 前景产品转化 | 路线特定的计量投入、废物和直接排放按可销售产品质量归一化 |
| `finishing_packaging` | 精整、质量放行和包装 | required | 纳入实际表面处理、定径、切断或卷绕、检验及各个包装组件 | 前景精整和发运准备 | 放行产品净质量和包装按可销售产品质量归一化 |

### 过程：进料检验、钢丝制备和配方（`feedstock_preparation`）

#### 输入

##### 产品流

###### 低碳钢外皮带材（`low_carbon_steel_strip`）

在低碳热轧或冷轧带材被成形成药芯丝外皮时记录该外购带材。已声明的牌号、尺寸、涂层和供应商工厂门口状态决定上游数据集。

- 选定流：带钢，卷材 `984781e6-5296-48d7-a630-553209cd51c5`
- 流属性/单位：Mass / kg
- 数量规则：称量发放至适用药芯丝批次的带材质量，扣除有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`voestalpine-seamless-cored-wire-epd-2023`, `us-patent-10124444-flux-cored-wire`

###### 低碳钢芯丝（`low_carbon_steel_wire`）

记录作为药皮焊条或涂药条芯部的外购或场内再拉拔低碳钢丝。仅用于具有此类铁质芯部的产品。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：称量发放至药皮焊条或涂药条批次的芯丝质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`unido-welding-consumables-1984`, `us-patent-3468999-coated-electrode`

###### 金红石粉（`rutile_powder`）

仅在金红石（二氧化钛矿物）粉属于已声明涂层或芯部配方时记录。其他矿物必须使用单独行。

- 选定流：金红石粉
- 流属性/单位：Mass / kg
- 数量规则：称量加入配方批次的干金红石，扣除实测并退回库存的带出量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`unido-welding-consumables-1984`

###### 锰铁粉（`ferromanganese_powder`）

仅在锰铁粉是已声明涂层或芯部配方中的脱氧剂或合金化成分时记录。

- 选定流：锰铁合金，粉状 `ce4f3904-8c7f-4dd6-94f8-2a738ad09ab7`
- 流属性/单位：Mass / kg
- 数量规则：称量加入配方批次的锰铁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`unido-welding-consumables-1984`

###### 硅酸钠粘结剂溶液（`sodium_silicate_solution`）

仅对采用该粘结剂的湿混涂料或团聚料记录加入的硅酸钠溶液。声明溶液浓度，并在质量平衡中单独核算其中的水。

- 选定流：硅酸钠溶液
- 流属性/单位：Mass / kg
- 数量规则：称量加入湿混或团聚批次的溶液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`unido-welding-consumables-1984`, `us-patent-3468999-coated-electrode`

###### 碳化钨/钴团聚粉（`tungsten_carbide_cobalt_agglomerates`）

仅对已声明的热喷涂药芯丝或条配方记录外购 WC/Co 团聚粉。声明碳化钨与钴的组成、团聚路线和粒度规范。

- 选定流：WC-Co 混合粉末，颗粒料 `ef6167d9-dcce-4497-a117-a208a9c4247c`
- 流属性/单位：Mass / kg
- 数量规则：称量加入热喷涂药芯产品批次的 WC/Co 团聚粉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`us-patent-20080093350-thermal-spray-cored-wire`

###### 镍铬钼合金外皮带材（`nickel_chromium_molybdenum_alloy_strip`）

仅在镍铬钼合金带构成已声明热喷涂药芯丝外皮时记录。声明牌号和合金成分；本行不适用于碳钢外皮。

- 选定流：镍铬钼合金带
- 流属性/单位：Mass / kg
- 数量规则：称量发放至热喷涂药芯丝批次的合金带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`us-patent-20080093350-thermal-spray-cored-wire`

###### 工艺用水（`preparation_process_water`）

记录为湿混、粘结剂稀释、钢丝清洗或酸洗漂洗而跨越场址边界的水。场内循环水不得再次计作外部投入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：使用经校准分表，或经核对的批次补水和漂洗水记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`unido-welding-consumables-1984`

###### 制备电力（`preparation_electricity`）

记录用于钢丝拉拔和切断、粉末筛分、混合、团聚、抽排及制备辅助设备的外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：对制备设备计量，或使用有文件支持的运行记录分配经核对的生产线总表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：`voestalpine-seamless-cored-wire-epd-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不合格金红石型焊剂粉末（`offspec_rutile_flux_powder_waste`）

记录经化学识别、离开前景系统接受处置或回收的不合格金红石型配方。退回配方的清洁物料仍是内部库存转移。

- 选定流：不合格金红石型焊剂粉末废物
- 流属性/单位：Mass / kg
- 数量规则：称量作为废物发运的隔离配方，并声明其管理路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`unido-welding-consumables-1984`

##### 基本流

###### 粉末操作排入空气的颗粒物（`powder_particulate_to_air`）

记录称量、筛分、混合、填充或除尘过程中越过场址边界的颗粒物。声明粒径级别、环境介质，以及数值为治理前还是治理后测量结果。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：使用烟道或排气测量及控制设备运行记录；不包括作为废物发运的捕集粉尘
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

### 过程：涂覆、填充、闭合、拉拔和热处理（`product_forming`）

#### 输入

##### 产品流

###### 成形电力（`forming_electricity`）

记录挤压、成形辊、粉末填充、合缝焊接、拉拔、热处理辅助设备及排放控制所用外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采用经生产与停机记录核对的生产线或设备电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：`voestalpine-seamless-cored-wire-epd-2023`, `us-patent-10124444-flux-cored-wire`

###### 干燥或热处理用天然气（`forming_natural_gas`）

仅在气态天然气于前景系统内用于干燥、烘焙、退火或其他路线特定热处理时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：采用供应商或分表在已声明基准状态下的体积，并与适用生产线和期间核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：`voestalpine-seamless-cored-wire-epd-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 低碳钢废料（`low_carbon_steel_scrap`）

单独记录送往回收或处理的低碳钢切边、丝端和被拒收的空外皮。合金带废料必须使用自身单独行。

- 选定流：废钢 `980a386b-f76b-4348-bb6b-3aa992538ba1`
- 流属性/单位：Mass / kg
- 数量规则：按生产路线和批次或报告期称量发运的低碳钢废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`us-patent-10124444-flux-cored-wire`

###### 酸洗废水（`acid_pickling_wastewater`）

仅在酸洗和漂洗位于前景边界内时记录酸洗废水。声明酸的标识、溶解金属含量、处理方式以及排放或场外去向。

- 选定流：酸洗废水
- 流属性/单位：Mass / kg
- 数量规则：使用排水表、槽罐发运质量或酸洗线经核对的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`unido-welding-consumables-1984`

##### 基本流

###### 直接化石源二氧化碳（`forming_fossil_carbon_dioxide`）

仅记录场内天然气燃烧或其他有文件支持的化石碳过程直接排入空气的前景化石源二氧化碳。电力供应的上游排放保留在电力供应数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：使用场址排放测量值，或分配至成形过程且经审计的燃料碳记录；披露方法和氧化处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：

### 过程：精整、质量放行和包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 精整和包装电力（`packaging_electricity`）

记录最终定径、表面精整、卷绕或切断、检验、包装及相关抽排所用外购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：采用经放行产量核对的设备或生产线电表记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_metered_energy`
- 来源：`voestalpine-seamless-cored-wire-epd-2023`

###### 瓦楞纸箱（`corrugated_fibreboard_box`）

仅在瓦楞纸箱与放行产品一同跨越系统边界时记录。使用钢或塑料线轴、桶、托盘、薄膜及其他包装时，必须分别新增原子行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：依据经核实的包装规范和装箱件数计算纸箱质量，并与采购记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 经质量放行的产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`voestalpine-seamless-cored-wire-epd-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经质量放行的代表产品（`reference_product_output`）

记录经质量放行的药芯焊丝净质量。其他覆盖产品形态必须使用经精确审计的 TianGong 产品流，不得默默复用本代表标识。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：实测放行产品净质量，归一化为恰好 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 经质量放行的代表产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 来源：`voestalpine-seamless-cored-wire-epd-2023`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多个产品牌号、路线或生产线 | 按配方、路线、生产线和生产期细分，并优先使用直接材料领用、计量和废物记录，再考虑分配。 | |
| `allocation_shared_operations` | 无法避免的共用制备、公用工程、精整和包装 | 对剩余共用负荷采用导致该负荷的有文件支持物理驱动因素进行分配，如设备时间、计量能源、加工质量或包装件数；存在因果物理驱动因素时不得默认按收入分配。 | |
| `allocation_scrap_no_credit` | 钢、合金、焊剂或粉末废物 | 在废物流离开前景边界时报告质量和去向。不得在本供应商工厂门口清单内给予避免生产或回收抵扣；替代抵扣只能在单独声明的下游模型中处理。 | |
| `allocation_no_recipe_co_products` | 涂层和芯部配方 | 将配方成分作为消耗性投入，将放行耗材作为参考产品。返回过程的物料属于内部库存转移，不是共产品。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `feedstock_preparation`, `finishing_packaging` | 材料领用、包装和放行产品 | 批次领用、配方、采购和质量放行记录 | 产品代码；批次 ID；流标识；供应商；批号；领用毛量；退库量；浓度；包装规范；放行净质量；拒收质量 | 经校准秤具以及与实物库存核对的受控配方/ERP 记录 | kg | 每批，按月汇总 | 有代表性的连续 12 个月，或有文件说明的生产活动期 | 已声明场址内的全部前景生产线和仓储转移 | 按产品和路线汇总净领用及放行质量；各自按放行产品质量归一化 | 秤具校准、批号追溯、库存核对和放行证明 |
| `cp_metered_energy` | `feedstock_preparation`, `product_forming`, `finishing_packaging` | 电力和天然气 | 分表、供应商账单和设备运行日志 | 仪表 ID；期初和期末读数；单位；气体基准状态；生产线；产品；运行与停机小时；分配驱动因素 | 经校准仪表，并与账单核对 | kWh 和 m3 | 连续或每个账单期，按月核对 | 与生产相同的代表期 | 边界内全部制备、成形、处理、精整和控制设备 | 扣除边界外负荷；仅以有文件支持的因果驱动因素分配剩余共用量；按放行质量归一化 | 仪表校准、账单核对和运行日志 |
| `cp_water_balance` | `feedstock_preparation`, `product_forming` | 工艺用水和酸洗废水 | 水表、槽液补加、排水表和槽罐发运记录 | 仪表 ID；水源；槽体 ID；酸的标识；补加量；漂洗用量；回用量；排放量；密度；溶解金属分析；去向 | 经校准仪表或称量槽罐，并通过场址水平衡核对 | kg，并保留 m3 | 每批或连续，按月核对 | 与生产相同的代表期 | 场址边界内全部湿混、清洗、酸洗、漂洗和处理 | 外部补水只计一次；单列回用；核对投入、蒸发、产品水分、废水和库存变化 | 仪表校准、实验室分析和处理/发运记录 |
| `cp_waste_and_emissions` | `feedstock_preparation`, `product_forming` | 固体废物和直接空气排放 | 废物磅单、烟道测试、连续监测、控制设备和排放记录 | 流标识；组成；质量；粒径级别；环境介质；测量点；控制效率；去向；报告期 | 经校准废物秤，以及法规或技术认可的排放测量或经审计场址排放记录 | kg | 每次发运及每个规定监测期 | 与生产相同的代表期 | 全部已声明前景排放点和废物发运 | 排除内部返回；按原子流、路线和去向汇总；按放行质量归一化 | 磅单、联单、采样计划、实验室报告和监测仪 QA/QC |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 分配给产品的交换数量 / 经质量放行的产品净质量 | 分配的交换数量；放行产品质量 | 每 1 kg 参考产品的交换量 | |
| `calc_electricity_conversion` | 电力行 | MJ = 电表 kWh × 3.6；保留原始 kWh 记录后再归一化 | 电表 kWh；放行产品质量 | 每 1 kg 参考产品的 MJ | |
| `calc_packaging_mass` | 瓦楞纸箱 | 包装质量 = 经核实的单件质量 × 分配给放行产品的纸箱数量 | 包装规范；包装件数；放行产品质量 | 每 1 kg 参考产品的纸箱 kg | `voestalpine-seamless-cored-wire-epd-2023` |
| `calc_batch_mass_reconciliation` | 产品、材料、废物和直接排放质量 | 核对期初库存 + 外购投入与期末库存 + 放行产品 + 退库 + 发运废物 + 实测直接释放；说明水分、蒸发和任何残差 | 四项采集协议的批次和库存记录 | 经核对的质量平衡说明和残差 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和配方 | 将每项结果追溯至产品代码、适用标准/分类、外皮或芯部金属、每种涂层/芯部成分、浓度、尺寸、含水状态和包装配置。 | 批准规范、配方版本、批次记录和放行证明 |
| `dq_measurement` | 质量、能源、气体和水记录 | 采用经校准仪器并记录单位和边界；保留气体基准状态及每项换算。 | 校准证书、仪表图、原始读数和换算表 |
| `dq_temporal` | 前景清单 | 在可获得时采用连续且有代表性的 12 个月；否则说明生产活动日期、产量、停机情况及该期间代表已声明产品的理由。 | 生产日历、月度核对和代表性说明 |
| `dq_completeness` | 清单 | 核算每种物理存在的配方成分和包装组件，以及跨越边界的每项材料、能源、废物和基本流；量化并说明质量平衡残差。 | 经签署完整性检查表、采购核对、废物登记册和排放清单 |
| `dq_supplier_links` | 上游投入 | 将上游数据集与材料牌号、组成、产品状态、地理范围和供应技术匹配，并披露代理或缺失的供应商数据。 | 供应商声明、分析证书和数据集关联登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认恰好 1 kg 经质量放行的产品净质量，排除可分离包装，并核实每项必需限定信息和精确产品流标识。 | |
| `validate_route_and_recipe` | 产品路线和投入 | 确认已声明路线与过程图一致，并确认每种配方成分和包装组件均由一个具有路线适用性的原子流表示。 | `unido-welding-consumables-1984`, `us-patent-10124444-flux-cored-wire`, `us-patent-20080093350-thermal-spray-cored-wire` |
| `validate_mass_balance` | 质量交换 | 核对材料投入、库存变化、放行产品、返回物料、废物和直接释放；调查并披露每项非微小残差，不得强行闭合。 | |
| `validate_energy_and_emissions` | 电力、天然气和直接化石源二氧化碳 | 将仪表与生产期核对；核实气体基准状态；避免把电力上游排放计作前景直接排放。 | `voestalpine-seamless-cored-wire-epd-2023` |
| `validate_water_and_waste` | 水、废水和固体废物 | 防止重复计算内部回用或返回配方，并为每项发运废物流保留组成、去向和处理证据。 | |
| `validate_uuid_and_localization` | 所有带 UUID 的流 | 要求公开 state-100 标识、兼容的流类型、属性和单位组；中文对齐版本采用 TianGong 精确中文 baseName。未解决行保持 UUID 为空。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明覆盖耗材在单一场址和代表期的前景产品制造数据集 |
| downstream_use | `secondary_dataset`；仅当产品路线、配方、产品状态、地理范围和技术兼容时方可作为 `background_dataset` |
| allowed_use | 焊接、硬钎焊、软钎焊、堆焊、熔敷和金属喷镀耗材的供应商工厂门口清单；关联到单独建模使用阶段的下游连接或涂覆模型 |
| excluded_use | 焊接或热喷涂作业影响；实芯丝；单独销售的焊剂；焊接设备；石墨电极；未经文件化审查在实质不同配方或产品形态间替代 |
| required_metadata | 规范 PCR id；产品标准/分类；产品形态和用途；审查包中的完整配方披露；外皮/芯部/涂层组成；尺寸；填充或涂层比；含水状态；合缝和热处理路线；包装；场址；地理范围；技术；生产期；分配；上游数据集关联 |
| required_quality_disclosure | 未解决 UUID 和来源缺口；前景覆盖；仪器校准；时间代表性；质量平衡残差；共用负荷分配；供应商代理；废物去向；排放控制和测量基础 |
| update_trigger | 产品标识、标准、配方、金属或碳化物牌号、填充/涂层比、路线、主要设备、热处理或表面处理、包装、能源供应、排放控制、场址、分配方法、上游数据集或代表期发生变化 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-09-05 获取并完成哈希核验） | CPC 42950 正式分类标识 |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，《Explanatory Notes of the Central Product Classification Version 3.0》。https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf（2026-09-05 获取） | 正式产品边界核验 |
| `china-hs-8311-terminology-2019` | official_guidance | 中山市人民政府网站托管的海关商品编码表，HS 8311 各行。https://www.zs.gov.cn/UserFiles/attachfiles/2019-7/9/2976f10c-f75f-46a9-b4a9-4f0eec9dc638_532697.pdf（2026-09-05 获取） | 核验“焊剂涂面的电极”“焊剂为芯的焊丝”“焊剂涂面或作芯的条或丝”及“贱金属粉制金属喷镀丝条”等专业中文术语 |
| `unido-welding-consumables-1984` | literature | 《Welding Consumables — An Overview》，UNIDO ID/WG.420/3，1984-03-16。https://downloads.unido.org/ot/48/56/4856670/10001-15000_13559.pdf（2026-09-05 获取） | 药皮焊条成分、钢丝制备、干混/湿混、挤压、干燥和烘焙；团聚概念 |
| `voestalpine-seamless-cored-wire-epd-2023` | dataset | Institut Bauen und Umwelt e.V.，EPD-VOE-20230215-IAC1-EN，《Seamless Cored Welding Wires》，2023-08-29 发布。https://cdnstoreapp.blob.core.windows.net/image-container/1085779/original/EPD_Seamless_Cored_Welding_Wires.pdf（2026-09-05 获取） | 供应商工厂门口过程分解、电力与天然气角色、声明质量单位和包装形态；不从这一个 EPD 推断经验清单范围 |
| `us-patent-10124444-flux-cored-wire` | literature | US10124444B2，《Flux cored wire and manufacturing method thereof and manufacturing device thereof》。https://patents.google.com/patent/US10124444B2（2026-09-05 获取） | 带材成形、焊剂填充、闭合、按需合缝焊接和拉拔路线 |
| `us-patent-3468999-coated-electrode` | literature | US3468999A，《Method of making coated arc welding electrodes》。https://patents.google.com/patent/US3468999A/en（2026-09-05 获取） | 粉状焊剂涂层、粘结剂、挤压和干燥路线 |
| `us-patent-20080093350-thermal-spray-cored-wire` | literature | US20080093350A1，《Superfine/nanostructured cored wires for thermal spray applications and methods of making》。https://patents.google.com/patent/US20080093350A1/en（2026-09-05 获取） | 团聚粉末热喷涂药芯丝进料、带材成形、粉末填充、闭合和拉拔路线 |
