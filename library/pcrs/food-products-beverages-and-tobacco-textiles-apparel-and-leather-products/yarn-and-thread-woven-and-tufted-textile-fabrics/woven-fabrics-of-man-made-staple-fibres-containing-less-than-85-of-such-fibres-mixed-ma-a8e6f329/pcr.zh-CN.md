---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-a8e6f329
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含人造短纤维低于85%、主要或仅与羊毛或细动物毛混纺的机织织物

## 1. 范围与适用性

本 PCR 适用于人造短纤维质量占比低于 85%、主要或仅与羊毛或细动物毛混纺的机织织物门到门生产。范围包括纱线准备、整经与条件性上浆、织造、条件性前处理/染色/整理、检验和包装。路线可使用合成短纤维、人造短纤维、羊毛或一种具名细动物毛，但每条同质产品路线必须分别建模。

本 PCR 不包括针织物或钩编织物、非织造布、地毯、绒类或特种织物、服装、以纱线作为参考产品的产品、组成属于其他 CPC 叶节点的织物，以及下游使用或生命末期。上游纤维和纱线生产以及厂外残余物处理应由链接数据集表示，除非这些活动在声明的前景场址内实施。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-a8e6f329 |
| classification_refs | CPC 3.0: 26770（精确） |
| covered_products | 人造短纤维质量占比低于 85%、主要或仅与羊毛或细动物毛混纺的机织织物 |
| excluded_products | 人造短纤维占比达到或超过 85% 的织物；棉为主要混纺组分的织物；针织、钩编、非织造、绒类、特种、仅涂层或制成品纺织品 |
| representative_product | 可销售的涤纶/羊毛机织物；其他合成纤维/羊毛、人造纤维/羊毛和具名细动物毛路线在单独声明时仍可适用 |
| production_route | 外购纱线经整经准备和织造，随后进行路线特定的湿法或干法整理、检验和包装 |
| market_state | 制造门处的坯布或成品机织物，声明组成、组织、整理、质量等级、含水基准和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供由低于 85% 的人造短纤维与主要或仅为羊毛或细动物毛的组分混纺而成的合格机织织物 |
| How much | 1 kg 净织物质量，不含包装 |
| How well | 符合声明的纤维身份与比例、纱线路线、织物组织、单位面积质量、幅宽、颜色、整理、质量等级和含水基准 |
| How long or cycle | 在织厂门交付的一个同质生产批次；该织物为中间产品，不表示使用时长 |
| reference_flow_link | 恰好 1 kg 的 `inspection_packaging` 合格输出，并链接到类别精确的天工产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净机织织物 |
| 参考产品流 | 含人造短纤维重量少于85%、主要或仅仅与羊毛或动物细毛混纺的人造短纤维机织织物 `dad59cf0-4b5e-4f0a-ae44-00f1b0587dfb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人造短纤维身份及质量百分比；羊毛或具名细动物毛身份及质量百分比；各纤维再生含量；纱线输入形态；织物组织；单位面积质量；可用幅宽；坯布、染色、印花、涂层或整理状态；染色与整理路线；颜色；质量等级和测试方法；含水基准；地理；参考年；包装是否纳入；分配方法 |

构建前景数据包时，每项必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。天工参考身份不提供这些路线事实。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考织物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 净织物，不含纸芯、薄膜、托盘及其他包装。保留毛重、皮重、净重和秤量记录。 |
| `blend_composition_mass` | 纤维与纱线组成 | Mass | kg 和质量百分比 | 在同一声明含水基准上确定每种具名纤维的比例。人造短纤维占比必须低于 85%，羊毛加具名细动物毛必须是主要或唯一混纺组分。 |
| `fabric_area_mass` | 织物结构 | Mass 与 area | g/m2、kg、m2 | 保留卷长、可用幅宽、实测质量和单位面积质量测试结果。仅可根据批次代表性实测值将面积换算为质量。 |
| `utility_separation` | 电力、蒸汽与天然气 | 各载能体特定属性 | kWh、MJ 或 m3 | 在原始计量单位中分别记录各载能体。在完成各自清单前，不得合并电力、外购蒸汽和现场燃料。 |
| `water_balance` | 工艺用水与废水 | Water content (mass) 或 volume | kg 或 m3 | 分别记录取水、内部回用、排放、蒸发和输出携水。内部回用不得作为新的取水。 |
| `chemical_recipe_mass` | 每种浆料、染料与助剂 | Mass | kg | 将每种外购化学物质或供应商配方作为独立原子交换记录，并声明浓度和有效成分基准；不得把化学品合计量作为一个交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在织厂门接收的外购合成或人造短纤维纱线与外购羊毛或具名细动物毛纱线，声明组成、纱支、含水基准、供应商和上游覆盖 |
| starting_condition_role | 织物生产前景系统的上游产品输入 |
| product_classification_scope | CPC 26770 机织织物；不包括纱线、针织物、非织造布、地毯、服装或其他组成类别的机织织物 |
| recursive_input_rule | 外购 CPC 26770 织物用于返工或混配时，应作为具有上游数据集的独立输入，不得递归地作为内部生产的参考织物 |
| upstream_dataset_requirement | 为每种纱线、公用工程、化学品和包装输入链接具有代表性的上游数据集，并为每种外排废物或废水链接处理数据集；披露地理、年份、技术、再生含量和运输是否纳入 |
| disclosure | 声明纤维身份和比例、纱线形态、织造技术、上浆、湿处理顺序、染料类别和具名物质、整理、现场燃料使用、废水去向、产品规格、期间、场址覆盖和分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_route_separation` | 纤维混纺与制造路线 | 分别建模每种同质纤维混纺、织物组织、上浆路线和整理路线；仅在路线清单完成且生产份额有记录后汇总。 | `un-cpc-3-0-26770`; `eu-txt-bref-2023` |
| `sb_required_operations` | 前景场址 | 包括纱线准备、整经、适用的上浆、织造、适用的湿法/干法整理、检验、包装、场址可归属公用工程、直接排放、纺织废物和废水。 | `eu-txt-bref-2023` |
| `sb_wool_sensitive_dyeing` | 涤纶/羊毛和聚酰胺/羊毛路线 | 保留实际的一浴或二浴顺序以及羊毛保护条件；不得用通用高温合成纤维染色路线替代。 | `eu-txt-bref-2023` |
| `sb_residual_destination` | 废物与废水 | 将每种外排纺织废物、包装废物和废水链接到其实际处理去向。报告场址运行现场处理时，将其作为单独计量的前景过程纳入。 | `eu-txt-bref-2023` |
| `sb_downstream_exclusion` | 参考产品 | 默认前景边界不包括服装制造、分销、使用、维护和生命末期。 | `un-cpc-3-0-26770`; `eu-pef-2021-2279` |

## 6. 过程清单结构

以下每张卡片表示一个原子交换。路线只能使用适用卡片，并必须为未列出的每种实际纤维、化学品、燃料、制冷剂、包装材料、废物或排放增加同等原子化的卡片。缺乏类别精确数值证据的数量均来自前景记录；本 PCR 不设 AI 生成的数量范围。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation_weaving` | 纱线准备、整经、上浆与织造 | `required` | 始终纳入；仅在使用上浆时采用浆料卡片 | 前景过程 | 每 1 kg 合格参考织物 |
| `wet_dry_finishing` | 路线特定的前处理、染色、干燥与整理 | `conditional` | 报告场址实施时纳入 | 前景过程 | 每 1 kg 合格参考织物 |
| `inspection_packaging` | 检验、卷装准备与包装 | `required` | 始终纳入 | 前景过程 | 每 1 kg 合格参考织物 |

### 过程：纱线准备、整经、上浆与织造（`yarn_preparation_weaving`）

#### 输入

##### 产品流

###### 合成短纤维混纺纱（`synthetic_blend_yarn`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：含人造短纤维重量少85%的纱（缝纫线除外） `914fcc34-ead6-4938-af63-b4ffa94e0a99`
- UUID 状态：confirmed — Product flow、CPC 26440、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量发给同质织物批次的净纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`un-cpc-3-0-26770`; `eu-txt-bref-2023`

###### 人造短纤维混纺纱（`artificial_blend_yarn`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：非供零售的人造短纤维纱线（缝纫线除外），按重量计，此类纤维的含量低于 85 `2fde586f-9999-4f3e-8022-fe0d8a19e270`
- UUID 状态：confirmed — Product flow、CPC 26461、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量发给同质人造纤维路线的净纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`un-cpc-3-0-26770`; `eu-txt-bref-2023`

###### 羊毛纱（`wool_yarn`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：含羊毛重量达85%或85%以上的羊毛纱，不供零售 `10c7de33-bef0-4310-98e7-734d8e2e4c9f`
- UUID 状态：confirmed — Product flow、CPC 26320、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量发给同质织物批次的净羊毛纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`un-cpc-3-0-26770`; `eu-txt-bref-2023`

###### 山羊绒纱（`fine_animal_hair_yarn`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Cashmere yarn
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：仅在声明细动物毛路线适用时计量发出的净山羊绒纱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`un-cpc-3-0-26770`

###### 纱线准备与织造用电（`weaving_electricity`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — Product flow、Net calorific value / kWh
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或分表计量整经、上浆、织机、压缩空气供应、调湿和本地辅助用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### 玉米淀粉浆料（`corn_starch_sizing`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：玉米淀粉 `982918a4-54b1-4792-9ee5-2f3155d4e929`
- UUID 状态：confirmed — Product flow、CPC 23220、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量加入浆料配制的玉米淀粉质量；不得与其他浆料物质合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 上浆路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`eu-txt-bref-2023`

###### 聚乙烯醇浆料（`pva_sizing`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：聚乙烯醇 `cea707dd-98a3-451d-bc43-2dcc145091e9`
- UUID 状态：confirmed — Product flow、CPC 34790、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量加入浆料配制的聚乙烯醇质量；不得与淀粉合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 上浆路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`eu-txt-bref-2023`

###### 上浆与织机清洁工艺水（`weaving_process_water`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：工艺用水 `8d71b67c-8513-4310-a01d-34e813e89ec3`
- UUID 状态：confirmed — Product flow、CPC 18000、Water content (mass) / kg
- 流属性/单位：Water content (mass) / kg
- 数量规则：计量跨越场址边界的新鲜补充水；内部循环水另行报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`eu-txt-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 人造短纤维/羊毛混纺机织坯布（`greige_blend_fabric`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Greige woven man-made-staple/wool blend fabric
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：计量转入整理或最终检验的坯布质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`eu-txt-bref-2023`

##### 废物流

###### 废人造短纤维/羊毛混纺机织织物（`textile_waste`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Waste woven man-made-staple/wool blend fabric
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：按一个具名去向计量纱头、布边、织机废料和不合格坯布；不同去向拆成附加卡片
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`eu-txt-bref-2023`

##### 基本流

###### 排入空气的不大于 10 微米颗粒物（`weaving_pm10`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：颗粒物 (PM10) `9fbb5096-ed5b-11e6-bc64-92361f002671`
- UUID 状态：confirmed — Elementary flow、Mass / kg、排入空气
- 流属性/单位：Mass / kg
- 数量规则：计量织造区域未捕集 PM10 负荷；仅在有非适用性记录时省略
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_weaving`
- 来源：`eu-txt-bref-2023`

### 过程：路线特定的前处理、染色、干燥与整理（`wet_dry_finishing`）

#### 输入

##### 产品流

###### 进入整理的人造短纤维/羊毛混纺机织坯布（`greige_fabric_to_finishing`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Greige woven man-made-staple/wool blend fabric
- UUID 状态：unresolved — 内部产品身份沿用 `greige_blend_fabric`
- 流属性/单位：Mass / kg
- 数量规则：计量整理路线接收的坯布质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 湿法整理工艺水（`finishing_process_water`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：工艺用水 `8d71b67c-8513-4310-a01d-34e813e89ec3`
- UUID 状态：confirmed — Product flow、CPC 18000、Water content (mass) / kg
- 流属性/单位：Water content (mass) / kg
- 数量规则：按前处理、染色、水洗和整理步骤计量新鲜补充水；内部回用另行报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### 湿法与干法整理用电（`finishing_electricity`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — Product flow、Net calorific value / kWh
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或分表计量整理线用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### 外购蒸汽工艺热（`finishing_steam`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- UUID 状态：confirmed — Product flow、Gross calorific value / MJ
- 流属性/单位：Gross calorific value / MJ
- 数量规则：计量归属于声明整理路线的外购蒸汽热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

###### 现场供热用气态天然气（`finishing_natural_gas`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID 状态：confirmed — Product flow、CPC 12020、Volume / m3
- 流属性/单位：Volume / m3
- 数量规则：计量用于路线可归属干燥、固化或热定形的天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 用于 pH 控制的乙酸溶液（`acetic_acid`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：乙酸溶液，水中98% `4fb2ab8d-9291-46ee-a9fd-11ec4c8784e3`
- UUID 状态：confirmed — Product flow、CPC 34140、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量溶液质量；保留供应商浓度和有效酸计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 氢氧化钠（`sodium_hydroxide`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID 状态：confirmed — Product flow、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量溶液或固体质量并保留浓度；仅在实际前处理、清洁或处理配方使用时纳入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 分散蓝 56（`disperse_blue_56`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Disperse Blue 56
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：仅在该确切物质用于人造纤维组分时计量染料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同配方合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 酸性蓝 9（`acid_blue_9`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Acid Blue 9
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：仅在该确切物质用于羊毛或细动物毛组分时计量染料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同配方合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 湿法整理人造短纤维/羊毛混纺机织织物（`wet_finished_blend_fabric`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Wet-finished woven man-made-staple/wool blend fabric
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：计量转入最终检验的合格织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

##### 废物流

###### 混纺织物染色整理废水（`textile_wastewater`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Wastewater from dyeing and finishing man-made-staple/wool woven fabric
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：计量转入具名现场或厂外处理去向的废水；分开不相容水流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`; `kir-et-al-2024-textile-resource-use`

##### 基本流

###### 排入空气的化石二氧化碳（`finishing_co2_fossil`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID 状态：confirmed — Elementary flow、Mass / kg、排入未指定空气
- 流属性/单位：Mass / kg
- 数量规则：计量负荷，或使用单独引用的现行因子根据采集燃料用量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 排入空气的化石甲烷（`finishing_methane_fossil`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID 状态：confirmed — Elementary flow、Mass / kg、排入未指定空气
- 流属性/单位：Mass / kg
- 数量规则：计量负荷，或使用单独引用的现行因子根据采集燃料用量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 排入空气的一氧化二氮（`finishing_n2o`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- UUID 状态：confirmed — Elementary flow、Mass / kg、排入未指定空气
- 流属性/单位：Mass / kg
- 数量规则：计量负荷，或使用单独引用的现行因子根据采集燃料用量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 排入空气的二氧化氮（`finishing_nitrogen_dioxide`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- UUID 状态：confirmed — Elementary flow、Mass / kg、排入未指定空气
- 流属性/单位：Mass / kg
- 数量规则：计量负荷，或使用单独引用的现行因子根据采集燃料用量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

###### 排入空气的非甲烷挥发性有机物（`finishing_nmvoc`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：非甲烷挥发性有机化合物 `d86bec9a-6555-11dd-ad8b-0800200c9a66`
- UUID 状态：confirmed — Elementary flow、Mass / kg、排入空气
- 流属性/单位：Mass / kg
- 数量规则：计量干燥、固化或整理产生的路线特定 NMVOC 负荷；仅在有非适用性记录时省略
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 同路线合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`eu-txt-bref-2023`

### 过程：检验、卷装准备与包装（`inspection_packaging`）

#### 输入

##### 产品流

###### 进入检验的成品混纺织物（`finished_fabric_to_inspection`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Wet-finished woven man-made-staple/wool blend fabric
- UUID 状态：unresolved — 内部产品身份沿用 `wet_finished_blend_fabric`
- 流属性/单位：Mass / kg
- 数量规则：计量进入最终检验和卷装准备的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-txt-bref-2023`

###### 检验与包装用电（`release_electricity`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID 状态：confirmed — Product flow、Net calorific value / kWh
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或可辩护分表分配检验、卷布、裁切和包装用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-pef-2021-2279`

###### 纸板筒或纸芯（`paperboard_core`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- UUID 状态：confirmed — Product flow、CPC 32199、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量纸芯质量，并在同一纸芯承载的实际织物质量间分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-pef-2021-2279`

###### 低密度聚乙烯包装膜（`ldpe_packaging_film`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：低密度聚乙烯包装膜
- UUID 状态：unresolved — 需要前景映射；被拒候选详情保留在 manifest 审查元数据中
- 流属性/单位：Mass / kg
- 数量规则：计量薄膜质量；保留聚合物牌号和再生含量声明
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-pef-2021-2279`

###### 木托盘（`wooden_pallet`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- UUID 状态：confirmed — Product flow、CPC 31702、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量托盘质量，按实际织物载荷和有记录的重复使用次数分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格 CPC 26770 机织织物（`reference_fabric`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：含人造短纤维重量少于85%、主要或仅仅与羊毛或动物细毛混纺的人造短纤维机织织物 `dad59cf0-4b5e-4f0a-ae44-00f1b0587dfb`
- UUID 状态：confirmed — Product flow、CPC 26770、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：恰好 1 kg 不含包装的合格净参考织物
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_release`
- 来源：`un-cpc-3-0-26770`

##### 废物流

###### 不合格成品混纺织物（`final_fabric_reject`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：Waste woven man-made-staple/wool blend fabric
- UUID 状态：unresolved — 与 `textile_waste` 共用未解决身份审查
- 流属性/单位：Mass / kg
- 数量规则：按最终去向计量不合格或降级织物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-txt-bref-2023`

###### 纸板包装废物（`waste_cardboard`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- UUID 状态：confirmed — Waste flow、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量送往声明去向的废纸芯或纸板包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-pef-2021-2279`

###### 废聚乙烯（`waste_polyethylene`）

本卡记录声明路线适用时跨越该过程边界的具名原子交换；其数量仅由所链接的前景采集协议提供。

- 选定流：废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- UUID 状态：confirmed — Waste flow、Mass / kg
- 流属性/单位：Mass / kg
- 数量规则：计量送往声明去向的废聚乙烯薄膜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`eu-pef-2021-2279`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | 不同纤维、组织与整理路线 | 在合并生产路线前，优先通过单独计量和过程细分避免分配。 | `eu-pef-2021-2279` |
| `al_internal_reuse` | 内部回用纱线、织物、水、浆料和热 | 将内部回用作为内部循环。只计入跨越报告边界的补充输入和最终输出；不得对同一循环重复记账。 | `eu-txt-bref-2023`; `eu-pef-2021-2279` |
| `al_saleable_outputs` | 可销售降级织物或回收材料 | 根据实际功能和去向将输出分类为产品或废物。如仍有共产品，采用有记录的因果物理关系；仅在没有可辩护物理关系时采用经济分配。 | `eu-pef-2021-2279` |
| `al_shared_utilities` | 共用计量表与辅助系统 | 使用有记录的因果驱动量分配共用公用工程，例如机器小时、计量需求、浴液体积或处理质量；报告驱动量与覆盖率。 | `eu-pef-2021-2279`; `kir-et-al-2024-textile-resource-use` |
| `al_waste_treatment` | 纺织废物与废水 | 按实测残余物质量或体积将处理负担归属到产生路线；处理需求不同时使用有记录的污染负荷驱动量。 | `eu-txt-bref-2023`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving` | `yarn_preparation_weaving` | 每种纱线、浆料物质、水、电力、坯布、废物、PM10 | 批次单、领料记录、秤、配方、计量表、废物记录、排放结果 | lot_id; fibre_name; yarn_mass; moisture_basis; starch_mass; PVA_mass; water; electricity; greige_mass; waste_mass_by_destination; PM10_load | 批次称量和配方核对，配合经校准计量表或可辩护的分表分配 | kg; kWh | 每批；公用工程至少按班次或月并有分配驱动量 | 至少 12 个代表性月份，或较短生产年中的每次生产活动 | 各场址、织机技术、混纺与上浆路线分别记录 | 归一化前闭合纱线/材料平衡；仅汇总同质路线 | 供应商规格；秤/表校准；配方；生产和废物记录；实验室 QA |
| `cp_finishing` | `wet_dry_finishing` | 织物、每种化学品、水、电力、蒸汽、燃气、输出、废水、每种空气排放 | 批次配方、加料记录、计量表、秤、实验室与排放记录 | lot_id; fabric_in; process_sequence; dye_name; chemical_name; formulation_concentration; dose_mass; water; electricity; steam_MJ; gas_m3; fabric_out; wastewater_mass; emission_load_and_method | 按批次或同质生产活动分别记录每种具名物质和载能体 | kg; kWh; MJ; m3 | 每批；计量表至少按班次或日 | 至少 12 个代表性月份，并覆盖所有代表性配方 | 各场址、设备、混纺与配方分别记录 | 核对配方与质量/水平衡；仅在路线完成后归一化 | 配方批准；加料凭证；计量表校准；实验室 QA；废水转移记录 |
| `cp_release` | `inspection_packaging` | 成品输入、合格产品、不合格品、电力、纸芯、薄膜、托盘、包装废物 | 卷票、检验结果、秤、包装 BOM、计量表、废物联单 | lot_id; roll_id; gross_mass; tare; net_mass; width; length; mass_per_area; composition; finish; grade; electricity; core_mass; film_mass; pallet_mass; reuse_cycles; reject_mass; waste_mass_by_destination | 称量每个放行批次并保留规格与检验结果 | kg; m; m2; g/m2; kWh | 每个放行批次 | 报告期间所有放行批次 | 各场址和产品规格分别记录 | 汇总合格净质量并将全部路线总量归一化到该质量；包装保持独立 | 校准；测试方法；检验证书；包装 BOM；联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_route_normalization` | 所有清单行 | `normalized_amount = homogeneous_route_period_amount / accepted_net_reference_fabric_mass` | 路线特定记录；合格净质量 | 每 kg 参考织物数量 | `eu-pef-2021-2279` |
| `cr_blend_share` | 纤维组成 | `fibre_share_i = dry_or_declared_basis_mass_i / sum_of_all_fibre_masses_on_same_basis`；保留原始测试或供应商结果 | 纤维质量或组成测试；共同含水基准 | 每种具名纤维的质量百分比 | `un-cpc-3-0-26770` |
| `cr_area_mass_check` | 卷装记录 | `calculated_mass = usable_length × usable_width × measured_mass_per_area`；与净秤量质量比较并调查差异 | 长度；宽度；g/m2；秤量质量 | 经核对卷装质量 | `eu-txt-bref-2023` |
| `cr_process_mass_balance` | 织造与整理 | 在兼容基准上核对输入织物/纱线及具名物质与产品、废物、排放、废水固形物和库存变化；调查差异而非虚构平衡流。 | 实测输入输出；水分/固形物 | 闭合率和差异 | `eu-pef-2021-2279` |
| `cr_water_balance` | 湿处理 | `fresh_withdrawal + water_in_inputs = wastewater + evaporation + water_in_product_and_waste + inventory_change`；单独报告循环水。 | 所有实测水项 | 经核对水平衡 | `eu-txt-bref-2023` |
| `cr_shared_utility` | 共用计量表 | `route_utility = metered_total × documented_causal_driver_share`；保留总量、驱动量和覆盖率。 | 计量表总量；路线驱动量 | 路线特定公用工程量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品 | 将每卷放行织物链接到纤维身份和比例、纱线批次、组织、湿处理配方、整理、质量结果、含水基准和包装状态。 | 批次谱系和放行证书 |
| `dq_route_representativeness` | 技术与混纺 | 保持路线特定记录并报告生产份额、设备覆盖、停机、不合格批次和排除场址。 | 生产台账、设备清单、覆盖率计算 |
| `dq_temporal_coverage` | 前景期间 | 连续生产至少使用 12 个代表性月份；季节性或短期生产覆盖所有代表性生产活动；披露偏差。 | 带日期原始记录和覆盖说明 |
| `dq_meter_recipe_quality` | 公用工程与化学品 | 保留校准、配方修订、配方浓度、加料凭证、分配驱动量和数据缺口处理。 | 校准、发票、批次单、加料和计量记录 |
| `dq_mass_water_closure` | 每条路线 | 报告质量与水平衡闭合并调查重大差异，不得虚构平衡交换。 | 核对工作簿和调查记录 |
| `dq_no_universal_range` | 所有数量 | 不得把仅羊毛、仅合成纤维或跨工厂文献值替代为 CPC 26770 默认值。除非新增经过审查的混纺和路线特定数值来源，否则使用前景记录。 | 来源适用性审查与前景记录 |
| `dq_uuid_resolution` | 未解决清单身份 | 发布前解决精确天工流，或保留有记录的阻断审查项；不得附加语义更宽的候选 UUID。 | hybrid-search 候选记录和确定性直读审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 要求产品 UUID `dad59cf0-4b5e-4f0a-ae44-00f1b0587dfb`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和恰好 1 kg 净输出。 | `un-cpc-3-0-26770` |
| `val_cpc_composition` | 产品分类 | 要求人造短纤维质量占比低于 85%，羊毛或具名细动物毛是主要或唯一混纺组分；拒绝缺失或矛盾组成。 | `un-cpc-3-0-26770` |
| `val_woven_scope` | 产品形态 | 拒绝针织、钩编、非织造、地毯、绒类、特种、服装或纱线产品；缺失织造证据时拒绝织物路线。 | `un-cpc-3-0-26770`; `eu-txt-bref-2023` |
| `val_required_qualifiers` | 数据集元数据 | 第 3 节任何必需限定信息缺失时判定完整性失败。 | `un-cpc-3-0-26770`; `eu-txt-bref-2023` |
| `val_atomic_inventory` | 清单 | 要求实际使用或排放的每种纤维/纱线、浆料物质、染料、助剂、载能体、包装材料、废物和基本流排放均有独立行。 | `eu-txt-bref-2023` |
| `val_route_records` | 前景数量 | 拒绝用 AI 生成数量或通用文献数量替代缺失路线记录；要求实测或有记录计算的前景证据。 | `kir-et-al-2024-textile-resource-use`; `eu-pef-2021-2279` |
| `val_balance_and_allocation` | 质量、水与共用负担 | 要求报告质量/水平衡、内部循环处理和有记录的分配驱动量；无声重复计算或无法解释的不平衡判定失败。 | `eu-txt-bref-2023`; `eu-pef-2021-2279` |
| `val_waste_destination` | 残余物 | 每条外排废物和废水行都必须具有一个具名去向及有代表性的处理数据集。 | `eu-txt-bref-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产数据集 |
| downstream_use | 需要 CPC 26770 制造门数据集的服装、家居、技术纺织品、process 和 lifecyclemodel 研究中的织物输入 |
| allowed_use | 数据集所代表的声明纤维混纺、组织、整理路线、地理、技术、年份、质量规格和边界 |
| excluded_use | 未经明确调整的其他纤维组成、针织/非织造产品、服装、通用纺织品代理、使用阶段或生命末期模型 |
| required_metadata | 第 3 节全部限定信息；场址与期间；过程覆盖；上游数据集引用；处理去向；分配；数据所有者；审查状态 |
| required_quality_disclosure | 原始记录覆盖、实测与计算占比、路线份额、质量/水平衡闭合、计量和配方 QA、未解决 UUID、数据缺口、不确定性和来源局限 |
| update_trigger | 混纺、纱线来源、组织、上浆、染色配方、整理技术、能源/水系统、废水去向、包装、地理、报告年或会实质改变代表性的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-26770` | `official_guidance` | 联合国统计司，*Central Product Classification (CPC) Version 3.0, Explanatory Notes*，代码 26770，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品身份、纳入/排除组成、分类校验 |
| `eu-txt-bref-2023` | `official_guidance` | 欧盟委员会联合研究中心，*Best Available Techniques (BAT) Reference Document for the Textiles Industry*，EUR 31392 EN，JRC131874，2023。https://doi.org/10.2760/355887 | 机织物生产、浆料、涤纶/羊毛和聚酰胺/羊毛染色、整理、公用工程、排放、废水及监测结构 |
| `eu-pef-2021-2279` | `official_guidance` | 欧盟委员会，Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint method，2021。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | 功能单位、清单完整性、数据质量、分配、包装和数据集用途 |
| `kir-et-al-2024-textile-resource-use` | `literature` | Kır, A.; Ozturk, E.; Yetis, U.; Kitis, M. “Resource utilization in the sub-sectors of the textile industry: opportunities for sustainability.” *Environmental Science and Pollution Research* 31 (2024): 25312-25328. https://doi.org/10.1007/s11356-024-32768-2；全文：https://pmc.ncbi.nlm.nih.gov/articles/PMC11024048/ | 证明机织物子行业和工厂间的水、助剂、染料、电力和蒸汽使用存在显著差异；支持路线特定前景采集而非通用默认值 |
