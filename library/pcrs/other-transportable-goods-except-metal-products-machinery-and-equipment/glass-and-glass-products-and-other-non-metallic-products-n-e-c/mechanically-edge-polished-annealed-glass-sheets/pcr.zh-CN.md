---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.mechanically-edge-polished-annealed-glass-sheets
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 机械磨边抛光退火玻璃片

## 1. 范围与适用性

从接收未加工退火钠钙硅浮法原片开始完整冷转换，形成未涂镀单片未框、机械平边抛光及小倒棱片材，至首次质量放行干裸产品。透明/本体着色种类保留实际组成配置。柜门/家具覆盖片供货示例证明真实非安全终端，各实际用途仍需独立适用性判断。不设通用强度认证寿命温度密度厚度或单片重。

独立产品供货、划线/热处理指导、设备磨轮清洗上下文及归因方法证据透明合成技术方法，不假称同工厂SKU当代订单。RIG既提供退火抛光片又有边锋利矛盾文字，并偏好孔/缺口热处理，不能据此推非安全钻孔终端。本路线排除钻孔弯曲雕刻珐琅强化钢化夹层涂镀镜面中空及框。现有原片制造可供上游原片而不能替代冷加工磨边，本范围窄于37114整叶覆盖。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.mechanically-edge-polished-annealed-glass-sheets` |
| classification_refs | CPC3.0 `37114`; narrower |
| covered_products | 机械平边抛光及小倒棱的未涂镀单片未框退火浮法片 |
| excluded_products | 原片制造; 重包成品; 弯曲钻孔雕刻珐琅; 强化钢化; 夹层; 涂镀; 镜面; 中空; 带框 |
| representative_product | 声明柜门/家具覆盖供货的干裸平边抛光退火片，无安全声明 |
| production_route | 收原片→排版划线掰片→湿式磨边抛光→真实清洗漂洗干燥→检验首放，真实放行后服务另列 |
| market_state | 裸未框单片退火片，实际图纸加工配置，包装服务另列 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 机械磨边抛光退火玻璃片 |
| How much | 1 千克 |
| How well | 真实图纸组成厚度配置及平抛边倒棱检验，退火非安全状态 |
| How long or cycle | 一个完整披露代表生产期/批次含全部模式，实际服务区间另披露，无寿命声明 |
| reference_flow_link | `finished_sheet` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 玻璃（成型和加工） `82b33e71-bfaa-49b4-9627-ee5963433f6e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | 千克 |
| 必需限定信息 | 退火钠钙硅组成及透明/本体着色状态; 未涂镀单片未框状态; 实际未加工浮法原片供方边界及上游数据集; 实测净干质量和尺寸; 厚度配置分布; 机械平边抛光及倒棱图纸; 真实检验验收方法; 未热强化且未钢化; 无夹层涂镀镜面中空组装弯曲孔洞及雕刻; 划线掰片路线; 磨轮种类及实际铈供货配制路线; 水质及每种真实制剂; 首次放行Q门及唯一批次谱系; 时期及场址地理; 实际供电电压组合; WIP/FG及非WIP工具流体逐交换历史; 每种包装及毛实物移动账; 单列同批服务观察区间及覆盖 |

每项限定均在元数据、过程/参考流说明、产品描述或等效字段声明。宽泛参考身份不建立接受映射供方牌号或安全审批，完整原生限制及37199分类不符保留在finished_sheet。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished_sheet | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | 千克 | 唯一首次放行干裸质量Q，finished_sheet为1千克。排除包装残水重复放行发运，逐配置称量，不假定件重密度。 |
| native_units | all inventory rows | 原生参考属性 | 行单位 | 质量 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg；电力原生净热值 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ。原始kWh先乘3.6一次再归属，次级属性不证明独立密度件重。 |
| raw_quantity | all inventory rows | 真实广延量 | 原始单位 | 整份制剂一次，组成为子账。仅真实速率积分，已积分气液体积不乘时间。体积换质量先独立测同物质状态密度，不套水密度给油浆料，也不用单残差拟合两个未知。 |
| single_normalization | all inventory rows | 同批A_i及Q | 每参考流 | 原始采集不相除，转换历史真实分配后仅calc_reference执行A_i/Q一次，各卡引用同一x_i，Q=0保留原始负荷但无单位结果。 |

## 5. 系统边界


### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收带供方负荷及真实来料包装的未加工未涂镀退火浮法原片 |
| starting_condition_role | 完整冷转换的采购/转入原料 |
| product_classification_scope | CPC3.0 `37114`; narrower |
| recursive_input_rule | 同类输入带继承负荷保持可见，不递归消失，不将成品重包标制造 |
| upstream_dataset_requirement | 原片及逐制剂工具公用包装匹配实际供方形态状态运输包装水能边界 |
| disclosure | 首次放行Q制造门、完整转换、库存向量、单列观察服务区间及FG/包装实物门、排除未知量 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | manufacture | 从带供方继承负荷的未加工退火浮法原片接收开始，含卸货存放、排版、滚轮划线掰片、全部规定边/倒棱的湿磨抛光、实际抛光液配制、清洗漂洗干燥及首次放行前尺寸边部检验。泵、供气、集尘、水污泥处理、清理维护均纳入。购买抛光成品后包装不属于本转换路线。 | `vitro-scoring-td119`; `bovone-glass-2024`; `oneday-edgework` |
| `boundary_scope` | all products | 须有真实平边抛光退火终端。抛光不证明安全性能、钢化状态或认证。排除热强化/钢化、夹层、弯曲/钻孔/雕刻/珐琅、涂镀、镜面、中空及带框产品；其他有证据路线须另判适用性。本较窄候选不覆盖37114全部产品，上游原片熔制不重复为前景转换。 | `unsd-cpc-2025`; `vitro-heat-treatment-td124`; `rig-fabrication`; `oneday-annealed` |
| `boundary_q` | manufacture; supply_services | Q是声明磨边、清洗干燥检验后唯一新增首次质量放行的干裸片千克，每物理片仅计一次，同批期末FG已在Q内而非另加产量。交付复检修理重发不造Q。真实放行后包装仓储搬运发运及损失单列同批服务账，披露观察区间、未来未完覆盖及后续增量；期初FG服务不能除以无关当期Q。 | `oneday-edgework`; `ilcd-general-2010` |
| `boundary_history` | all inventories | 制造与FG服务分账按实物量及逐交换继承向量核对。制造期末仅含未首放原料/WIP及未归属的在装工具/流体/资产服务库存；每片首次放行及其制造向量转入FG，包含期末仍留库片。保留失败零产出启停待机清理及真实返工负荷。FG外返按原毛发运数量/向量反向；逐项记录真实修理清洗新增材料水、去除玻璃水及增量服务交换，均关联原Q批次。复检修理不新增Q。纳入资产的实物存量与有记录服务归属分开，不编寿命、不每期重复整份采购。合并抵消内部首放转移及内部Q。 | `ilcd-general-2010` |
| `boundary_packaging` | supply_services | 每种包装：期初空包装+附着WIP/FG+周转存量+外购+外返接收=对应期末+随毛实物发运+对外退还+废弃。对来料/出货包装架分别执行，内部复用转移抵消；返回不算新购，即使玻璃退回也保留毛发运。包装不入裸玻璃Q，不自动成为副产品或替代信用。 | `ilcd-general-2010` |
| `boundary_formulations` | all inventory rows | 每种供货切割液浆料冷却剂清洁剂整份仅采购一次，纯度载水活性物杂质只作组成子账。真实厂内配制逐外购原料、补水、电力及配制损失记录，不能再购同一整份浆料。实际有而未列的每种材料电力燃料热包装废物及已识别物种去向均独立增卡，未知存在与否不等于零或不适用。 | `vitro-scoring-td119`; `bovone-glass-2024` |
| `boundary_physical` | all physical gates | 总湿干质量、游离夹带蒸发水、相关玻璃/铈/磨轮/有机元素须独立核对。混合玻璃粉不等于纯SiO2，COD/VOC是指标而非一种化学品。实际物种反应氧吸收及反应/结构/相态水需独立证据，冷机械加工不默认配料碳酸盐分解或燃烧。一个残差不能解两个未知，制造子门、FG服务及合并实物门须一致，闭合未知挂起相关数据包。 | `bovone-glass-2024`; `ilcd-general-2010` |
| `boundary_utilities` | all utilities | 逐真实公用设施计量，目录功率产能不是耗量。风刀可为鼓风供风，不编造外购压缩空气锅炉蒸汽。真实外部换热水/冷凝水返回须列进出质量、真实温压焓及供方水能约定，真实返回列Product flow；不能省略真实返回或复制不存在的返回。内部循环不重复采购。 | `bovone-glass-2024` |

## 6. 过程清单结构


### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 接收划线掰片湿磨抛光真实配液清洗干燥检验首放 | required |  | 完整前景转换及真实公用残留 | 每1千克参考流 |
| supply_services | 真实放行后包装仓储搬运发运及修理增量 | required | 包括未发FG的同批观察区间，仅真实条件包装 | 另列服务账，无新增玻璃产量 | 每1千克参考流 |

制造包括全部所列子步骤，保留子步骤表计转移谱系并抵消内部转移，各卡用同一首次Q批次。放行后服务不因期末FG或发运另增产品输出，其独立实物账保留毛发运返回及真实损失。完成数据包前逐一新增真实存在未列交换，未知存在与否不等于零。

### 过程：完整冷加工（`manufacture`）

#### 输入

##### 产品流

###### 未加工退火浮法原片（`stock_sheet`）

划线磨边前接收的透明/本体着色未涂镀单片原片。净干玻璃及供方原负荷仅计一次，不能购入抛光成品。原生为工厂制造片材，也含表面研磨抛光种类；本交换只限真实未加工退火浮法原片，不证明牌号厚度密度涂层供方。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg；其余次级属性不证明独立密度或单件重。 数量链接：x_i准确对应本行原始`cp_material`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：浮法玻璃及表面经研磨或抛光的平板玻璃 `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_material`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：`vitro-scoring-td119`; `oneday-annealed`

###### 电力（`core_electricity`）

计量划线掰片磨边配浆泵水处理清洗干燥供气治理，包括失败启停待机清理。原生仅中国1–35千伏用户侧电网平均消费，净热值作为MJ能量属性而非燃料质量；其他电压地理合同组合须核验替代，本身份不证明电厂绿电合同或场址因子。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ；其余次级属性不证明独立密度或单件重。 数量链接：x_i准确对应本行原始`cp_energy`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行已计算一次的x_i结果；由`cp_energy`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`bovone-glass-2024`; `ilcd-general-2010`

###### 自来水（`tap_makeup`）

真实外供自来补水用于湿磨厂内配液清理清洗。原生未指定供方地理，仅提供质量参考属性，不证明独立密度或现场处理路线。区分补水内部循环与DI水，浆料载水不重复采购。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg；其余次级属性不证明独立密度或单件重。 数量链接：x_i准确对应本行原始`cp_water`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_water`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`bovone-glass-2024`

###### 去离子漂洗水（`di_rinse`）

仅真实去离子水供给时纳入。原生Product/Mass不规定纯度路线地理供方，不代表普通自来/原水。厂内制备须列进水及真实处理投入电力排出，抵消内部DI转移而非采购两次。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg；其余次级属性不证明独立密度或单件重。 数量链接：x_i准确对应本行原始`cp_water`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_water`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`bovone-glass-2024`

###### 矿物油基玻璃切割制剂（`scoring_fluid`）

一种真实整份矿物油基切割制剂，保留供方/SDS组成挥发份皮重及罐期初期末充注。TD119无通用配方排放因子；真实不同制剂须另卡，纯油淬火油钻井液不能自动匹配。 数量链接：x_i准确对应本行原始`cp_aux`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：矿物油基玻璃切割制剂
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_aux`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_aux`
- 来源：`vitro-scoring-td119`

###### 碳化钨玻璃划线刀轮（`scoring_wheel`）

一个含实际结合剂的供货刀轮组件，不另采购元素钨；追溯未用在装退役质量及磨耗。件转质量须同配置实测净件重，TD119不提供通用轮径载荷要求。 数量链接：x_i准确对应本行原始`cp_aux`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：碳化钨玻璃划线刀轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_aux`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_aux`
- 来源：`vitro-scoring-td119`

###### 金属结合剂金刚石磨轮（`metal_wheel`）

有记录工位的一种真实供货轮组件，测在装期初期末质量磨耗及退役芯体质量，记录磨料结合剂配置。纯合成金刚石不是轮组件，目录备选不使每种轮成为通用必需。 数量链接：x_i准确对应本行原始`cp_aux`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：金属结合剂金刚石磨轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_aux`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_aux`
- 来源：`bovone-glass-2024`

###### 树脂结合剂金刚石抛光轮（`resin_wheel`）

有记录工位的一种真实供货轮组件，测在装期初期末质量磨耗及退役芯体质量，记录磨料结合剂配置。纯合成金刚石不是轮组件，目录备选不使每种轮成为通用必需。 数量链接：x_i准确对应本行原始`cp_aux`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：树脂结合剂金刚石抛光轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_aux`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_aux`
- 来源：`bovone-glass-2024`

###### 毛毡抛光轮（`felt_wheel`）

有记录工位的一种真实供货轮组件，测在装期初期末质量磨耗及退役芯体质量，记录磨料结合剂配置。纯合成金刚石不是轮组件，目录备选不使每种轮成为通用必需。 数量链接：x_i准确对应本行原始`cp_aux`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：毛毡抛光轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_aux`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_aux`
- 来源：`bovone-glass-2024`

###### 氧化铈粉（`dry_ceria`）

仅真实厂内配抛光液单独外购CeO2粉。原生CAS1306-38-3为工厂端淡黄白Ce(IV)氧化物粉，未设粒径纯度地理抛光牌号。光催化用途文字不保证性能。测纯度含水形态，纳米表处混合预湿制品须另核兼容；真实配水电力损耗另列。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg；其余次级属性不证明独立密度或单件重。 数量链接：x_i准确对应本行原始`cp_formulation`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：氧化铈 `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_formulation`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_formulation`
- 来源：`bovone-glass-2024`

###### 水性氧化铈抛光浆料（`bought_ceria_slurry`）

替代路线一种真实整份水性氧化铈制剂，供货质量仅计一次。纯度载水稳定剂只为子账不另采购，同一外购制剂不再计dry_ceria。原生通用抛光粉固定30%水且列金刚石/铈备选，不能绑定本含水未定浆料。 数量链接：x_i准确对应本行原始`cp_formulation`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：水性氧化铈抛光浆料
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_formulation`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_formulation`
- 来源：`bovone-glass-2024`

###### 水混合型玻璃研磨冷却浓缩制剂（`coolant_concentrate`）

条件纳入一种真实整份水混合冷却制剂，保留供方配方SDS和供货浓度，区别浆料切割液及实际稀释水，包含原始在装充注及补加，测浓度漂移而非套泛用默认值。 数量链接：x_i准确对应本行原始`cp_formulation`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：水混合型玻璃研磨冷却浓缩制剂
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_formulation`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_formulation`
- 来源：`bovone-glass-2024`

###### 矿物液压油（`machine_oil`）

条件纳入真实矿物液压流体，非WIP在装期初期末质量及继承交换向量与未用库存补加排空泄漏退役分开，留存不等于每期全耗。PAO合成油糠醛CAS98-01-1及泛油候选不能仅按名称接受。 数量链接：x_i准确对应本行原始`cp_aux`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：矿物液压油
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_aux`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_aux`
- 来源：`bovone-glass-2024`

###### 水性玻璃清洗剂制剂（`wash_detergent`）

条件纳入真实供方特定整份水性清洗制剂，清水清洗不能推定清洗剂。独立识别成分残留物种子账，不重复采购载水或把COD当一种化学品。 数量链接：x_i准确对应本行原始`cp_formulation`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：水性玻璃清洗剂制剂
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_formulation`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_formulation`
- 来源：`bovone-glass-2024`

###### 液态换热水（`exchange_water_in`）

仅真实外部液态换热水边界，独立测进/返质量及温压焓，保留供方水热约定以免重复冷却服务；仅配对真实返回，内部循环不重复采购，不假定锅炉蒸汽或虚构冷凝水。 数量链接：x_i准确对应本行原始`cp_water`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：液态换热水
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_water`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`bovone-glass-2024`

#### 输出

##### 产品流

###### 液态换热水（`exchange_water_return`）

仅真实外部液态换热水边界，独立测进/返质量及温压焓，保留供方水热约定以免重复冷却服务；仅配对真实返回，内部循环不重复采购，不假定锅炉蒸汽或虚构冷凝水。 数量链接：x_i准确对应本行原始`cp_water`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：液态换热水
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_water`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`bovone-glass-2024`

###### 机械磨边抛光退火玻璃片（`finished_sheet`）

Q为全部规定磨边清洗干燥检验后唯一新增首次质量放行裸片净干质量。原生“玻璃（成型和加工）”未限定牌号退火边部，但其37199分类与本37114范围不同，披露该孤立分类不符，仅用其宽泛玻璃物理身份。本行须声明未涂镀钠钙硅单片未框平边抛光退火片、真实图纸厚度检验及非安全状态；身份不提供密度单片重认证或供方匹配。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg；其余次级属性不证明独立密度或单件重。

- 选定流：玻璃（成型和加工） `82b33e71-bfaa-49b4-9627-ee5963433f6e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 来源：`oneday-annealed`; `oneday-edgework`; `rig-fabrication`

##### 废物流

###### 未涂镀钠钙玻璃余料（`glass_offcut`）

净干余料废片按真实去向分开，留用坯片保留谱系向量，晶圆废玻璃和窑炉内碎料不自动匹配。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：未涂镀钠钙玻璃余料
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 湿玻璃研磨污泥（`glass_sludge`）

真实分离泥饼独立测含水及玻璃铈磨轮组成，泥饼水不再计废水。原生加工污泥为Product flow，未采作废物流身份。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：湿玻璃研磨污泥
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 玻璃清洗废水（`wash_wastewater`）

一个真实液体外排至处理门，测湿质量悬浮物及真实溶解物种。化学不同且分开排的回路须另行，COD不是化学质量。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：玻璃清洗废水
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 废碳化钨划线刀轮（`retired_scoring_wheel`）

一种真实退役组件，剩余质量与磨失颗粒分开。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废碳化钨划线刀轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 废金属结合剂金刚石磨轮（`retired_metal_wheel`）

一种真实退役磨轮芯体，结合剂磨耗去向分开。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废金属结合剂金刚石磨轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 废树脂结合剂金刚石抛光轮（`retired_resin_wheel`）

一种真实退役树脂结合剂轮，不合并金属毛毡工具废物。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废树脂结合剂金刚石抛光轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 废毛毡抛光轮（`retired_felt_wheel`）

一种真实退役毛毡轮，包含实测残浆水分去向。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废毛毡抛光轮
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 废矿物液压油（`spent_hydraulic_oil`）

实物库存变化后的真实在装排出量，不设固定油水添加剂配方或自动回收信用。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废矿物液压油
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

###### 收集的钠钙玻璃粉尘（`captured_glass_dust`）

真实收集混合玻璃粉尘区别逸散空气尘及污泥固体，不把全部尘称纯硅。 数量链接：x_i准确对应本行原始`cp_residue`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：收集的钠钙玻璃粉尘
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_residue`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`

##### 基本流

###### 排入空气的水蒸气（`water_vapor`）

真实独立测得的湿加工干燥蒸发水，核对夹带废水库存变化，不推定反应水或外购蒸汽。原生CAS7732-18-5水蒸气为Elementary/Mass/kg，仅空气未特指。原生同义词有液水冰及重水氚水噪声，不改变一致的普通水CAS、蒸气名及空气介质，也不采为同位素液水冰水体土壤高烟囱身份；仍须匹配真实去向。 原生参考属性→单位组→单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg。 数量链接：原始`cp_species`经`calc_raw_conversion`、`calc_history`及真实分配后只由`calc_reference`得到一次x_i，同一1千克基准不再除。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_species`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`bovone-glass-2024`

###### 排入空气的钠钙玻璃颗粒（`airborne_glass_dust`）

真实逸散钠钙玻璃颗粒至空气未特指，质量测量未分配粒径级。原生定义不设化学组成粒径分布烟囱高度或LCIA因子；其熟料煅烧案例及0.01689kg/t明确为来源特定应用，不是本玻璃路线限制或排放因子。保留真实玻璃组成，不称纯结晶硅，不叠加重叠总尘PM10/PM2.5；若已知粒径介质须用正确匹配流。真实已识别挥发切割清理物种去向另列，总VOC不能替代。 原生参考属性→单位组→单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg。 数量链接：原始`cp_species`经`calc_raw_conversion`、`calc_history`及真实分配后只由`calc_reference`得到一次x_i，同一1千克基准不再除。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_species`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_species`
- 来源：`vitro-scoring-td119`; `bovone-glass-2024`


### 过程：放行后供货服务（`supply_services`）

#### 输入

##### 产品流

###### 电力（`service_electricity`）

同一首次Q批次真实放行后包装仓储搬运发运及增量修理清洗重包用电，包括等待失败搬运，区别制造及期初FG批次。原生仅中国1–35千伏用户电网平均消费，以净热值作MJ能量属性而非燃料质量；其他电压地理组合须核验替代。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ；其余次级属性不证明独立密度或单件重。 数量链接：x_i准确对应本行原始`cp_service`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行已计算一次的x_i结果；由`cp_service`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`ilcd-general-2010`

###### 纤维素玻璃隔层纸（`pack_paper`）

条件纳入一种真实供货包装件，保留完整组成及空附着周转库存返回历史；上游分子只计新增采购及可论证服务归属，非每次内部复用返回。毛发运废物及真实来料包装独立记账。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：纤维素玻璃隔层纸
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 聚乙烯薄膜（`pack_film`）

条件纳入一种真实供货包装件，保留完整组成及空附着周转库存返回历史；上游分子只计新增采购及可论证服务归属，非每次内部复用返回。毛发运废物及真实来料包装独立记账。 原生聚乙烯薄膜CAS9002-88-4为工厂生产混合，未设牌号地理；皮革箱包分类与一致的PE名称CAS备注矛盾，是已披露孤立分类瑕疵。备注竞争材料PET不把PE变成PET，仍须核实际组成供方。 原生参考属性→单位组→参考单位为 `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg；其余次级属性不证明独立密度或单件重。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### PET运输捆扎带（`pack_pet_strap`）

条件纳入一种真实供货包装件，保留完整组成及空附着周转库存返回历史；上游分子只计新增采购及可论证服务归属，非每次内部复用返回。毛发运废物及真实来料包装独立记账。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：PET运输捆扎带
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 木制玻璃运输箱（`pack_timber`）

条件纳入一种真实供货包装件，保留完整组成及空附着周转库存返回历史；上游分子只计新增采购及可论证服务归属，非每次内部复用返回。毛发运废物及真实来料包装独立记账。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：木制玻璃运输箱
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 可重复使用钢制玻璃运输A形架（`pack_rack`）

条件纳入一种真实供货包装件，保留完整组成及空附着周转库存返回历史；上游分子只计新增采购及可论证服务归属，非每次内部复用返回。毛发运废物及真实来料包装独立记账。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：可重复使用钢制玻璃运输A形架
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

#### 输出

##### 废物流

###### 废纤维素玻璃隔层纸（`waste_pack_paper`）

仅真实废弃纤维素玻璃隔层纸这一流，保留残留水分及真实去向；包装对外返回不是废物采购或玻璃产量。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废纤维素玻璃隔层纸
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 废聚乙烯薄膜（`waste_pack_film`）

仅真实废弃聚乙烯薄膜这一流，保留残留水分及真实去向；包装对外返回不是废物采购或玻璃产量。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废聚乙烯薄膜
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 废PET运输捆扎带（`waste_pack_pet_strap`）

仅真实废弃PET运输捆扎带这一流，保留残留水分及真实去向；包装对外返回不是废物采购或玻璃产量。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废PET运输捆扎带
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 废木制玻璃运输箱（`waste_pack_timber`）

仅真实废弃木制玻璃运输箱这一流，保留残留水分及真实去向；包装对外返回不是废物采购或玻璃产量。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废木制玻璃运输箱
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 废可重复使用钢制玻璃运输A形架（`waste_pack_rack`）

仅真实废弃可重复使用钢制玻璃运输A形架这一流，保留残留水分及真实去向；包装对外返回不是废物采购或玻璃产量。 数量链接：x_i准确对应本行原始`cp_packaging`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：废可重复使用钢制玻璃运输A形架
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_packaging`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 放行后破损退火玻璃片（`fg_breakage`）

首次放行后真实破损或修理去除干玻璃，不新增Q。保留原玻璃负荷湿干质量变化原发运返回反向及增量服务负荷，区别制造废片。 数量链接：x_i准确对应本行原始`cp_service`经`calc_raw_conversion`、`calc_history`及真实分配后的唯一`calc_reference`结果；这是同一1千克参考基准，不是件转千克，不允许后续再次相除。

- 选定流：放行后破损退火玻璃片
- 流属性/单位：质量 / 千克
- 数量规则：使用本行已计算一次的x_i结果；由`cp_service`采集未除原始量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_service`
- 来源：`ilcd-general-2010`


## 7. 分配与副产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_first` | all allocated exchanges | 仅需分配的归因情景使用本层级。先专属计量细分或可论证虚拟细分，把产品专属引起的交换专属归属；再识别剩余每个交换的确定性物理因果，不仅选择相关物理属性。 | `ilcd-general-2010` |
| `allocation_drivers` | manufacture; supply_services | 按配置检验磨边切割电力与实际机时边长去除功、清洗与面积流量时间、仓储搬运与空间时间或移动的关系；这些是逐交换待证候选驱动而非固定比例，不能将全部负荷自动按玻璃质量面积或毛发运分配。 | `ilcd-general-2010` |
| `allocation_residual` | residual common process | 只有说明实际/虚拟细分及逐交换确定性物理因果为何仍留剩余后，才对剩余用同共同过程出口及实际品质含水包装数量状态同期市场价值，剔除下游整理运输包装加价；保留数量价格日期及敏感性。因果价值证据不足仍未解决，不能任意选物理/经济法。 | `ilcd-general-2010` |
| `allocation_scrap` | offcut; residues; packages | 区分真实可售副产品外送回收料及废物，保留损失和处理负荷；内部留用余料继承原交换向量。外售处置依实际状态价值及处理边界，废料销售架水返回和复用不自动获得原生玻璃或避免处置信用。 | `ilcd-general-2010` |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则


### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | stock_sheet | 原始计量及历史记录 | 供方批; 净湿干质量; 尺寸厚度; 接收状态; 期初期末原料/WIP; 转移; 逐交换继承向量 | 校准收发净称量及库存核对，几何换算只用独立真实密度和去除体积 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_release | manufacture | finished_sheet | 原始计量及历史记录 | 唯一片批; 图纸; 退火状态; 净干裸质量; 尺寸厚度; 边部倒棱结果; 废片; 首放时间; WIP/FG移动 | 校准裸片干净称量去皮关联实际尺寸边部验收，将唯一首次放行千克相加为Q，不假定密度单件重 汇总方法：将唯一新增干首放千克相加为Q，不用发运复检。采集原始量不除，仅calc_reference形成每参考流。 | kg | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_energy | manufacture | core_electricity | 原始计量及历史记录 | 载能体; 起止表数; 积分电量或真实速率时间; 电压组合地理; 运行失败待机清理; 任务; 因果驱动 | 全部设备供气泵处理工序校准分表并核账单，不用目录额定值清单 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kWh; MJ | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_water | manufacture | tap_makeup; di_rinse; exchange_water_in; exchange_water_return | 原始计量及历史记录 | 回路; 水源状态; 积分体积或真实速率时间; 独立密度温度; 质量; 期初期末在装充注; 浓度; 进返热状态焓; 供方约定 | 分别测补水真实外返，核对在装库存损失，厂内制DI时列真实处理投入，内部循环抵消 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg; m3; K; Pa; MJ | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_aux | manufacture | scoring_fluid; scoring_wheel; metal_wheel; resin_wheel; felt_wheel; machine_oil | 原始计量及历史记录 | 单件/制剂; 供方/SDS; 组成; 配置及称量净件重; 未用在装期初期末质量; 继承交换向量; 补加; 磨耗; 排空; 泄漏; 退役芯体; 去向 | 独立称供货退役工具、在装流体充注磨耗及真实组成，追溯原始更换负荷，留存不等于全耗 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_formulation | manufacture | dry_ceria; bought_ceria_slurry; coolant_concentrate; wash_detergent | 原始计量及历史记录 | 真实整份制剂; 纯度; 游离结构水; 成分; 真实外购原料; 配水电力; 浓度; 期初期末充注; 配制损失 | 区分整份采购与真实厂内配制，逐投入损失称量并独立测组成，载水活性物子账不二次采购 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg; kWh | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_residue | manufacture | individual manufacturing waste | 原始计量及历史记录 | 单一废物; 湿干质量; 独立含水及玻璃铈磨轮含量; 留用余料; 期初期末残留向量; 处理去向 | 隔离校准称量废片泥饼废水退役工具，独立分析含水物种及去向凭据，不重复泥饼水和磨耗质量 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_species | manufacture | water_vapor; airborne_glass_dust; each actual additional species | 原始计量及历史记录 | 真实物种/CAS; 介质; 粒径级; 浓度; 积分气液体积或真实速率时间; 温压; 独立密度; 治理效率; 检出限; 游离相态反应水 | 独立物种介质采样及实测体积/速率积分，覆盖真实运行失败清理，不用总VOC/COD当化学身份或重叠颗粒求和 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg; actual concentration/volume units | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_service | supply_services | service_electricity; fg_breakage | 原始计量及历史记录 | 批次首次Q; 期初期末FG千克及交换向量; 毛发运; 外返; 原发运反向; 真实增量修理清洗重包; 每项真实材料水新增及玻璃水分去除; 原始服务电量; 驱动; 观察区间覆盖 | 逐放行片追溯仓储发运返回，测真实同批服务增量及湿干修理变化，期初FG批次分开，不新增Q 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg; kWh | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |
| cp_packaging | supply_services | single package acquisition; single packaging waste | 原始计量及历史记录 | 单种包装材料; 实际皮重配置; 期初期末空包装加附着WIP/FG加周转; 采购; 外返接收; 毛发运; 对外退还; 废物; 内部复用; 继承向量; 供方包装边界 | 逐包装件称量，毛实物移动独立于采购服务负荷，件换质量须同配置实称质量，内部复用转移抵消 汇总方法：逐真实交换批次合计未除原始量，转换单位核对历史实物账后真实分配，仅calc_reference形成每参考流。采集时不除，也不对x_i再除。 | kg; actual item count with measured mass | 逐事件批次移动及期末核对 | 含全部模式的同一完整生产期，真实同批服务观察区间另披露 | 各纳入线回路库存及真实服务门 | 每 1 千克 参考流 | 校准; 完整原始记录; 组成状态证据; 签署实物历史账及不确定度覆盖 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw_conversion` | all inventory rows | 各原始单位先一次转行单位再归属：原始kWh×3.6 = MJ，只有真实速率积分，已积分气液体积不乘时间。体积换质量须同物质状态独立实测密度及真实皮重。 | cp_energy; cp_water; cp_aux; cp_formulation; cp_species | 已换单位但未除的raw_i | `bovone-glass-2024` |
| `calc_history` | all inventory rows | 逐交换制造账：期初原料/WIP及未归属在装工具/流体/资产服务向量+真实新增=对应期末未首放/未归属向量+首放转移B_i^Q+其他可追溯去向。已首放期末FG不入该制造期末项，仍在B_i^Q内。FG服务账：期初FG向量+B_i^Q+按原发运向量计真实外返+真实增量服务新增=期末FG向量+毛发运向量+其他真实移除去向。返回反向不取消原Q已包含的制造。制造A_i为B_i^Q；服务A_i仅为真实归属同批服务增量，各依原Q仅归一一次。在装充注/资产实物库存与有记录服务归属分开，设备留存质量不是消耗或寿命假定。合并抵消内部B_i^Q及转移，不能从首放制造A_i再减期末FG。 | cp_material; cp_aux; cp_release; cp_service; cp_packaging | A_i未归一已归属交换向量 | `ilcd-general-2010` |
| `calc_reference` | all inventory rows | x_i = A_i / Q；A_i为本交换同Q批次经单位转换历史核对真实分配后尚未归一分子，Q为同批唯一新增首次合格干裸片千克。Q>0才一次相除，Q=0保留原始负荷调查后续归属而无单位结果。卡片及采集聚合只引用同一x_i不再除。制造与单列服务向量保持区别，期末FG已在Q内。 | cp_release; cp_material; cp_energy; cp_water; cp_aux; cp_formulation; cp_residue; cp_species; cp_service; cp_packaging | x_i每1千克参考流 | `ilcd-general-2010` |
| `calc_physical` | all inventory rows | 三个关联实物门独立核对。制造门：期初原料/WIP/在装库存+真实外部投入=对应期末未首放/在装库存+干首放转移Q+实测制造废物外送排放。FG服务门：期初FG+Q转入+真实外返+真实服务材料水投入=期末FG+毛实物发运+其他真实外送+实测服务废物排放，含修理真实玻璃水分去除。合并门抵消内部Q及转移：全部实物期初+真实外部投入返回=全部期末+毛外部发运及其他外送+实测废物排放；Q不能在期末FG或发运之外再当一份外部产品。按实际成分另核湿质量、玻璃固体、游离夹带蒸发水及相关Si/Ce/金属有机元素，在装工具/流体/资产实物分开。不用一个残差同时拟合未知磨损玻璃和蒸发，元素总量或COD/VOC不能确定反应水物种。 | cp_material; cp_release; cp_formulation; cp_water; cp_residue; cp_species; cp_service | 独立实物元素闭合 | `bovone-glass-2024`; `ilcd-general-2010` |
| `calc_package` | all inventory rows | 逐包装：期初空+附着WIP/FG+周转+采购+外返接收=对应期末+随毛实物发运+对外退还+废弃。内部复用抵消，另列真实采购服务负荷归真实批次，不把移动再算采购，采集不把原始数量除Q。 | cp_packaging; cp_service | 包装实物衡算及未归一已归属负荷 | `ilcd-general-2010` |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 真实图纸实测干净质量配置及抛光边首次放行须证明退火非安全终端，制造商供货介绍不认证未来用途。 | 图纸; 供方声明; 检验; 校准称量 |
| dq_coverage | all inventory rows | 完整代表场址时期原始记录含失败零产出启停待机清理返工及WIP/FG非WIP充注逐交换继承。核心终端路线、历史向量或真实实物物种闭合未知时挂起相关数据包，不造零。 | 完整覆盖不确定度表; 签署核对 |
| dq_native | all inventory rows | 核查全部原生名称同义词备注CAS形态牌号路线地理介质类型及所有属性。保留官方中文名，准确属性单位组单位链不导入次级密度件重性能清单，披露宽泛玻璃膜分类瑕疵，实际供方仍为普通采集缺口。 | 原生限制及供方状态兼容 |
| dq_services | all inventory rows | 制造与观察到的同批放行后服务分开发布，附区间完整性；审计原发运返回反向、真实湿干修理及逐包装毛实物账。未来未观察服务不算全寿命完成负荷。 | 批次移动服务及包装账 |
| dq_synthesis | all inventory rows | 独立产品设备方法证据是定性综合，不假称同工厂SKU订单。不设默认温度强度认证寿命密度单片重固定比例或目录额定耗量；普通辅助UUID供方缺口本身不使方法成为draft。 | 逐来源范围反证及数据披露 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | 须真实较窄覆盖终端及全部限定，无安全声明，拒绝本路线下热处理夹层涂镀镜面中空或仅重包成品片。 | `unsd-cpc-2025`; `vitro-heat-treatment-td124`; `oneday-annealed`; `oneday-edgework` |
| `validate_measurement` | all inventory rows | 成品行是Mass/kg的1千克首次合格干裸片；其他行依规程采原始量，经转换历史分配后仅引用calc_reference一次x_i；Q=0无单位结果，件数/原生次级系数不证明净重密度。 | `ilcd-general-2010` |
| `validate_route` | all operations | 确认接收原片划线掰片湿磨抛光真实配液清洗干燥边部尺寸放行及全部真实公用残留物种，含失败待机清理返回，无证据不等于不存在。 | `vitro-scoring-td119`; `bovone-glass-2024` |
| `validate_ledgers` | all balances | 分别闭合制造、FG服务及合并门湿干水元素实物和逐交换历史账，包含在装工具/流体/资产库存、真实修理新增移除及每种包装。制造期末不含已首放FG，其B_i^Q包含该FG；合并抵消内部Q/B_i^Q，不能将首放、期末FG与发运重复算产品。服务增量仍用原Q，保留毛发运返回，不重复浆料载水磨耗泥饼水或重叠颗粒指标。 | `ilcd-general-2010`; `bovone-glass-2024` |
| `validate_allocation` | all allocated exchanges | 证明实际/虚拟细分、逐交换确定性物理因果，之后只有可论证剩余才同门同状态同期市场价值；无固定比例任意选法自动废料信用或编价。 | `ilcd-general-2010` |
| `validate_evidence` | all datasets | 绑定需真实原生限制及准确属性→单位组→参考单位，具体供方辅助缺口明确保留。核心终端路线、库存历史、计量或实物闭合未知仍挂起，工程检查不等于科学翻译映射发布审批。 | `ilcd-general-2010` |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 匹配退火抛光片的上游输入，保留制造与单列观察服务向量 |
| allowed_use | 匹配配置状态场址时期门及原生限制的真实未涂镀单片未框平边抛光退火片 |
| excluded_use | 37114整叶覆盖; 安全强度认证声明; 钢化弯曲钻孔夹层涂镀镜面中空带框; 成品重包当制造; 假定全寿命服务; 自动信用 |
| required_metadata | 退火钠钙硅组成及透明/本体着色状态; 未涂镀单片未框状态; 实际未加工浮法原片供方边界及上游数据集; 实测净干质量和尺寸; 厚度配置分布; 机械平边抛光及倒棱图纸; 真实检验验收方法; 未热强化且未钢化; 无夹层涂镀镜面中空组装弯曲孔洞及雕刻; 划线掰片路线; 磨轮种类及实际铈供货配制路线; 水质及每种真实制剂; 首次放行Q门及唯一批次谱系; 时期及场址地理; 实际供电电压组合; WIP/FG及非WIP工具流体逐交换历史; 每种包装及毛实物移动账; 单列同批服务观察区间及覆盖 |
| required_quality_disclosure | 来源范围技术综合; 原生限制供方缺口; 完整原始不确定度证据; 真实因果归属; WIP/FG非WIP充注向量实物衡算; 服务区间完整性; 真实未知挂起 |
| update_trigger | 玻璃加工图纸终端或热安全路线; 配方粒子形态; 磨轮清洗公用技术; 供方电力组合; 门库存历史; 排放处理分配变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, PDF p180. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 区分原片、加工片、安全玻璃及镜面/中空玻璃的分类上下文。 |
| `vitro-scoring-td119` | handbook | Vitro, TD-119 Guidelines for Glass Scoring and Breakout Quality, complete9-page publisher PDF incl pp4–8 counterexamples and table footnotes. https://www.vitroglazings.com/media/10hbno4i/tech_doc_119.pdf | 刀轮划线掰片、切割液、检验、更换和缺陷；不采用通用设定、强度、得率或能耗。 |
| `vitro-heat-treatment-td124` | handbook | Vitro, TD-124 Fabrication of Heat Treated Glass, revision1,2016-10-04, complete2-page publisher PDF. https://www.vitroglazings.com/media/rocj2kmu/tech_doc_124.pdf | 相邻路线反证：热处理后加工限制，不得将抛光钢化片与退火片互换。 |
| `bovone-glass-2024` | handbook | Bovone, Glass Division2024, complete publisher PDF; PDF pp4–6 (printed6–11) edging/wheels/Companion and PDF p9 (printed16–17) washing; lamination/coating elsewhere. https://bovone.com/wp-content/uploads/2024/09/Cat_glass2024.pdf | 研磨抛光、金属/树脂/毛毡轮及冷却液/铈残留去除清洗的定性综合；额定值不是实测耗量、同工厂/SKU或终端认证。 |
| `rig-fabrication` | handbook | Rochester Insulated Glass, Glass Fabrication, whole publisher HTML snapshot2026-10-20; edgework plus adjacent hole/notch text. https://rochesterinsulatedglass.com/fabrication/ | 退火抛光边供货可能性，同时保留边部锋利的矛盾措辞及孔/缺口偏好热处理限制；不支持泛化钻孔或用途审批。 |
| `oneday-annealed` | handbook | One Day Glass / Peninsula Glass, Annealed Glass, whole publisher HTML snapshot2026-10-20. https://www.onedayglass.com/types-of-glass/annealed-glass/ | 真实退火供货、柜门/家具覆盖片示例及非安全破裂限制；无密度、质量、承载或适用性默认值。 |
| `oneday-edgework` | handbook | One Day Glass / Peninsula Glass, Custom Glass Edgework, whole publisher HTML snapshot2026-10-20. https://www.onedayglass.com/capabilities/custom-edgework/ | 机械平边抛光及小倒棱供货选项，区别于磨砂/磨棱/斜边；合成技术证据，不假称核验当代订单。 |
| `syracuse-edgework-2012` | handbook | Syracuse Glass, Glass Edgework Options,2012-04-24 Rev1, whole2-page publisher PDF. https://syracuseglass.com/E-DOCS/general/EDOCS/Glass%20Edgework%20Options.pdf | 独立抛光边形态及原切/磨砂/磨棱反例；历史指导，不宣称现行ASTM符合性或采用数值公差。 |
| `ilcd-general-2010` | official_guidance | European Commission JRC, ILCD General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, PDF pp275–288 (printed255–268). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因分配情景：细分、逐交换确定性物理因果、剩余同共同门同状态市场价值；无固定比例、任意选法、自动替代或整部手册符合性。 |
