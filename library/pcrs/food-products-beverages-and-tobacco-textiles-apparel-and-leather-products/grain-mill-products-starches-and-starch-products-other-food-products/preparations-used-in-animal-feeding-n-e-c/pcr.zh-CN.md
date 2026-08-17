---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.preparations-used-in-animal-feeding-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另分类的动物饲料制品

## 1. 范围与适用性

本 PCR 适用于未另分类的配合饲料的工业化生产：由两种及以上饲料原料经混合（可添加或不添加饲料添加剂）制成的全价配合饲料和补充饲料，产品形态为粉料、碎粒料、颗粒料、破碎料或膨化料，用于畜禽、水产及其他食用或非宠物动物。配合饲料的产品定义遵循关于饲料投放市场与使用的 (EC) No 767/2009 法规。LCA 建模约定遵循 FAO LEAP 饲料供应链环境绩效指南以及欧盟饲料产品环境足迹类别规则（PEFCR Feed），本 PCR 仅覆盖饲料厂前景边界。

前景系统边界始于饲料原料、饲料添加剂和包装材料进入饲料厂接收口，止于合格饲料在出厂口放行（散装或袋装）。原料生产、进厂运输、能源与水的供应、包装生产以及废弃物处理不隐含在前景之内，只以关联的上游或下游数据集形式进入清单。向养殖场的配送、场内储存和动物饲喂阶段在前景边界之外。

本 PCR 不覆盖未经配合饲料加工直接销售的单一饲料原料、单独的饲料添加剂或预混料、加药饲料、零售猫狗粮（CPC 23311）、苜蓿草粉和草颗粒（CPC 23312）、青贮或粗饲料、养殖场自配料，以及动物使用阶段。多产品饲料厂仅在批次或生产批次记录能够将每种声明配方单独剥离时适用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.preparations-used-in-animal-feeding-n-e-c |
| classification_refs | CPC 3.0: 23319, Preparations used in animal feeding n.e.c. (`exact`) |
| covered_products | 由两种及以上饲料原料（可含饲料添加剂）工业化生产的畜禽、水产及其他非宠物动物用全价和补充配合饲料，形态包括粉料、碎粒料、颗粒料、破碎料和膨化料 |
| excluded_products | 零售猫狗粮；苜蓿草粉和草颗粒；单一饲料原料；单独的饲料添加剂和预混料；加药饲料；青贮和粗饲料；养殖场自配料；动物饲喂使用阶段 |
| representative_product | 面向声明食用动物类别的干粮全价配合饲料（饲喂基） |
| production_route | 原料接收与储存；条件性粉碎；配料与混合；条件性蒸汽调质、制粒或膨化；条件性冷却与筛分；包装与出厂 |
| market_state | 符合声明要求并加贴标签的配合饲料（饲喂基），在饲料厂出厂口以散装或袋装放行 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 测量对象 | 从饲料原料接收到合格饲料出厂的未另分类配合饲料工业化生产 |
| 数量 | 1,000 kg 饲喂基配合饲料 |
| 质量要求 | 饲料符合其声明配方和营养规格、声明水分含量，以及适用的饲料安全与标签法规 |
| 时间或周期 | 以 12 个月生产周期平均的连续饲料厂运行 |
| reference_flow_link | 过程 packaging_dispatch，输出，产品流，行 reference_product_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Assorted Feed `cb2b142b-0ed1-4d6f-9283-cfef94451a75` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 饲料形态（粉料、碎粒料、颗粒料、破碎料、膨化料）；目标动物类别；配方标识；饲喂基水分含量；出厂形态（散装或袋装及袋规格）；生产国家和场址；12 个月生产周期 |

构建前景数据包时，"必需限定信息"所列项目必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中声明。缺少任一必需限定信息，该数据包的参考流定义即为不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流与全部原料投入均以饲喂基质量（kg）记录；体积或计数必须经声明且经校准的质量换算记录转换。 |
| `moisture_declaration` | 参考产品与饲料原料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 必须声明出厂饲料及各主要饲料原料的水分含量；如进行干物质校正，须作为单独的计算值报告，绝不可静默替代饲喂基数量。 |
| `electricity_measure` | 全部电力投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 电力以 kWh 按计量供电记录；研究需要换算为 MJ 时采用 1 kWh = 3.6 MJ，并作为计算值报告。 |
| `natural_gas_measure` | 天然气锅炉燃料 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 天然气以供应计量表所示状态条件的 m3 记录；换算为质量或能量单位须有声明的换算记录。 |
| `bag_count` | 聚丙烯编织袋投入 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | items | 包装按袋计数并同时记录每袋标称灌装质量；散装出厂记为零袋。 |

## 5. 系统边界

前景边界覆盖饲料厂从原料接收到出厂的各工序：饲料原料与添加剂的接收、称重与储存；条件性粉碎；配料与混合；条件性调质、制粒或膨化；条件性冷却与筛分；以及包装或散装装车。纳入的前景流包括原料与添加剂投入、电力、锅炉燃料、工艺与锅炉补给水、厂内物流燃料、包装材料、直接排入大气的粉尘，以及离开厂界的废弃物流出。

| rule_id | 规则 |
| --- | --- |
| `bound_start` | 前景始于饲料厂接收口；每种饲料原料、添加剂和包装物均在越过接收口时按数量和配方关联记录。 |
| `bound_upstream` | 原料种植与加工、进厂运输、能源与水的供应及包装生产仅通过声明标识与版本的关联上游数据集纳入；上游负担不得在前景清单内近似估算。 |
| `bound_recycle` | 返回同一生产线的厂内回料、细粉和开机料/不合格料为闭环内部循环，不计为新投入也不计为废弃物；仅实际离开厂界的物料记为废弃物流出。 |
| `bound_exclusions` | 资本品、厂内维修物料、人员相关流以及出厂口之后的配送运输排除在前景之外；研究若纳入须在披露中列出。 |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明配方的饲料原料、饲料添加剂和包装材料已在饲料厂门口接收并放行投产 |
| starting_condition_role | 首套数据集生产的声明前景起点 |
| product_classification_scope | CPC 3.0 叶子类 23319 未另分类配合饲料；兄弟叶子类 23311 与 23312 不在范围内 |
| recursive_input_rule | 同一产品类别的厂内产出或回料流重新进入同一前景系统时，按内部循环记录，不新增上游负担；外购配合饲料用作原料时，作为产品投入连同其声明的上游数据集记录 |
| upstream_dataset_requirement | 越过接收口的每个产品投入必须配套声明的上游数据集标识；饲料原料数据集应遵循 FAO LEAP 饲料指南或 PEFCR 合规来源（如 GFLI 数据库） |
| disclosure | 数据包披露配方类别、各类别配比、水分基准、出厂形态，以及前景边界的每一项排除 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_reception_storage` | 原料接收、称重与储存 | required |  | 上游处理 | no |
| `size_reduction` | 粉碎（粒度减小） | conditional | 当任一饲料原料在混合前需要粒度减小时适用 | 中间工序 | no |
| `batching_mixing` | 配料与混合 | required |  | 核心转化 | no |
| `conditioning_pelleting` | 蒸汽调质、制粒或膨化 | conditional | 适用于颗粒料、破碎料或膨化料 | 成型 | no |
| `cooling_screening` | 冷却、破碎与筛分 | conditional | 当包含 conditioning_pelleting 时适用 | 整饰 | no |
| `packaging_dispatch` | 包装与出厂 | required |  | 出厂 | yes |

### 过程：原料接收、称重与储存（`ingredient_reception_storage`）

#### 输入

##### 产品流

###### 玉米等谷物原料（`feed_grains`）

谷物是多数配方的能量基础，在接收地磅处越过边界。本行记录代表性谷物类别流；具体数据集替换为声明配方的实际谷物。

- 选定流：Corn `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：Mass / kg
- 数量规则：按配方的地磅或接收秤质量（接收状态）
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_receipts`
- 来源：`fao-leap-2016-feed-supply-chains`

- 数量范围：谷物配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：300
  - 上限：700
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的谷物占比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 豆粕等蛋白粕类原料（`protein_meals`）

蛋白粕提供配方的蛋白组分，按接收批次记录。代表性类别流在具体数据集中替换为配方的实际蛋白粕。

- 选定流：Soybean Meal `69147c54-6d24-41d0-a1bd-fd0f6ae5e7e5`
- 流属性/单位：Mass / kg
- 数量规则：按配方的地磅或接收秤质量（接收状态）
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_receipts`
- 来源：`fao-leap-2016-feed-supply-chains`

- 数量范围：蛋白粕配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：50
  - 上限：350
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的蛋白占比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 麦麸等纤维性谷物加工副产物（`fibre_coproducts`）

谷物加工的纤维性副产物是常见配方组分。代表性类别流替换为配方的实际纤维原料。

- 选定流：Wheat bran `671bf2d3-9ac9-4cc3-b48a-8676cd42b2cc`
- 流属性/单位：Mass / kg
- 数量规则：按配方的地磅或接收秤质量（接收状态）
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_receipts`

- 数量范围：纤维性副产物配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的占比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 添加油脂（`fats_oils`）

油脂用于提高能量密度并作为制粒助剂。代表性流为粗制植物油；具体数据集替换为实际油脂来源。

- 选定流：Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3`
- 流属性/单位：Mass / kg
- 数量规则：按配方计量或称重添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_receipts`

- 数量范围：油脂配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的配比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 石粉等矿物质原料（`mineral_ingredients`）

矿物质原料提供钙及其他常量矿物元素。代表性流替换为配方的实际矿物来源。

- 选定流：limestone powder `a3317ee0-aae8-4d22-b720-fe24bc73d3c4`
- 流属性/单位：Mass / kg
- 数量规则：按配方称重添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_receipts`

- 数量范围：矿物质原料配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：30
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的占比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲料盐（`feed_salt`）

食盐作为矿物载体和适口性组分加入配方。

- 选定流：Mineral salt, animal feed supplement `158e4fa8-8175-4436-8cb4-c2e2fc45c33d`
- 流属性/单位：Mass / kg
- 数量规则：按配方称重添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_receipts`

- 数量范围：饲料盐配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的占比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 维生素矿物质预混料（`premix_input`）

预混料将维生素、微量元素及其他微量组分带入配方，按批次计量添加。

- 选定流：Vitamin and mineral premix, for feed `d5514f47-d1d0-470f-a04e-89e521c62841`
- 流属性/单位：Mass / kg
- 数量规则：依据配料记录的每批称重添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_micro_ingredient_dosing`
- 来源：`ec-pefcr-feed-food-producing-animals`

- 数量范围：预混料配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：50
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的占比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### L-赖氨酸等合成氨基酸（`amino_acids`）

合成氨基酸用于平衡蛋白组分，按批次计量添加。代表性流替换为配方的实际氨基酸。

- 选定流：L-Lysine `c919f32a-3feb-4129-88d0-244862f8efca`
- 流属性/单位：Mass / kg
- 数量规则：依据配料记录的每批称重添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_micro_ingredient_dosing`

- 数量范围：氨基酸配比 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；随配方变化的占比，配方记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收与厂内输送电力（`electricity_handling`）

电力驱动卸料机、输送机、提升机和筒仓辅助设备；在厂级计量，再按分表或运行记录分摊至各工序。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：分摊至接收与输送负荷的计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`

- 数量范围：接收与输送电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：6
  - 单位：kWh
  - 基准：每 1,000 kg 配合饲料产出；分表记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 厂内物流柴油（`diesel_internal_logistics`）

柴油驱动厂界内转运原料和包装的装载机与叉车。

- 选定流：Diesel `9fc9d30c-0229-459c-a7f5-8f55d6533225`
- 流属性/单位：Mass / kg
- 数量规则：分摊至厂内物流的领油或油罐记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_logs`

- 数量范围：厂内物流柴油 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：1.0
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；燃料记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 原料包装废弃物（`ingredient_packaging_waste`）

接收原料的袋、内衬和缠绕膜作为包装废弃物离开边界，进入声明的下游处理。

- 选定流：Plastic Waste `3fd9ff2b-455a-4ed6-a52d-e2cb5a1484f3`
- 流属性/单位：Mass / kg
- 数量规则：生产周期内称重或计数的包装废弃物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

- 数量范围：原料包装废弃物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；在场址记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 筛下物与剔除料（`screenings_rejects`）

接收环节去除的筛下物、杂质和不可回用剔除料作为有机废弃物离开边界。

- 选定流：Food Debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 流属性/单位：Mass / kg
- 数量规则：生产周期内称重的废弃物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

- 数量范围：筛下物与剔除料 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；在场址记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 接收与转运粉尘（`reception_dust`）

当除尘系统未将粉尘回收至工艺时，粉尘在卸料坑、输送机和筒仓排气口逸散至大气。

- 选定流：Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- 流属性/单位：Mass / kg
- 数量规则：来自除尘记录的测量值或声明估计值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_records`

- 数量范围：接收粉尘 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；粉尘测量补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：粉碎（粒度减小）（`size_reduction`）

#### 输入

##### 产品流

###### 粉碎电力（`electricity_grinding`）

粉碎是饲料厂主要电力负荷之一，按分表计量或运行记录分摊。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：每吨粉碎物料的计量或分摊粉碎电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`

- 数量范围：粉碎电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：6
  - 上限：10
  - 单位：kWh
  - 基准：每 1,000 kg 粉碎物料；谷物粉碎负荷的比粉碎能耗报告值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`yemmak-feed-mill-energy-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 粉碎粉尘（`grinding_dust`）

逸出粉碎与风网系统的粉尘排入大气。

- 选定流：Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- 流属性/单位：Mass / kg
- 数量规则：来自除尘记录的测量值或声明估计值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_records`

- 数量范围：粉碎粉尘 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；粉尘测量补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：配料与混合（`batching_mixing`）

#### 输入

##### 产品流

###### 配料与混合电力（`electricity_mixing`）

配料秤、加料绞龙和混合机的耗电按计量或运行记录分摊。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或分摊的配料与混合电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`

- 数量范围：配料与混合电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：6
  - 单位：kWh
  - 基准：每 1,000 kg 配合饲料产出；分表记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 混合与加料粉尘（`mixing_dust`）

微量组分加料口与混合机排气口的粉尘逸散至大气。

- 选定流：Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- 流属性/单位：Mass / kg
- 数量规则：来自除尘记录的测量值或声明估计值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_records`

- 数量范围：混合与加料粉尘 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；粉尘测量补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：蒸汽调质、制粒或膨化（`conditioning_pelleting`）

#### 输入

##### 产品流

###### 蒸汽锅炉天然气（`natural_gas_boiler`）

锅炉燃料产生调质蒸汽；燃烧负担归属关联的上游天然气数据集，不计入前景。

- 选定流：natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：每吨调质饲料的计量锅炉燃料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 调质饲料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_logs`

- 数量范围：锅炉燃料暂定校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.5
  - 上限：4.0
  - 单位：m3
  - 基准：每 1,000 kg 调质饲料；由约 26 kWh/t 蒸汽调质负荷推得，锅炉记录补齐前为暂定值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制粒或膨化电力（`electricity_pelleting`）

制粒机或膨化机驱动是制粒线最大的单一电力负荷。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：每吨制粒饲料的计量或分摊压机能耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 制粒或膨化饲料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`

- 数量范围：制粒电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：4
  - 上限：40
  - 单位：kWh
  - 基准：每 1,000 kg 制粒饲料；随配方变化的比压机能耗
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`yemmak-feed-mill-energy-2021`

###### 锅炉补给水（`boiler_water`）

补给水供蒸汽锅炉使用；设有冷凝水回收时须声明。

- 选定流：Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：Mass / kg
- 数量规则：计量的锅炉补给水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调质饲料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meters`

- 数量范围：锅炉补给水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：10
  - 上限：60
  - 单位：kg
  - 基准：每 1,000 kg 调质饲料；由调质蒸汽需求推得，计量记录补齐前为暂定筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：冷却、破碎与筛分（`cooling_screening`）

#### 输入

##### 产品流

###### 冷却与筛分电力（`electricity_cooling`）

冷却风机、破碎机和筛分设备的耗电；细粉作为内部循环返回生产线。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或分摊的冷却与筛分电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却饲料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`

- 数量范围：冷却与筛分电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：8
  - 单位：kWh
  - 基准：每 1,000 kg 冷却饲料；分表记录补齐前为暂定筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 冷却与筛分粉尘（`cooling_dust`）

逸出冷却器旋风分离器和筛分排气口的细粉排入大气。

- 选定流：Particulate matter `0418b561-ecf8-33c8-9c81-225789f15bd3`
- 流属性/单位：Mass / kg
- 数量规则：来自除尘记录的测量值或声明估计值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷却饲料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_records`

- 数量范围：冷却与筛分粉尘 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg
  - 基准：每 1,000 kg 冷却饲料；粉尘测量补齐前为暂定筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与出厂（`packaging_dispatch`）

#### 输入

##### 产品流

###### 聚丙烯编织袋（`pp_woven_bags`）

袋装饲料用聚丙烯编织袋包装，按袋计数并记录每袋标称灌装质量；散装出厂记为零袋。

- 选定流：Woven polypropylene bag `9bfaad07-355e-467a-9bab-f95094e7c869`
- 流属性/单位：Number of items / items
- 数量规则：袋计数及声明的每袋标称灌装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 袋装饲料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

- 数量范围：袋用量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：20
  - 上限：50
  - 单位：items
  - 基准：每 1,000 kg 袋装饲料，对应每袋标称灌装质量 50 kg 至 20 kg
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装与装车电力（`electricity_packaging`）

包装线、码垛机和散装装车的耗电按计量或分摊记录。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Net calorific value / kWh
- 数量规则：计量或分摊的包装与装车电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meters`

- 数量范围：包装与装车电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kWh
  - 基准：每 1,000 kg 配合饲料产出；分表记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 出厂口放行的配合饲料（`reference_product_output`）

合格配合饲料在此离开前景边界；本行即本 PCR 的参考流。

- 选定流：Assorted Feed `cb2b142b-0ed1-4d6f-9283-cfef94451a75`
- 流属性/单位：Mass / kg
- 数量规则：参考数量 1,000 kg 饲喂基，来自出厂地磅或包装记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：本 PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output`

- 数量范围：参考产出质量闭合校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：980
  - 上限：1020
  - 单位：kg
  - 基准：每 1,000 kg 参考数量的出厂质量当量，与 calc_mass_closure 闭合区间一致
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 包装线剔除物（`packaging_rejects`）

包装线剔除的破损袋与包装材料作为包装废弃物离开边界。

- 选定流：Plastic Waste `3fd9ff2b-455a-4ed6-a52d-e2cb5a1484f3`
- 流属性/单位：Mass / kg
- 数量规则：生产周期内称重或计数的剔除物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 配合饲料产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`

- 数量范围：包装剔除物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1,000 kg 配合饲料产出；在场址记录补齐前为暂定筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共生产品处理

饲料厂前景为按批次单产品运行；厂界内的共生仅限于内部循环与废弃物流。原料端的共生负担分配（如豆粕与豆油）在关联的上游数据集内解决，前景不再重新分配。

| rule_id | 规则 |
| --- | --- |
| `alloc_line_split` | 同一周期内生产多种配方时，共用的电力、燃料、水和公用工程流按各配方产量质量比例分摊，具备生产批次或分表记录时优先采用。 |
| `alloc_rework` | 返回同一生产线的细粉、回料和不合格料不携带额外上游负担；仅净流出边界的物料进入清单。 |
| `alloc_waste_cutoff` | 废弃物流出仅承担至厂界为止的前景负担；处理或资源化利用的负担与收益归属声明的下游数据集。 |
| `alloc_upstream_coproducts` | 饲料原料（包括油料粕类和谷物加工组分）的共生分配遵循上游数据集，并应与 FAO LEAP 饲料指南和 PEFCR 饲料规则一致；前景数据集必须声明其原料数据集采用的分配方式。 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_receipts` | ingredient_reception_storage | 饲料原料投入 | 地磅与收货记录 | 原料类别、供应商、接收质量、接收水分、关联配方 | 经校准地磅与收货系统 | kg | 按批次 | 12 个月 | 饲料厂场址 | 按配方分原料类别求和，归一化至每 1,000 kg 产出 | 地磅校准证书、供应商送货单 |
| `cp_micro_ingredient_dosing` | batching_mixing | 微量组分与添加剂投入 | 批次配料记录 | 每批预混料、氨基酸、食盐、矿物质剂量及批次数 | 配料控制系统或人工配料台账 | kg | 按批次 | 12 个月 | 饲料厂场址 | 按配方求和，归一化至每 1,000 kg 产出 | 批次报告、配料秤校准 |
| `cp_electricity_meters` | all processes | 电力投入 | 公用电网计量与分表记录 | 各表各期 kWh、负荷分摊规则 | 电力公司账单加分表或运行工时分摊 | kWh | 按月 | 12 个月 | 饲料厂场址 | 全厂总量按过程图负荷分摊 | 电表证书、电费账单 |
| `cp_fuel_logs` | conditioning_pelleting, ingredient_reception_storage | 锅炉燃料与厂内柴油 | 燃料计量与领用记录 | 各期天然气体积、各车辆或负荷柴油领用量 | 燃气公司计量表、领油台账 | m3；kg | 按月 | 12 个月 | 饲料厂场址 | 按负荷归一化至过程输出基准 | 计量表证书、燃料发票 |
| `cp_water_meters` | conditioning_pelleting | 锅炉补给水 | 水表记录 | 各期补给水量 | 场址或线水表 | kg | 按月 | 12 个月 | 饲料厂场址 | 每 1,000 kg 调质饲料 | 水表记录、水费账单 |
| `cp_packaging_records` | packaging_dispatch | 包装投入 | 包装库存与领用记录 | 袋型、用袋量、标称灌装质量 | 库房领用记录与包装线计数 | items | 按月 | 12 个月 | 饲料厂场址 | 每 1,000 kg 袋装产出的件数 | 供应商规格、库存核对 |
| `cp_production_output` | packaging_dispatch | 参考产品产出 | 出厂与包装记录 | 配方、出厂质量、形态、袋数或散装量 | 出厂地磅与包装记录 | kg | 按批或按日 | 12 个月 | 饲料厂场址 | 按配方分周期求和 | 经校准秤记录、销售发货单 |
| `cp_waste_records` | ingredient_reception_storage, packaging_dispatch | 废弃物流出 | 废弃物转移记录 | 废弃物流、质量、去向承包商 | 转移联单或场址称重 | kg | 按清运批次 | 12 个月 | 饲料厂场址 | 分废弃物流归一化至每 1,000 kg 产出 | 承包商回执、转移联单 |
| `cp_dust_records` | size_reduction, batching_mixing, conditioning_pelleting, cooling_screening, ingredient_reception_storage | 粉尘大气排放 | 排口或无组织粉尘记录 | 测量浓度或声明估计值、除尘设备类型 | 定期测量或声明的工程估算 | kg | 按年 | 12 个月 | 饲料厂场址 | 分排放点归一化至过程输出基准 | 测量报告或声明估算说明 |
| `cp_moisture_tests` | ingredient_reception_storage, packaging_dispatch | 水分限定信息 | 实验室水分检测 | 各原料批次与产品批次水分百分数 | 烘箱法或快速水分仪（厂内方法） | % | 按批次 | 12 个月 | 饲料厂场址 | 按配方的批次平均值 | 实验室记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_output_mass` | 参考产品 | 配方出厂质量 = 12 个月内该配方出厂地磅记录之和 | cp_production_output | 各配方 kg 产出 |  |
| `calc_ingredient_intensity` | 饲料原料投入 | 原料强度 = 年度各类原料批次质量 ÷ 年度配方产出 | cp_ingredient_receipts, calc_output_mass | 每 1,000 kg 产出的原料 kg |  |
| `calc_mass_closure` | 前景平衡 | 质量闭合 =（原料、添加剂与包装投入之和）−（出厂产品 + 废弃物流出 + 声明粉尘），以占投入质量百分数报告 | cp_ingredient_receipts, cp_micro_ingredient_dosing, cp_production_output, cp_waste_records, cp_dust_records | 闭合百分数 |  |
| `calc_specific_electricity` | 电力投入 | 过程电力强度 = 该过程分摊 kWh ÷ 周期过程产出 | cp_electricity_meters | 每 1,000 kg 过程产出的 kWh | `lpelc-feed-processing-energy` |
| `calc_specific_gas` | 天然气投入 | 锅炉燃气强度 = 计量燃气体积 ÷ 周期调质饲料质量 | cp_fuel_logs | 每 1,000 kg 调质饲料的 m3 |  |
| `calc_dry_matter` | 参考产品与饲料原料 | 干物质 = 饲喂基质量 ×（1 − 水分分数）；与饲喂基数量并列报告，不得替代 | cp_moisture_tests | kg 干物质 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 整个数据集 | 每种生产配方均须声明配方类别、各类别配比、目标动物类别和饲料形态 | 与生产批次关联的配方台账 |
| `dq_measurement` | 计量器具 | 地磅、配料秤和公用计量表须经校准；采集期间的校准状态须有记录 | 校准证书或维护台账 |
| `dq_temporal` | 全部前景记录 | 记录覆盖连续 12 个月，且在数据集发布时不超过五年 | 各协议的带日期记录 |
| `dq_completeness` | 清单 | 全部配方投入均须记录；按 `calc_mass_closure` 的质量闭合保持在投入质量的 98%–102% | 分批次闭合计算 |
| `dq_disclosure` | 数据包 | 必需限定信息、排除项、上游数据集标识和分配声明完整 | 数据包披露章节 |

## 9. 验证规则

| rule_id | 规则 |
| --- | --- |
| `val_mass_balance` | 按 `calc_mass_closure` 的质量闭合超出投入质量 98%–102% 且无书面解释时，前景数据包不予通过。 |
| `val_energy_guardrail` | 粉碎与制粒电力超出 QA 校验范围，或全厂综合能耗超出每 1,000 kg 饲料 40–60 kWh 时，必须以计量证据说明，否则更正后方可接受。 |
| `val_identity_refs` | 标注 Tiangong UUID 的每个清单行必须在数据包中携带该 UUID；原料流被替换的行必须声明替换流标识。 |
| `val_qualifiers` | 缺少第 3 节任一必需限定信息的数据包不完整，验证不通过。 |
| `val_conditional_processes` | 清单中省略条件性过程时须由声明的饲料形态证明合理；颗粒料、破碎料或膨化料不得省略 conditioning_pelleting 与 cooling_screening。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工业化配合饲料生产的前景生产数据集 |
| downstream_use | secondary_dataset；background_dataset |
| allowed_use | 作为前景饲料厂数据集关联进饲料、畜牧、水产和食品 LCA 模型；可用作配合饲料供应的背景数据集 |
| excluded_use | 不适用于宠物食品、苜蓿草粉、单一饲料原料、加药饲料或养殖场饲喂环节；必需限定信息缺失或验证规则不通过时无效 |
| required_metadata | 第 3 节必需限定信息、上游数据集标识、分配声明、时间覆盖、场址与国家 |
| required_quality_disclosure | 质量闭合结果、第 9 节校验范围检查、计量与校准证据摘要、实际采用的暂定范围 |
| update_trigger | 配方超出声明类别、生产线变更、能源载体切换，或记录超过五年 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-leap-2016-feed-supply-chains` | official_guidance | FAO LEAP Partnership (2016), Environmental performance of animal feeds supply chains: Guidelines for assessment, http://www.fao.org/partnerships/leap/publications/en/ (retrieved 2026-07-25) | 方法规则；过程分解；边界决策；上游数据集要求 |
| `ec-pefcr-feed-food-producing-animals` | standard | European Commission (2018, updated 2025), Product Environmental Footprint Category Rules (PEFCR) for feed for food-producing animals, https://www.fefac.eu/priorities/sustainability/pefcr-feed/ (retrieved 2026-07-25) | 方法规则；数据采集规则；分配决策 |
| `eu-reg-767-2009-feed-marketing` | standard | Regulation (EC) No 767/2009 on the placing on the market and use of feed, https://eur-lex.europa.eu/eli/reg/2009/767/oj (retrieved 2026-07-25) | 官方产品规格；类别边界 |
| `gfli-database` | dataset | Global Feed LCA Institute (GFLI) database, https://globalfeedlca.org/ (retrieved 2026-07-25) | 上游原料数据集要求；质量要求 |
| `lpelc-feed-processing-energy` | extension_guidance | Livestock and Poultry Environmental Learning Community, Feed processing energy use summary citing Redecker and Thoben (2012): 40-60 kWh per tonne of feed, https://lpelc.org/wp-content/uploads/2026/02/Navales_Feed-processing.pdf (retrieved 2026-07-25) | 全厂综合能耗验证的范围证据 |
| `yemmak-feed-mill-energy-2021` | literature | Feed and Additive magazine (2021), Energy saving in compound feed mills: grinding 6-10 kWh/t, pelleting 4-40 kWh/t, https://www.feedandadditive.com/energy-saving-in-compound-feed-mills/ (retrieved 2026-07-25) | 粉碎与制粒电力校验范围的范围证据 |
