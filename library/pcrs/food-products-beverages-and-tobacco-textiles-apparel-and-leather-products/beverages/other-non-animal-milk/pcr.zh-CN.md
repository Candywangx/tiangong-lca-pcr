---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-animal-milk
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他非动物源乳

## 1. 范围与适用性

本 PCR 适用于由蔬菜、谷物、水果、块茎、豆类、坚果、种子或假谷物制成并属于“其他非动物源乳”剩余语义类别的成品液态植物饮料。参考产品为制造设施放行的乳状饮料时，普通、调味、加糖、强化、发酵、常温耐贮和冷藏产品均可纳入。

本 PCR 排除已有单独命名类别的椰奶、杏仁乳、豆奶、米浆和燕麦奶；动物乳及含乳混合饮料；粉状或固体冲调物；婴幼儿配方食品；勺食发酵产品；以及仅把该饮料作为配料的食品。农业生产以及外购配料、包装、电力、燃料和废物处理服务应链接上游或下游数据集，不得虚构为前景记录。

路线必须识别实际植物物种和原料形态。燕麦、杏仁、大豆、稻米、椰子或芝麻-豌豆蛋白配方等单一窄类饮料流，不得作为该完整剩余类别的参考产品。经核验来源未对同一宽泛范围提供至少两份独立且边界兼容的原始数据，因此不规定跨类别经验数量范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-animal-milk |
| classification_refs | CPC 3.0: 24429 Other non-animal milk |
| covered_products | 由其他蔬菜、谷物、水果、块茎、豆类、坚果、种子或假谷物制成且未由单独命名类别表示的液态乳状植物饮料成品 |
| excluded_products | 椰奶；杏仁乳；豆奶；米浆；燕麦奶；动物乳；含乳混合物；粉末和固体混合物；婴幼儿配方食品；勺食发酵食品；把该饮料作为配料的下游食品 |
| representative_product | 制造设施门口放行的一份包装合格其他非动物源乳状饮料 |
| production_route | 植物基料接收与预处理；条件性浸泡；条件性研磨与水提取；条件性过滤；配料；条件性酶处理；条件性发酵；采用时均质；经验证的热处理；灌装与包装；条件性冷藏；清洗与公用工程供应 |
| market_state | 供所声明常温或冷藏配送的包装液态饮料成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为饮料、乳替代品或食品配料使用的其他非动物源乳状液态饮料成品 |
| How much | 制造设施门口 1 kg 包装合格饮料 |
| How well | 符合所声明的植物物种、配方、固形物、强化、发酵、感官、微生物放行、热处理、包装和贮存规格 |
| How long or cycle | 工厂放行时；保质期和贮存制度作为限定信息声明，不换算为服务时长 |
| reference_flow_link | 以 1 kg 合格包装其他非动物源乳状饮料作为所有纳入前景交换的归一化参考 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他非动物源乳状饮料（包装，工厂门）（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物物种和科；原料形态；配方和植物基料占比；干物质或固形物基准；油、甜味剂、盐、稳定剂、酶和强化状态；提取与过滤路线；采用发酵时的微生物和路线；均质；热处理制度和放行准则；包装形式和净装量；常温或冷藏；地理；生产期 |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任一必需限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和归一化结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用合格包装饮料净质量，不含二级和三级包装。以所代表配方和温度下实测产品密度将体积换算为质量。 |
| `ingredient_basis` | 植物基料、油、糖、盐、稳定剂、酶、维生素和矿物质 | Mass | kg | 记录接收或领用质量；当解释会改变时，声明按到货态、干物质、活性物质或配制产品计量。 |
| `water_separation` | 产品接触水、浸泡水、清洗水、冷却水和锅炉水 | 质量或体积 | kg 或 m3 | 每种用水分别计量或分配；体积换算质量时披露密度，且不得把产品用水与清洗水合并。 |
| `energy_separation` | 电力、蒸汽、外购热、天然气、液化石油气、燃料油和柴油 | 能量及载体特定数量 | kWh、MJ、kg、L 或 m3 | 每种载体保持为独立交换；蒸汽和外购热与场内燃烧燃料分别记录。 |
| `packaging_basis` | 瓶、纸盒、盖、标签、瓦楞纸箱和薄膜 | 质量和件数 | kg 和件 | 各部件按领用质量或经核验的单件质量乘件数计算；不得把包装总质量作为一个合并流报告。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已声明的植物基料、水、配方配料、菌种、酶、包装部件、公用工程、燃料、制冷剂和清洗化学品进入饮料制造设施 |
| starting_condition_role | 前景采集从设施控制的接收与加工开始；上游种植、提取、配料制造、包装生产和能源供应使用链接数据集 |
| product_classification_scope | “其他非动物源乳”剩余类别内的植物饮料成品；排除单独命名的椰奶、杏仁乳、豆奶、米浆和燕麦奶 |
| recursive_input_rule | 若另一种非动物源乳或同类别中间体进入设施，将其连同上游数据集和加工阶段作为产品投入记录一次，不递归重建其生产 |
| upstream_dataset_requirement | 为每项已声明植物基料、配料、菌种、酶、包装部件、供水、电力、热、燃料、制冷剂和外部处理废物链接有代表性的数据集 |
| disclosure | 声明植物身份和来源、配方、加工路线、设施和期间、共产品与废物状态、分配方法、包装、贮存、数据缺口、排除阶段及所有上游替代 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_category_scope` | 产品身份 | 仅纳入剩余类别的乳状植物饮料，并排除单独命名的椰奶、杏仁乳、豆奶、米浆和燕麦奶。 | `un-cpc-30-2025` |
| `sb_foreground_operations` | 设施前景边界 | 纳入从接收到放行期间发生的每项设施控制操作，包括条件性的浸泡、研磨、提取、过滤、酶处理、发酵、均质、热处理、灌装、冷藏、清洗、公用工程供应和场内废水处理。 | `aydar-plant-milk-2020`; `tangyu-fermentation-2019`; `eu-jrc-fdm-bref-2019` |
| `sb_resource_inventory` | 资源与排放完整性 | 保持水、能源、原料、废水、废气、残渣和包装废物的过程级清单；分别识别直接排放和处理路线。 | `eu-jrc-fdm-bref-2019` |
| `sb_food_safety` | 卫生与保藏 | 纳入经验证的卫生控制和实际保藏路线；记录与产品放行有关的监测、纠正措施、验证和文件。 | `fao-who-food-hygiene-2023` |
| `sb_upstream_downstream` | 完整研究模型 | 为外购投入链接上游数据集；仅在研究要求时加入配送、使用或生命末期，并披露任何排除的生命周期阶段。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare_base` | 植物基料接收与预处理 | required | 始终纳入接收；仅在实际实施时纳入分选、清洗、脱皮、烘焙、焯烫、发芽或干磨 | 前景原料预处理 | 各已声明植物基料接收量 kg |
| `soak_base` | 浸泡 | conditional | 已声明植物材料在提取前水合或浸泡时纳入 | 前景水合 | 转出的浸泡植物基料 kg |
| `grind_extract` | 研磨与水提取 | conditional | 全料湿法提取时纳入；直接复原外购浓缩物或分离物时排除并披露 | 前景粒径减小与提取 | 提取物或浆料产出 kg |
| `filter_separate` | 过滤与固液分离 | conditional | 去除不溶性固体或多余油脂/淀粉时纳入 | 前景分离 | 过滤植物提取物 kg |
| `formulate` | 配料 | required | 始终纳入实际投加的水和每项配料 | 前景配方制备 | 配制饮料基料 kg |
| `enzyme_treat` | 酶处理 | conditional | 仅在已声明路线使用时纳入各酶 | 前景转化或稳定处理 | 酶处理饮料基料 kg |
| `ferment` | 发酵 | conditional | 仅在声明受控发酵时纳入；识别每种接种物、微生物、时间、温度、pH 终点及发酵后控制 | 前景生物处理 | 发酵饮料基料 kg |
| `homogenise` | 均质 | conditional | 采用机械均质或高压处理时纳入 | 前景物理稳定 | 均质饮料 kg |
| `heat_treat` | 热处理与冷却 | required | 纳入经验证的巴氏杀菌、UHT、灭菌或其他已声明热处理制度及相关冷却 | 前景保藏 | 放行至灌装的处理饮料 kg |
| `fill_package` | 灌装与包装 | required | 纳入实际初级、二级和三级包装部件及废品流 | 前景最终制造 | 放行的合格包装饮料 kg |
| `cold_store` | 冷藏 | conditional | 产品或中间体贮存需要主动制冷时纳入 | 前景贮存 | 冷藏质量-时间 kg-day |
| `cleaning_utilities` | 清洗与公用工程供应 | required | 纳入产品接触面清洗及服务于代表性生产期的已分配共享公用工程 | 前景卫生与公用工程 | 服务于参考产品的生产期 |
| `treat_wastewater` | 场内废水处理 | conditional | 废水或污泥在场内处理时纳入；否则链接外部处理 | 前景废物处理 | 处理废水 kg |

### 过程：植物基料接收与预处理（`receive_prepare_base`）

#### 输入

##### 产品流

###### 豌豆种子（`pea_seed_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：豌豆种子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 鹰嘴豆种子（`chickpea_seed_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：鹰嘴豆种子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 羽扇豆种子（`lupin_seed_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：羽扇豆种子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 小米籽粒（`millet_grain_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：小米籽粒（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 斯佩耳特小麦籽粒（`spelt_grain_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：斯佩耳特小麦籽粒（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 藜麦籽粒（`quinoa_grain_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：藜麦籽粒（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 腰果（`cashew_nut_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：腰果（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 榛子（`hazelnut_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：榛子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 核桃（`walnut_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：核桃（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 花生（`peanut_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：花生（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 芝麻籽（`sesame_seed_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：芝麻籽（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 大麻籽（`hemp_seed_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：大麻籽（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 油莎豆块茎（`tiger_nut_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：油莎豆块茎（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 马铃薯块茎（`potato_tuber_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：马铃薯块茎（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 接收环节剔除的豌豆种子（`rejected_pea_seed_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的豌豆种子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除豌豆种子质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的鹰嘴豆种子（`rejected_chickpea_seed_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的鹰嘴豆种子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除鹰嘴豆种子质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的羽扇豆种子（`rejected_lupin_seed_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的羽扇豆种子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除羽扇豆种子质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的粟米（`rejected_millet_grain_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的粟米（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除粟米质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的斯佩耳特小麦（`rejected_spelt_grain_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的斯佩耳特小麦（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除斯佩耳特小麦质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的藜麦籽粒（`rejected_quinoa_grain_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的藜麦籽粒（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除藜麦籽粒质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的腰果（`rejected_cashew_nut_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的腰果（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除腰果质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的榛子（`rejected_hazelnut_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的榛子（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除榛子质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的核桃（`rejected_walnut_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的核桃（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除核桃质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的花生（`rejected_peanut_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的花生（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除花生质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的芝麻籽（`rejected_sesame_seed_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的芝麻籽（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除芝麻籽质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的火麻仁（`rejected_hemp_seed_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的火麻仁（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除火麻仁质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的油莎豆块茎（`rejected_tiger_nut_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的油莎豆块茎（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除油莎豆块茎质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 接收环节剔除的马铃薯块茎（`rejected_potato_tuber_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：接收环节剔除的马铃薯块茎（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测离开接收环节的剔除马铃薯块茎质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

### 过程：浸泡（`soak_base`）

#### 输入

##### 产品流

###### 浸泡用饮用级过程水（`soaking_water_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：浸泡用饮用级过程水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_water_utilities`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废植物基料浸泡液（`spent_soaking_liquor_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废植物基料浸泡液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

### 过程：研磨与水提取（`grind_extract`）

#### 输入

##### 产品流

###### 提取用饮用级过程水（`extraction_water_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：提取用饮用级过程水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_water_utilities`

###### 湿磨用电力（`grinding_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：湿磨用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 研磨过程损失的植物浆料（`grinding_loss_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：研磨过程损失的植物浆料（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

### 过程：过滤与固液分离（`filter_separate`）

#### 输入

##### 产品流

###### 过滤用电力（`filtration_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：过滤用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 湿态过滤植物固形物（`filtered_plant_solids_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：湿态过滤植物固形物（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 过滤废水（`filtration_wastewater_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：过滤废水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

### 过程：配料（`formulate`）

#### 输入

##### 产品流

###### 配料用饮用级过程水（`formulation_water_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：配料用饮用级过程水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级菜籽油（`rapeseed_oil_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级菜籽油（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级葵花籽油（`sunflower_oil_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级葵花籽油（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级蔗糖（`sucrose_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级蔗糖（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级葡萄糖浆（`glucose_syrup_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级葡萄糖浆（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级氯化钠（`sodium_chloride_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级氯化钠（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级结冷胶（`gellan_gum_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级结冷胶（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级黄原胶（`xanthan_gum_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级黄原胶（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级葵花籽卵磷脂（`sunflower_lecithin_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级葵花籽卵磷脂（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级碳酸钙（`calcium_carbonate_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级碳酸钙（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级磷酸三钙（`tricalcium_phosphate_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级磷酸三钙（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级核黄素（维生素 B2）（`riboflavin_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级核黄素（维生素 B2）（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级氰钴胺（维生素 B12）（`cyanocobalamin_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级氰钴胺（维生素 B12）（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 食品级麦角钙化醇（维生素 D2）（`ergocalciferol_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级麦角钙化醇（维生素 D2）（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_materials_recipe`

###### 配料混合用电力（`formulation_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：配料混合用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不合格配制植物饮料（`offspec_formulation_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：不合格配制植物饮料（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

### 过程：酶处理（`enzyme_treat`）

#### 输入

##### 产品流

###### 食品级 α-淀粉酶制剂（`alpha_amylase_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级 α-淀粉酶制剂（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_enzyme_fermentation`

###### 食品级 β-葡聚糖酶制剂（`beta_glucanase_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级 β-葡聚糖酶制剂（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_enzyme_fermentation`

###### 食品级蛋白酶制剂（`protease_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级蛋白酶制剂（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_enzyme_fermentation`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：发酵（`ferment`）

#### 输入

##### 产品流

###### 已声明的单物种单菌株细菌发酵剂（`single_bacterial_starter_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级细菌发酵剂，单一已声明物种和菌株（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_enzyme_fermentation`
- 来源： `tangyu-fermentation-2019`

###### 已声明的单物种单菌株酵母发酵剂（`single_yeast_starter_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级酵母发酵剂，单一已声明物种和菌株（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_enzyme_fermentation`
- 来源： `tangyu-fermentation-2019`

###### 发酵控制用电力（`fermentation_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：发酵控制用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不合格发酵植物饮料（`fermentation_reject_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：不合格发酵植物饮料（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

###### 二氧化碳，生物源，排放至空气（`fermentation_co2_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：二氧化碳，生物源，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_enzyme_fermentation`

### 过程：均质（`homogenise`）

#### 输入

##### 产品流

###### 均质用电力（`homogenisation_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：均质用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：热处理与冷却（`heat_treat`）

#### 输入

##### 产品流

###### 热处理用电力（`heat_treatment_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：热处理用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

###### 热处理用过程蒸汽（`process_steam_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：热处理用过程蒸汽（Tiangong UUID 未解决）
- 流属性/单位： 能量 / MJ
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_water_utilities`

###### 热处理用外购热能（`purchased_heat_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：热处理用外购热能（Tiangong UUID 未解决）
- 流属性/单位： 能量 / MJ
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_water_utilities`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不合格热处理植物饮料（`heat_treatment_reject_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：不合格热处理植物饮料（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

### 过程：灌装与包装（`fill_package`）

#### 输入

##### 产品流

###### 食品级玻璃瓶（`glass_bottle_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级玻璃瓶（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### 食品级 PET 瓶（`pet_bottle_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级 PET 瓶（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### 无菌复合饮料纸盒（`aseptic_carton_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：无菌复合饮料纸盒（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### 食品级 HDPE 瓶盖（`hdpe_closure_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级 HDPE 瓶盖（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### 食品级铝盖（`aluminium_closure_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：食品级铝盖（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### 印刷纸标签（`paper_label_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：印刷纸标签（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### 印刷聚丙烯标签（`polypropylene_label_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：印刷聚丙烯标签（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### 瓦楞纸箱（`corrugated_box_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：瓦楞纸箱（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_packaging`

###### LDPE 收缩膜（`ldpe_film_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：LDPE 收缩膜（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 灌装和包装用电力（`filling_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：灌装和包装用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他非动物源乳状饮料（包装，工厂门）（`reference_product_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：其他非动物源乳状饮料（包装，工厂门）（Tiangong UUID 未解决）
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定为 1 kg 合格参考产品
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 方法公式 (`method_formula`)
- 来源： `mass-balance-identity`

##### 废物流

###### 废食品级玻璃瓶（`waste_glass_bottle_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废食品级玻璃瓶（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废食品级 PET 瓶（`waste_pet_bottle_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废食品级 PET 瓶（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废复合饮料纸盒（`waste_aseptic_carton_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废复合饮料纸盒（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废 HDPE 瓶盖（`waste_closure_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废 HDPE 瓶盖（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废食品级铝盖（`waste_aluminium_closure_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废食品级铝盖（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测报废铝盖质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废印刷纸标签（`waste_label_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废印刷纸标签（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废印刷聚丙烯标签（`waste_polypropylene_label_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废印刷聚丙烯标签（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测报废聚丙烯标签质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废瓦楞纸箱（`waste_corrugated_box_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废瓦楞纸箱（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 废 LDPE 收缩膜（`waste_ldpe_film_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废 LDPE 收缩膜（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_packaging`

###### 灌装损失的其他非动物源乳状饮料（`filling_product_loss_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：灌装损失的其他非动物源乳状饮料（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

##### 基本流

### 过程：冷藏（`cold_store`）

#### 输入

##### 产品流

###### 冷藏用电力（`refrigeration_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：冷藏用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 路线特定 (`route_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerants_storage`

###### 制冷级氨（R717）（`ammonia_refrigerant_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：制冷级氨（R717）（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerants_storage`

###### 制冷级二氧化碳（R744）（`co2_refrigerant_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：制冷级二氧化碳（R744）（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerants_storage`

###### 制冷剂 HFC-134a（R134a）（`hfc134a_refrigerant_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：制冷剂 HFC-134a（R134a）（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerants_storage`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 氨（制冷剂），排放至空气（`ammonia_leakage_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：氨（制冷剂），排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerants_storage`

###### 二氧化碳（制冷剂），排放至空气（`co2_refrigerant_leakage_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：二氧化碳（制冷剂），排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerants_storage`

###### HFC-134a，排放至空气（`hfc134a_leakage_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：HFC-134a，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerants_storage`

### 过程：清洗与公用工程供应（`cleaning_utilities`）

#### 输入

##### 产品流

###### 设备清洗用饮用级水（`cleaning_water_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：设备清洗用饮用级水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 氢氧化钠清洗液（`sodium_hydroxide_cleaning_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：氢氧化钠清洗液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 硝酸清洗液（`nitric_acid_cleaning_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：硝酸清洗液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 过氧乙酸消毒液（`peracetic_acid_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：过氧乙酸消毒液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 次氯酸钠消毒液（`sodium_hypochlorite_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：次氯酸钠消毒液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 清洗和公用工程用电力（`utility_electricity_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：清洗和公用工程用电力（Tiangong UUID 未解决）
- 流属性/单位： 能量 / kWh
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_process_energy`

###### 场内燃烧天然气（`natural_gas_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：场内燃烧天然气（Tiangong UUID 未解决）
- 流属性/单位： 能量 / MJ
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

###### 场内燃烧液化石油气（`lpg_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：场内燃烧液化石油气（Tiangong UUID 未解决）
- 流属性/单位： 能量 / MJ
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

###### 场内燃烧燃料油（`fuel_oil_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：场内燃烧燃料油（Tiangong UUID 未解决）
- 流属性/单位： 能量 / MJ
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

###### 场内燃烧柴油（`diesel_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：场内燃烧柴油（Tiangong UUID 未解决）
- 流属性/单位： 能量 / MJ
- 数量规则：按适用路线，以采购、领用、分表或经核验计算记录该原子投入的实际数量
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 设备清洗废水（`cleaning_wastewater_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：设备清洗废水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_residues_wastewater`

###### 废氢氧化钠清洗液（`spent_caustic_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废氢氧化钠清洗液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 废硝酸清洗液（`spent_acid_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废硝酸清洗液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 废过氧乙酸消毒液（`spent_disinfectant_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废过氧乙酸消毒液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

###### 废次氯酸钠消毒液（`spent_hypochlorite_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：废次氯酸钠消毒液（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：实测排放的废次氯酸钠消毒液质量
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning`

##### 基本流

###### 二氧化碳，化石源，排放至空气（`combustion_co2_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：二氧化碳，化石源，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

###### 氮氧化物，排放至空气（`combustion_nox_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：氮氧化物，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

###### 二氧化硫，排放至空气（`combustion_so2_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：二氧化硫，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

###### 一氧化碳，排放至空气（`combustion_co_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：一氧化碳，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

###### 颗粒物（小于 2.5 微米），排放至空气（`combustion_pm25_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：颗粒物（小于 2.5 微米），排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 燃料清单 (`fuel_inventory`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_fuels_emissions`

### 过程：场内废水处理（`treat_wastewater`）

#### 输入

##### 产品流

##### 废物流

###### 植物饮料生产废水（`manufacturing_wastewater_input`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：植物饮料生产废水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量进入本过程的该单一废物流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_treatment`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 场内废水处理污泥（`wastewater_sludge_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：场内废水处理污泥（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：分别计量该单一废物流，不得与其他废物流合并
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_treatment`

##### 基本流

###### 排入受纳水体的处理后废水（`treated_effluent_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：排入受纳水体的处理后废水（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_wastewater_treatment`

###### 甲烷，生物源，排放至空气（`wastewater_methane_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：甲烷，生物源，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_treatment`

###### 一氧化二氮，排放至空气（`wastewater_n2o_output`）

按所声明路线单独记录该原子交换，并按下列行级数量规则确定其数量。

- 选定流：一氧化二氮，排放至空气（Tiangong UUID 未解决）
- 流属性/单位： 质量 / kg
- 数量规则：优先实测；否则按已采集活动数据和披露的物质特定因子计算该单一排放
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每 1 kg 合格包装饮料
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_wastewater_treatment`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_avoid` | 多产出操作 | 优先通过分表计量、批次特定记录以及对提取、配料、包装、公用工程和处理操作的细分避免分配。 | `eu-pef-2021-2279` |
| `al_filtered_solids` | 过滤植物固形物 | 仅当湿过滤固形物符合有文件记录的规格并进入有经济用途的去向时，才归类为共产品。若被丢弃或付费处理，保持为废物；无受控后果型情景时不得给予替代产品抵扣。 | `eu-pef-2021-2279`; `aydar-plant-milk-2020` |
| `al_physical_then_economic` | 无法避免的共享负荷 | 无法细分时，采用实测质量、干物质、能量或加工时间等有依据的物理关系。仅在没有可辩护物理关系时采用经济分配，并披露价格、期间、币种和敏感性。 | `eu-pef-2021-2279` |
| `al_recycling` | 包装与回收残余物 | 在回收抵扣前报告总投入和总产出。一致采用所选研究方案的回收方法，不得与未报告的避免负荷抵扣混用。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials_recipe` | `receive_prepare_base`; `formulate` | 植物基料和配方配料 | 接收、库存、批次及配方记录 | 物料身份；供应商；批号；接收质量；领用质量；退料；水分或活性含量；配方；产品产出 | 核对采购、库存、领用和批次记录 | kg、kg 干物质或 kg 活性物质 | 每批物料和每生产批次 | 代表性生产期 | 所有代表性产线 | 按原子物料和配方汇总净领用质量，并按放行产品归一化 | 发票、批号记录、校准秤、配方批准、库存核对 |
| `cp_water_utilities` | `soak_base`; `grind_extract`; `formulate`; `heat_treat`; `cleaning_utilities` | 水、蒸汽和外购热 | 仪表及运行日志 | 仪表起止读数；流量；蒸汽压力；温度；冷凝水；热量表；停机时间 | 读取专用仪表，或采用有文件记录的工程分配 | kg、m3、MJ | 每批或每日 | 代表性生产期 | 所有代表性公用工程 | 扣除无关用量并按放行产品归一化 | 仪表校准、分配依据、运行日志 |
| `cp_process_energy` | 所有前景生产过程 | 过程用电 | 分表和设备记录 | kWh；运行时间；负荷；产线；批次；产品产出 | 直接分表，或按经核验的设备运行时间和负荷分配 | kWh | 每批、每班或每日 | 代表性生产期 | 所有代表性产线 | 按过程汇总并按放行产品归一化 | 校准仪表或有文件记录的分配模型 |
| `cp_enzyme_fermentation` | `enzyme_treat`; `ferment` | 酶、菌种、控制参数和发酵气体 | 领用记录、批次表、控制历史记录 | 身份；物种；菌株；领用质量；活性；接种量；时间；温度；pH；终点；废品；排气数据 | 各酶和菌种分别记录，并保留经验证的过程控制 | kg、活性单位、h、℃、pH、kg 气体 | 每批 | 所有代表性发酵批次 | 服务于代表性批次的全部发酵设备 | 仅汇总相同路线和产品变体 | 供应商证书、批次记录、校准传感器、放行决定 |
| `cp_packaging` | `fill_package` | 包装投入和废品 | 领用、计数、部件规格及废物记录 | 部件身份；材料；件数；单件质量；领用质量；退料；废品 | 计数部件并核验单件质量，或核对领用质量 | 件和 kg | 每次包装运行 | 代表性生产期 | 各包装形式 | 各部件分别计算并按产品净质量归一化 | 部件规格、校准秤、产线核对 |
| `cp_product_release` | `fill_package` | 参考产品和产品损失 | 批次、罐体、灌装机及放行记录 | 罐体质量或体积；密度；灌装件数；净装量；废品；放行状态 | 核对处理产品、包装产出、留存库存和损失 | kg | 每批和每次灌装运行 | 代表性生产期 | 所有代表性产品 | 分母仅纳入合格放行质量 | 经校准的罐体/灌装记录、密度记录、放行证书 |
| `cp_residues_wastewater` | 所有生产过程 | 残余物、废品、产品损失和废水 | 废物票据、容器称量、仪表及质量平衡 | 流身份；湿质量；干固体；体积；密度；去向；处理 | 各流分别计量；禁止混合残余物标签 | kg、kg 干物质或 m3 | 每批、每班或每次运输 | 代表性生产期 | 所有代表性产线 | 扣除皮重；按实测密度换算体积；按放行产品归一化 | 称量票据、仪表记录、分析证书、去向证据 |
| `cp_cleaning` | `cleaning_utilities` | 清洗水和化学品 | CIP 历史记录、领用及浓度记录 | 循环；回路；水；化学品身份；溶液质量；有效浓度；温度；时间；电导率；pH；回用；排放 | 按化学品和清洗回路采集 | kg、m3、℃、min、pH | 每次清洗循环 | 代表性生产期 | 所有产品接触回路 | 仅在无专用数据时分配并披露驱动因子 | 校准传感器、化学品证书、卫生验证 |
| `cp_fuels_emissions` | `cleaning_utilities` | 各燃料和直接燃烧排放 | 燃料仪表、发票、组成及烟道记录 | 载体；数量；热值；碳和硫含量；烟道浓度；流量；运行时间 | 各燃料分别记录；未实测时按披露因子分别计算各排放 | MJ 和 kg | 每月或运行期 | 代表性生产期 | 所有场内燃烧源 | 按计量有用服务或有文件记录的运行驱动因子分配 | 供应商证书、校准仪表、烟道测试、因子来源 |
| `cp_refrigerants_storage` | `cold_store` | 制冷用电和各制冷剂 | 电表、充注、采购、检修及泄漏记录 | kWh；制冷剂身份；充注量；补充量；回收量；处置量；贮存质量；时长 | 按制冷剂做库存平衡，并按质量-时间或实测负荷分配电力 | kWh、kg、kg-day | 每月及每次检修事件 | 代表性生产期 | 所有服务于产品的冷库 | 分别计算 R717、R744 和 R134a 损失 | 检修日志、采购/回收票据、泄漏检查、仪表记录 |
| `cp_wastewater_treatment` | `treat_wastewater` | 进水、出水、污泥、甲烷和一氧化二氮 | 仪表、实验室结果、污泥票据及处理日志 | 流量；pH；温度；COD 或 TOC；氮；磷；固体；污泥质量和干固体；气体 | 在相关进水、处理、排放和污泥移除点监测 | kg、m3、mg/L、kg 干物质 | 连续流量以及由许可和变异性论证的采样频率 | 代表性生产期 | 场内处理系统 | 以流量乘浓度计算负荷，并按放行产品归一化 | 校准仪表、认可检测、许可报告、污泥去向记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 参考产品 | 放行质量 = Σ（合格灌装件数 × 经核验净质量），并以罐体质量和密度交叉核对 | 灌装件数；净质量；罐体体积；密度；废品 | 合格包装饮料 kg | `mass-balance-identity` |
| `calc_normalise` | 所有前景交换 | 归一化交换 = 同期交换量 ÷ 同期合格放行产品质量 | 原子交换数量；放行产品质量 | 每 kg 参考产品的交换量 | `mass-balance-identity` |
| `calc_packaging_mass` | 每项包装部件 | 部件质量 = 领用部件件数 × 经核验单件质量；直接称量时采用净领用质量 | 件数；单件质量；领用质量；退料 | 单一包装部件 kg | `mass-balance-identity` |
| `calc_water_load` | 废水分析物 | 污染物负荷 = 废水体积 × 实测浓度，单位须一致 | 流量；浓度 | 每期间及每 kg 产品的污染物 kg | `eu-jrc-fdm-bref-2019` |
| `calc_fuel_emission` | 各直接燃烧排放 | 无代表性烟道实测时，排放量 = 各燃料数量 × 披露的载体特定因子 | 燃料数量；热值；因子或烟道数据 | 按物质分列的排放 kg | `eu-jrc-fdm-bref-2019` |
| `calc_refrigerant_loss` | 各制冷剂 | 损失 = 期初充注量 + 补充量 − 回收量 − 期末充注量，按制冷剂分别计算 | 充注及检修记录 | 排放或未核算制冷剂 kg | `eu-jrc-fdm-bref-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品与材料 | 声明植物物种、配料形态、供应商、配方和产品变体；不得用单独分类的乳状饮料流或通用蛋白饮料替代。 | 批准规格、供应商记录、配方、分类核查 |
| `dq_route` | 过程清单 | 记录每项条件路线的实际纳入或排除；保留路线特定批次，不平均不兼容的提取、发酵、保藏或包装系统。 | 过程流程图、批次记录、设备清单 |
| `dq_temporal` | 前景期间 | 使用代表正常生产的期间，并披露起止日期、产量、停机、试验和异常损失。 | 生产与维护日历 |
| `dq_completeness` | 质量、水和能源 | 核对植物基料、产品产出、残余物、废水、包装、水、电力、热和燃料；解释每项物料不平衡或未计量分配。 | 签署的核对记录和仪表覆盖图 |
| `dq_food_safety` | 产品放行与清洗 | 保留所声明产品经验证的保藏限值、监测、纠正措施、清洗验证、过敏原控制和放行决定。 | HACCP 或等效方案、卫生记录、放行证书 |
| `dq_sources` | 二手数据 | 记录每个链接数据集的提供方、地域、技术、时间、系统边界、版本和替代。 | 数据集溯源记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference` | 参考流 | 要求恰好 1 kg 合格包装其他非动物源乳状饮料及全部必需限定信息；若参考 UUID 填入更窄产品流则失败。 | `un-cpc-30-2025`; `mass-balance-identity` |
| `val_atomic` | 清单 | 每张卡只允许一个原子交换；拒绝合并植物基料、配料、公用工程、燃料、制冷剂、包装、废物或排放。 | `eu-jrc-fdm-bref-2019` |
| `val_route` | 条件过程 | 要求明确说明浸泡、提取、过滤、酶处理、发酵、均质、热路线和制冷的适用性及运行证据；不得从产品名称推断路线存在或缺失。 | `aydar-plant-milk-2020`; `tangyu-fermentation-2019` |
| `val_mass_balance` | 产品与残余物 | 在同一期间核对接收植物材料和其他质量投入，与合格产品、过滤固形物、废品、废水、污泥及库存变化。 | `mass-balance-identity`; `eu-jrc-fdm-bref-2019` |
| `val_hygiene_release` | 清洗与热处理 | 产品安全控制须有经验证限值、监测记录、纠正措施、验证及放行处置。 | `fao-who-food-hygiene-2023` |
| `val_no_unsupported_range` | 数量范围 | 拒绝来自单一案例、摘要或不兼容路线的经验范围；须有至少两份独立、原始且边界兼容的来源，否则省略范围并保留采集规则。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审核后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景工厂门生产数据集 |
| downstream_use | 所声明植物饮料的产品碳足迹、生命周期评价、采购、配方或包装情景及 lifecyclemodel 构建 |
| allowed_use | 仅用于植物物种、配方、过程路线、地域、期间、包装、保藏、贮存和分配假设均与声明相符的产品 |
| excluded_use | 不得作为椰奶、杏仁乳、豆奶、米浆、燕麦奶、动物乳、粉末、婴幼儿配方食品、勺食发酵食品或未声明植物基路线的通用代理 |
| required_metadata | 植物身份和来源；配料形态和配方；功能单位与参考流限定信息；过程纳入；发酵和热处理控制；包装；贮存；设施和期间；分配；上游数据集；不确定性和数据缺口 |
| required_quality_disclosure | 仪表和记录覆盖；质量、水和能源核对；采样和计算方法；路线特定排除；共产品和废物分类；未解决 UUID 和范围证据；食品安全放行证据 |
| update_trigger | 植物物种、配方、供应商形态、提取或发酵路线、酶、保藏制度、包装、制冷系统、燃料组合、设施、分配、法规或代表性生产期发生变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-30-2025` | `official_guidance` | United Nations Statistics Division. *Central Product Classification Version 3.0 Explanatory Notes*, code 24429, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-23). | 类别范围和排除项 |
| `aydar-plant-milk-2020` | `literature` | Aydar, E.F., Tütüncü, S., and Özçelik, B. *Plant-based milk substitutes: Bioactive compounds, conventional and novel processes, bioavailability studies, and health effects*. Journal of Functional Foods 70 (2020) 103975. https://doi.org/10.1016/j.jff.2020.103975. | 多来源过程分解、共通工序及植物特定条件路线 |
| `tangyu-fermentation-2019` | `literature` | Tangyu, M., Muller, J., Bolten, C.J., and Wittmann, C. *Fermentation of plant-based milk alternatives for improved flavour and nutritional value*. Applied Microbiology and Biotechnology 103 (2019) 9263–9275. https://doi.org/10.1007/s00253-019-10175-9. | 条件发酵路线、菌种身份和路线特定控制要求 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre. *Best Available Techniques Reference Document for the Food, Drink and Milk Industries*, EUR 29978 EN, JRC118627, 2019. https://doi.org/10.2760/243911. | 水、能源、原料、废水、空气排放、清洗、包装和制冷剂清单规则 |
| `fao-who-food-hygiene-2023` | `official_guidance` | FAO and WHO. *General Principles of Food Hygiene*, CXC 1-1969, Rome, 2023. https://doi.org/10.4060/cc6125en. | 卫生、清洗、预防性控制、监测、纠正措施、验证和文件记录 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, 2021. http://data.europa.eu/eli/reco/2021/2279/oj. | 生命周期边界、分配、回收一致性和二手数据披露 |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass and inventory reconciliation identity. | 参考归一化、包装换算、质量平衡及禁止单案例范围规则 |
