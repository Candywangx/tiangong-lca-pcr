---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.man-made-filament-yarn-other-than-sewing-thread-put-up-for-retail-sale
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 用于零售的人造长丝纱线（缝纫线除外）

## 1. 范围与适用性

本 PCR 规定缝纫线以外成品人造长丝纱线的零售卷绕与包装前景数据生产方法。当前候选方法适用于位于中国的前景设施；进入边界的纱线必须已可销售，且其组成与结构已经确定，并且最终产品所需的聚合物生产、长丝成形、变形、加捻、染色和后整理均在跨越本前景边界之前完成。

参考数量采用净纱线质量。纸板卷芯、标签和外包装膜单独进入清单，不计入参考数量。本候选方法不涵盖缝纫线、短纤维纱、长丝丝束、织物、上游长丝制造、在前景场址实施的湿法加工、零售配送、使用阶段或生命周期终结阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.man-made-filament-yarn-other-than-sewing-thread-put-up-for-retail-sale |
| classification_refs | CPC 3.0：26422，Man-made filament yarn (other than sewing thread), put up for retail sale |
| covered_products | 可销售的合成或人造连续长丝纱线零售包装品，包括单丝或复丝以及单股、多股或合股结构；产品不得为缝纫线，并且必须声明纤维组成、纱线结构、线密度、颜色、后整理状态和包装形式。 |
| excluded_products | 缝纫线；人造短纤维纱；长丝丝束；最终市场状态并非零售包装的纱线；机织物、针织物或簇绒织物；在所声明前景边界内实施加捻、染色、水洗、热定型或其他湿法或热法后整理的产品。 |
| representative_product | 成品人造长丝纱线卷绕在一个纸板零售卷芯上，带一个纸标签，并在使用时带一个低密度聚乙烯外膜，按净纱线质量报告。 |
| production_route | 接收非零售成品长丝纱线 -> 批次核验与皮重控制 -> 机械零售卷绕 -> 贴标和外膜包装 -> 工厂门口可销售包装纱线。 |
| market_state | 中国零售卷绕与包装工厂门口的可销售零售包装状态；工厂门口之后的配送不在范围内。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采用已声明可销售零售包装形式的非缝纫线人造长丝纱线。 |
| How much | 1 kg 净纱线质量，不含纸板卷芯、标签、外膜及其他包装。 |
| How well | 成品且可销售，并声明纤维身份、纱线结构、线密度、颜色和后整理状态以及零售包装形式。 |
| How long or cycle | 一个完整的前景零售卷绕与包装批次；不规定使用期限。 |
| reference_flow_link | `retail_winding_packaging` 输出的合格零售纱线实测净质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净纱线质量 |
| 参考产品流 | Man-made filament yarn (other than sewing thread), put up for retail sale `561c51b1-b4f9-4eea-b081-e096bf93820b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维来源为合成或人造；聚合物或再生纤维素纤维类别及质量分数；单丝或复丝形态；纱线结构及股数或合股状态；以 tex 表示的线密度及其测量或换算依据；颜色及染色或后整理状态；零售包装形式；不含包装的净纱线质量；前景生产地理范围；电力供应场景 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有清单值归一化到 1 kg 实测净纱线。确定并保留毛重、皮重、包装和净重读数；不得把卷芯、标签、薄膜或其他包装质量加入参考产品数量。 |
| `yarn_linear_density` | 参考产品限定信息 | Linear density | tex | 声明实测或换算后的线密度及原始支数体系。一致采用 Tex System，并保留试验或换算依据。 |
| `packaging_component_mass` | 纸板卷芯、纸标签和 LDPE 薄膜 | Mass | kg | 依据供应商交付记录、组件计数和具有代表性的实测单件质量，分别记录每个包装组件；不得把不同材料合并为一个数量。 |
| `cn_electricity_energy` | 中国 1-35 kV 消费组合电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始单位，采用可审计的单位换算转换为 MJ，并按实测净纱线产出归一化。本 PCR 中的电力 UUID 仅适用于所声明的中国供应场景。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品人造长丝纱线（缝纫线除外），其纤维组成、长丝形态、纱线结构、线密度、颜色和染色或后整理状态已与零售产品一致，并按不含生产者运输包装的净质量接收。 |
| starting_condition_role | 进入前景零售卷绕与包装过程的上游产品输入。 |
| product_classification_scope | 输出属于 CPC 3.0 子类 26422；接收的非零售纱线是上游产品，只有在完成所声明零售包装后才取得 CPC 26422 身份。 |
| recursive_input_rule | 如退回或返工的 CPC 26422 纱线进入前景过程，应将其作为一次输入并链接到供应数据集，披露返工关系，且不得在同一产品系统中对同一实物纱线递归应用本 PCR。 |
| upstream_dataset_requirement | 每个接收纱线批次均应链接到一个匹配纤维类别与质量分数、长丝形态、纱线结构、线密度、再生含量、颜色和后整理状态、生产地理范围及技术的上游数据集。不得在本前景过程中重新建立上游聚合物、长丝、变形、加捻、染色和后整理负荷。 |
| disclosure | 声明前景场址、报告期、接收纱线起始状态、排除的上游操作、零售包装配置、电力场景、生产者运输包装处理方式以及与代表性路线的所有偏离。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_retail_conversion_only` | 前景系统 | 纳入批次核验、皮重控制、机械零售卷绕、贴标、使用时的外膜包装、前景电力、材料输入、实测纱线损失、包装损失和场内废物处理。排除接收前完成的全部纱线生产和湿法加工，以及门口后的配送、使用和生命周期终结。 | `unsd-cpc-3-0-structure-2025`; `jrc-textiles-bref-2023` |
| `boundary_upstream_link_required` | 接收纱线 | 要求为接收的成品纱线链接匹配的上游数据集，并防止重复计算上游长丝制造、加捻、染色或后整理。 | `jrc-textiles-bref-2023`; `iso-14044-2006` |
| `boundary_inventory_inputs_outputs` | 前景记录 | 维护批次层级的材料、能源、产品和废物投入产出记录，各流必须可单独识别。 | `eu-bat-textiles-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `retail_winding_packaging` | 零售卷绕与包装 | `required` | 对所覆盖的中国工厂门口产品始终纳入。 | 将非零售成品纱线前景转换为所声明零售包装。 | 1 kg 实测净零售纱线输出 |

### 过程：零售卷绕与包装（`retail_winding_packaging`）

#### 输入

##### 产品流

###### 接收的非零售成品长丝纱线（`received_nonretail_filament_yarn`）

这是进入机械零售卷绕、且组成和结构与成品匹配的纱线。经审阅的 CPC 26421 候选比本输入范围更窄，因此 Tiangong UUID 仍未解决。

- 选定流：Man-made filament yarn other than sewing thread, finished and not put up for retail sale
- 流属性/单位：Mass / kg
- 数量规则：记录投入零售卷绕批次的经校准净质量，并按有记录的期初和期末在制品调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`
- 来源：`jrc-textiles-bref-2023`

###### 中国用户侧中压电力（`cn_medium_voltage_electricity`）

本卡表示一个明确供应场景：1-35 kV 交流电、中国消费组合、供应至用户。不得将其作为非中国场址的替代流。

- 选定流：Alternating current, 1-35 kV, consumption mix, at user, CN `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：记录零售卷绕与包装批次的分表电量或电表分配电量，以可审计方式将记录单位换算为 MJ，并按实测净纱线产出归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_metering`
- 来源：`jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

###### 纸板纱线卷芯（`paperboard_yarn_core`）

这是装入零售纱线包装的单个纸板卷芯。其质量与纱线及其他每个包装组件分别记录。

- 选定流：Paperboard yarn-winding tube `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass / kg
- 数量规则：记录领用卷芯数量和实测代表性单件质量，核对未用退回量，并计算装入该批次的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-bat-textiles-2022`

###### 纸质零售标签（`paper_retail_label`）

这是装入零售包装的纸标签。除非所选 Tiangong 流和供应商规格已经包含胶黏剂、油墨或背衬材料，否则本卡不代表这些材料。

- 选定流：Paper packaging label, at plant, GLO `64321117-433d-43a5-97f9-2ea624c15656`
- 流属性/单位：Mass / kg
- 数量规则：记录领用标签数量和实测代表性单件质量，核对未用退回量，并计算装入该批次的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-bat-textiles-2022`

###### 低密度聚乙烯零售包装膜（`ldpe_retail_packaging_film`）

这是所声明零售包装采用外膜时的单个 LDPE 外膜组件。经审阅的聚乙烯候选未确认 LDPE 牌号或零售薄膜状态，因此 UUID 仍未解决。

- 选定流：Low-density polyethylene retail packaging film
- 流属性/单位：Mass / kg
- 数量规则：记录领用膜卷或袋质量、未用退回量和实测同材质废物，并计算装入该批次的质量。仅在有证据证明未使用外膜时记录零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_components`
- 来源：`eu-bat-textiles-2022`

##### 废物流

##### 基本流

本机械前景过程不预设基本流输入。场址如存在直接基本流输入，必须在使用数据集前将其作为单一物质且区分环境介质的前景行加入。

#### 输出

##### 产品流

###### 可销售零售长丝纱线（`retail_product`）

这是合格前景输出和参考产品。记录数量为净纱线质量，不含任何包装质量。

- 选定流：Man-made filament yarn (other than sewing thread), put up for retail sale `561c51b1-b4f9-4eea-b081-e096bf93820b`
- 流属性/单位：Mass / kg
- 数量规则：记录合格包装的经校准毛重和皮重，并报告批次净纱线质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_mass_balance`
- 来源：`unsd-cpc-3-0-structure-2025`

##### 废物流

###### 人造长丝纱线卷绕边角废物（`filament_yarn_winding_waste`）

本卡仅记录零售卷绕步骤产生的人造长丝纱线边角料、缠结纱和不合格纱，不含纸板和塑料包装废物。

- 选定流：Man-made filament yarn winding offcut waste
- 流属性/单位：Mass / kg
- 数量规则：分别称量每批次纱线废物，并保留其声明的回收或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_tracking`
- 来源：`jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

###### 废纸板纱线卷芯（`waste_paperboard_yarn_core`）

本卡记录场内产生的损坏或不合格纸板纱线卷芯，不含纸标签和塑料膜。

- 选定流：Waste paperboard yarn-winding tube
- 流属性/单位：Mass / kg
- 数量规则：按批次分别称量不合格纸板卷芯，并保留其回收或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_tracking`
- 来源：`jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

###### 废低密度聚乙烯包装膜（`waste_ldpe_packaging_film`）

本卡仅记录场内产生的 LDPE 膜边、损坏袋或不合格外膜，不含其他塑料和纸包装。

- 选定流：Waste low-density polyethylene retail packaging film
- 流属性/单位：Mass / kg
- 数量规则：按批次分别称量 LDPE 薄膜废物并保留其回收或处置去向。仅在未使用 LDPE 薄膜且有缺失证据时记录零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 实测净零售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_tracking`
- 来源：`jrc-textiles-bref-2023`; `eu-bat-textiles-2022`

##### 基本流

本机械前景过程不预设基本流输出。任何实测直接排放必须作为单一物质且区分环境介质的前景行加入，并链接到保留的监测证据。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_separation` | 所有前景交换 | 通过采用批次特定的材料、电力、产品和废物记录，并细分单独计量或单独称量的操作，避免分配。 | `iso-14044-2006`; `eu-bat-textiles-2022` |
| `allocation_shared_electricity` | 共用电表 | 无法细分时，根据有记录的机器运行时间与实测设备功率或另一个经证明的物理因果参数，把计量电力分配至批次；披露方法并保留计算输入。 | `iso-14044-2006`; `jrc-textiles-bref-2023` |
| `allocation_no_avoided_burden` | 纱线和包装废物 | 将每个废物流及其去向报告为前景废物输出。本前景过程不得计入避免原生生产或下游再生的抵扣；下游处理应在链接的废物管理系统中建模。 | `jrc-textiles-bref-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_mass_balance` | `retail_winding_packaging` | received_nonretail_filament_yarn; retail_product | 秤重与批次生产记录 | lot_id; batch_id; fibre_family; composition; construction; linear_density; colour_finish; opening_wip_mass; received_net_mass; closing_wip_mass; product_gross_mass; product_tare_mass; product_net_mass | 将经校准秤重读数关联到批号和批次标识，并保留毛重、皮重和净重记录。 | kg | 每个批号和批次 | 报告期完整且不遗漏任何生产批次 | 所声明前景场址的全部零售卷绕线 | 按批次求和、核对在制品，然后按合格净纱线输出归一化 | 秤校准状态；签署的批次记录；批号追溯；毛重-皮重-净重核对 |
| `cp_electricity_metering` | `retail_winding_packaging` | cn_medium_voltage_electricity | 电表和机器运行记录 | meter_id; start_reading; end_reading; recorded_unit; reading_time; machine_id; operating_time; batch_id; allocation_parameter | 优先采用专用分表；否则采用有记录的物理参数把场址电表用电分配到批次。 | 原始电表单位及换算后的 MJ | 每批次，或关联批次的每班次 | 完整报告期，包含按声明规则分配的启动、停机和空载能耗 | 前景边界内全部卷绕、输送、贴标和薄膜包装设备 | 相减连续读数，仅在必要时分配，以可审计方式换算为 MJ，并按净纱线产出归一化 | 电表标识及校准；读数证据；运行日志；换算因子来源；分配计算 |
| `cp_packaging_components` | `retail_winding_packaging` | paperboard_yarn_core; paper_retail_label; ldpe_retail_packaging_film | 库房领用、退回、供应商规格及代表性称量记录 | component_id; material; supplier_lot; issued_count_or_mass; returned_unused_count_or_mass; sampled_unit_mass; incorporated_count; batch_id | 核对领用与退回组件；通过直接称量或计数乘以当前实测代表性单件质量确定组件质量。 | 件数和 kg | 每个包装批号和生产批次 | 完整报告期 | 前景场址内全部包装工位 | 分别计算每种材料和组件，并将装入质量按净纱线产出归一化 | 供应商规格；抽样称量记录；秤校准；领退核对 |
| `cp_waste_tracking` | `retail_winding_packaging` | filament_yarn_winding_waste; waste_paperboard_yarn_core; waste_ldpe_packaging_film | 分类废物称量与去向记录 | waste_row_id; batch_id; container_tare; gross_mass; net_mass; material_identity; destination; transfer_date; transfer_record | 分类并称量每个命名废物流，禁止跨材料合并。 | kg | 每个废物容器及其批次分配 | 完整报告期 | 前景边界内全部废物产生点 | 按批次汇总每个 row_id，并在不计避免负荷抵扣的情况下按净纱线产出归一化 | 秤校准；容器标签；转移联单；再生或处置凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_yarn_output` | retail_product | 包装毛重合计减去分别实测的包装皮重；排除全部纸板、标签、薄膜和其他包装。 | product_gross_mass; product_tare_mass; batch_id | 以 kg 表示的 product_net_mass | `unsd-cpc-3-0-structure-2025` |
| `calc_yarn_mass_reconciliation` | received yarn and yarn waste | 期初在制品加接收净纱线减期末在制品，应与净合格纱线输出加分别实测的人造长丝纱线废物核对；保留并解释任何残差。 | opening_wip_mass; received_net_mass; closing_wip_mass; product_net_mass; filament_yarn_waste_mass | 以 kg 表示的批次质量平衡残差 | `eu-bat-textiles-2022` |
| `calc_packaging_component_mass` | each packaging input | 领用质量减未用退回质量，再减分别实测的同材质前景废物，等于装入交付零售包装的质量；每种材料分别计算。 | issued_count_or_mass; returned_unused_count_or_mass; sampled_unit_mass; same_material_waste_mass | 以 kg 表示的装入组件质量 | `eu-bat-textiles-2022` |
| `calc_electricity_normalization` | cn_medium_voltage_electricity | 电表读数相减，采用有记录的原始单位至 MJ 换算，仅在无专用电表时按所声明物理参数分配，再除以实测净纱线产出。 | start_reading; end_reading; recorded_unit; conversion_factor; allocation_parameter; product_net_mass | 每 kg 净纱线的 MJ | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | received and retail yarn | 保留接收纱线至零售输出的批号追溯，包括纤维类别、组成、长丝形态、纱线结构、线密度、颜色和后整理状态以及上游数据集引用。 | 采购规格；证书或批号单；批次谱系；上游数据集标识 |
| `dq_measurement_control` | mass and electricity records | 使用具有当前校准或核验状态的已标识计量设备；保留原始读数，禁止无记录的单位换算。 | 校准证书或核验日志；电表导出；秤重记录；换算记录 |
| `dq_temporal_completeness` | foreground reporting period | 纳入声明期间内的每个生产批次、包装批次、启动、停机、不合格品和废物转移，或披露并量化每个缺口。 | 生产计划；批次登记；库房台账；电表连续性检查；废物登记 |
| `dq_geographic_match` | electricity | 仅当中国前景场址在所声明电压范围接受供电时，使用所选中国 1-35 kV 消费组合流。 | 场址地址；供电合同或电表规格；所选流 UUID |
| `dq_zero_and_absence_evidence` | LDPE film and waste rows | 只有批次记录、物料清单或分类废物记录能够证明不存在时，零值才有效；空白值不等于零。 | 物料清单；领退记录；废物日志；签署的批次记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品 UUID `561c51b1-b4f9-4eea-b081-e096bf93820b`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及参考单位 kg。 | `unsd-cpc-3-0-structure-2025` |
| `validate_required_qualifiers` | 参考产品 | 拒绝遗漏任一必需纤维、结构、线密度、后整理、包装形式、净质量、地理或电力场景限定信息的前景数据包。 | `iso-1144-2016`; `unsd-cpc-3-0-structure-2025` |
| `validate_foreground_boundary` | 过程范围 | 拒绝在 `retail_winding_packaging` 中重复计算上游聚合物、长丝、变形、加捻、染色或后整理负荷；要求提供上游接收纱线数据集及边界披露。 | `jrc-textiles-bref-2023`; `iso-14044-2006` |
| `validate_atomic_inventory` | 清单行 | 每个 row_id 只允许一个物理或化学交换；双语文件必须保留相同的 row_id 顺序、流类型、UUID 和受控 machine fields。 | `eu-bat-textiles-2022` |
| `validate_yarn_mass_balance` | 纱线输入和输出 | 要求批次纱线质量核对、残差解释及净产品和纱线废物的直接记录；不得用估算收率或损失范围替代。 | `eu-bat-textiles-2022` |
| `validate_packaging_reconciliation` | 包装输入和废物 | 要求分别核对纸板卷芯、纸标签和 LDPE 薄膜质量，包括任何零值或未使用薄膜的证据及分别识别的废物。 | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `validate_electricity_scenario` | 电力 | 要求前景电力记录，并验证所选 1-35 kV 中国消费组合流与场址地理和供电电压相符；拒绝在声明场景外代理使用。 | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `validate_no_unresolved_uuid_as_match` | 未解决清单身份 | 保持未解决的选定流可读且原子化，但在未来 hybrid 搜索与公开直读确认精确流类型和语义之前，不得声称 Tiangong 身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 中国成品人造长丝纱线零售卷绕与包装的前景生产数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要中国工厂门口所声明零售卷绕与包装路线数据集的产品系统，并分别链接组成和结构匹配的上游纱线数据集。 |
| excluded_use | 非中国电力场景；缝纫线；短纤维纱；上游长丝制造或湿法加工；配送、使用或生命周期终结；缺少净纱线质量或必需产品限定信息的任何数据集。 |
| required_metadata | PCR id 和状态；前景场址和期间；上游纱线数据集；全部必需限定信息；净重/毛重/皮重依据；包装物料清单；电力流 UUID 和电压；分配方法；废物去向；source ids；未解决 UUID 披露。 |
| required_quality_disclosure | 计量与校准证据；时间和批次覆盖；质量平衡残差；包装核对；电力计量或分配；零值证据；未解决流身份；与代表性路线的偏离。 |
| update_trigger | 当 Tiangong 新增精确非零售纱线、LDPE 薄膜或匹配废物流时重新开展身份审查；当纱线组成或结构、包装配置、场址、电压、电力供应、分配方法、报告技术或上游数据集发生实质变化时更新数据集。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, structure only, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 26422 产品身份和零售市场状态边界。 |
| `jrc-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, 2023, JRC131874, DOI 10.2760/355887. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | 卷绕过程拆解、电力作为重要前景输入、废物单独追踪及包装废物管理。 |
| `eu-bat-textiles-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. http://data.europa.eu/eli/dec_impl/2022/2508/oj | 投入产出清单、材料与能源记录、废物识别及质量证据。 |
| `iso-1144-2016` | `standard` | ISO 1144:2016, Textiles - Universal system for designating linear density (Tex System). https://www.iso.org/standard/70774.html | 纱线线密度限定信息和一致的 Tex System 声明。 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines. https://www.iso.org/standard/38498.html | LCI 范围、透明分配、报告及上游/前景分离。 |
